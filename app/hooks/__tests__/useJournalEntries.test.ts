// @ts-nocheck
import { renderHook, act } from '@testing-library/react-hooks';
import { useJournalEntries } from '../useJournalEntries';

jest.mock('aws-amplify', () => {
  const mockEntries = [];
  return {
    API: {
      graphql: jest.fn(({ variables, query }) => {
        // Very naive mock behavior based on mutation/query names
        if (query && query.includes('createJournalEntry')) {
          const newEntry = {
            id: String(mockEntries.length + 1),
            userID: 'user123',
            content: variables.input.content,
            date: variables.input.date,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          mockEntries.push(newEntry);
          return Promise.resolve({ data: { createJournalEntry: newEntry } });
        }
        if (query && query.includes('updateJournalEntry')) {
          const idx = mockEntries.findIndex(e => e.id === variables.input.id);
          if (idx >= 0) {
            mockEntries[idx].content = variables.input.content;
            mockEntries[idx].updatedAt = new Date().toISOString();
          }
          return Promise.resolve({ data: { updateJournalEntry: mockEntries[idx] } });
        }
        if (query && query.includes('deleteJournalEntry')) {
          const idx = mockEntries.findIndex(e => e.id === variables.input.id);
          if (idx >= 0) mockEntries.splice(idx, 1);
          return Promise.resolve({ data: { deleteJournalEntry: { id: variables.input.id } } });
        }
        // listJournalEntries
        return Promise.resolve({ data: { listJournalEntries: { items: mockEntries } } });
      }),
    },
    graphqlOperation: (query, variables) => ({ query, variables }),
    Auth: {
      currentAuthenticatedUser: jest.fn(() => Promise.resolve({ attributes: { sub: 'user123' } })),
    },
  };
});

describe('useJournalEntries hook', () => {
  it('can create, update, and delete an entry', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useJournalEntries());

    // wait for initial loadEntries
    await waitForNextUpdate();

    // CREATE
    await act(async () => {
      await result.current.createEntry({ text: 'first entry' });
    });
    expect(result.current.entries).toHaveLength(1);

    const entryId = result.current.entries[0].id;

    // UPDATE
    await act(async () => {
      await result.current.updateEntry(entryId, { text: 'updated entry' });
    });
    expect(result.current.entries[0].content).toBe('updated entry');

    // DELETE
    await act(async () => {
      await result.current.deleteEntry(entryId);
    });
    expect(result.current.entries).toHaveLength(0);
  });
}); 