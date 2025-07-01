import { renderHook, act } from '@testing-library/react-hooks';
import { useJournalEntries } from '../useJournalEntries';
import { API, Auth } from 'aws-amplify';

// Mock Amplify Auth and API
jest.mock('aws-amplify', () => ({
  API: {
    graphql: jest.fn(),
  },
  Auth: {
    currentAuthenticatedUser: jest.fn(),
  },
  graphqlOperation: (query: any) => query, // Mock graphqlOperation as well
}));

const mockGraphql = API.graphql as jest.Mock;
const mockAuth = Auth.currentAuthenticatedUser as jest.Mock;

describe('useJournalEntries', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    mockGraphql.mockClear();
    mockAuth.mockClear();

    // Setup a default mock for authentication
    mockAuth.mockResolvedValue({
      attributes: {
        sub: 'test-user-id',
      },
    });
  });

  it('should load entries on initial render and set loading state', async () => {
    const mockEntries = [
      { id: '1', content: 'First entry', date: '2024-01-01', createdAt: '2024-01-01T12:00:00Z' },
      { id: '2', content: 'Second entry', date: '2024-01-02', createdAt: '2024-01-02T12:00:00Z' },
    ];

    mockGraphql.mockResolvedValue({
      data: {
        listJournalEntries: {
          items: mockEntries,
        },
      },
    });

    const { result, waitForNextUpdate } = renderHook(() => useJournalEntries());

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.entries).toHaveLength(2);
    expect(result.current.entries[0].id).toBe('2'); // Check for descending sort order
  });

  it('should create an entry', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useJournalEntries());
    await act(async () => {
      await waitForNextUpdate(); // Wait for initial load
    });

    mockGraphql
      .mockResolvedValueOnce({ data: { listJournalEntries: { items: [] } } }) // For initial load
      .mockResolvedValueOnce({ data: { createJournalEntry: { id: '3', content: 'new entry' } } }) // For mutation
      .mockResolvedValueOnce({ data: { listJournalEntries: { items: [] } } }); // For reload

    await act(async () => {
      await result.current.createEntry({ text: 'new entry' });
    });

    expect(mockGraphql).toHaveBeenCalledTimes(3);
  });

  it('should update an entry', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useJournalEntries());
    await act(async () => {
      await waitForNextUpdate();
    });

    mockGraphql
      .mockResolvedValueOnce({ data: { listJournalEntries: { items: [] } } })
      .mockResolvedValueOnce({ data: { updateJournalEntry: { id: '1', content: 'updated' } } })
      .mockResolvedValueOnce({ data: { listJournalEntries: { items: [] } } });

    await act(async () => {
      await result.current.updateEntry('1', { text: 'updated' });
    });

    expect(mockGraphql).toHaveBeenCalledTimes(3);
  });

  it('should delete an entry', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useJournalEntries());
    await act(async () => {
      await waitForNextUpdate();
    });

    mockGraphql
      .mockResolvedValueOnce({ data: { listJournalEntries: { items: [] } } })
      .mockResolvedValueOnce({ data: { deleteJournalEntry: { id: '1' } } })
      .mockResolvedValueOnce({ data: { listJournalEntries: { items: [] } } });

    await act(async () => {
      await result.current.deleteEntry('1');
    });

    expect(mockGraphql).toHaveBeenCalledTimes(3);
  });
}); 