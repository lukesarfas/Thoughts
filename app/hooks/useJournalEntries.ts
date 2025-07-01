import { useState, useEffect, useCallback } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';
import { Entry, CreateEntryRequest, UpdateEntryRequest } from '../models/Entry';

const AUTH_MODE = 'AMAZON_COGNITO_USER_POOLS';

// Custom mutation that only requests basic fields to avoid authorization issues
const CREATE_JOURNAL_ENTRY = /* GraphQL */ `
  mutation CreateJournalEntry(
    $input: CreateJournalEntryInput!
    $condition: ModelJournalEntryConditionInput
  ) {
    createJournalEntry(input: $input, condition: $condition) {
      id
      userID
      date
      content
      moodTags
      sentimentScore
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;

export const useJournalEntries = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadEntries = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result: any = await API.graphql({
        ...graphqlOperation(queries.listJournalEntries),
        authMode: AUTH_MODE,
      });
      const entriesFromCloud = result.data?.listJournalEntries?.items || [];
      // Sort by timestamp descending (newest first)
      const sortedEntries = entriesFromCloud.sort((a: Entry, b: Entry) => 
        new Date(b.createdAt || b.date).getTime() - new Date(a.createdAt || a.date).getTime()
      );
      setEntries(sortedEntries);
    } catch (err) {
      setError('Failed to load entries');
      console.error('Error loading entries:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEntries();
  }, [loadEntries]);

  const createEntry = useCallback(async (request: CreateEntryRequest) => {
    try {
      setError(null);
      const currentUser = await Auth.currentAuthenticatedUser();
      const now = new Date().toISOString();
      const dateOnly = now.split('T')[0]; // Format as YYYY-MM-DD for AWSDate
      
      const result: any = await API.graphql({
        ...graphqlOperation(CREATE_JOURNAL_ENTRY, {
          input: {
            userID: currentUser.attributes.sub,
            content: request.text,
            date: dateOnly,
          }
        }),
        authMode: AUTH_MODE,
      });
      await loadEntries(); // Reload to get the new entry
      return result.data?.createJournalEntry;
    } catch (err) {
      setError('Failed to create entry');
      console.error('Error creating entry:', err);
      throw err;
    }
  }, [loadEntries]);

  const updateEntry = useCallback(async (id: string, request: UpdateEntryRequest) => {
    try {
      setError(null);
      const result: any = await API.graphql({
        ...graphqlOperation(mutations.updateJournalEntry, {
          input: {
            id: id,
            content: request.text,
          }
        }),
        authMode: AUTH_MODE,
      });
      await loadEntries(); // Reload to get the updated entry
      return result.data?.updateJournalEntry;
    } catch (err) {
      setError('Failed to update entry');
      console.error('Error updating entry:', err);
      throw err;
    }
  }, [loadEntries]);

  const deleteEntry = useCallback(async (id: string) => {
    try {
      setError(null);
      await API.graphql({
        ...graphqlOperation(mutations.deleteJournalEntry, {
          input: { id: id }
        }),
        authMode: AUTH_MODE,
      });
      await loadEntries(); // Reload to remove the deleted entry
      return true;
    } catch (err) {
      setError('Failed to delete entry');
      console.error('Error deleting entry:', err);
      return false;
    }
  }, [loadEntries]);
  
  const getEntryById = useCallback((id: string) => {
    return entries.find(entry => entry.id === id) || null;
  }, [entries]);

  const getEntriesByDate = useCallback((date: string) => {
    return entries.filter(entry => {
      const entryDate = entry.date.split('T')[0];
      return entryDate === date;
    });
  }, [entries]);

  return {
    entries,
    loading,
    error,
    createEntry,
    updateEntry,
    deleteEntry,
    getEntryById,
    getEntriesByDate,
    loadEntries,
  };
}; 