import { useState, useEffect, useCallback } from 'react';
import { Entry, CreateEntryRequest, UpdateEntryRequest } from '../models/Entry';
import { LocalStorageService } from '../services/LocalStorageService';

export const useJournalEntries = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load all entries on mount
  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const allEntries = await LocalStorageService.getAllEntries();
      setEntries(allEntries);
    } catch (err) {
      setError('Failed to load entries');
      console.error('Error loading entries:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const createEntry = useCallback(async (request: CreateEntryRequest) => {
    try {
      setError(null);
      const newEntry = await LocalStorageService.createEntry(request);
      // Entries are already sorted by timestamp in storage, so just reload
      await loadEntries();
      return newEntry;
    } catch (err) {
      setError('Failed to create entry');
      console.error('Error creating entry:', err);
      throw err;
    }
  }, [loadEntries]);

  const updateEntry = useCallback(async (id: string, request: UpdateEntryRequest) => {
    try {
      setError(null);
      const updatedEntry = await LocalStorageService.updateEntry(id, request);
      if (updatedEntry) {
        // Reload entries to maintain consistent ordering
        await loadEntries();
      }
      return updatedEntry;
    } catch (err) {
      setError('Failed to update entry');
      console.error('Error updating entry:', err);
      throw err;
    }
  }, [loadEntries]);

  const deleteEntry = useCallback(async (id: string) => {
    try {
      setError(null);
      const success = await LocalStorageService.deleteEntry(id);
      if (success) {
        // Reload entries to maintain consistent ordering
        await loadEntries();
      }
      return success;
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
      const entryDate = entry.timestamp.split('T')[0];
      return entryDate === date;
    });
  }, [entries]);

  const clearAllEntries = useCallback(async () => {
    try {
      setError(null);
      await LocalStorageService.clearAllEntries();
      setEntries([]);
    } catch (err) {
      setError('Failed to clear entries');
      console.error('Error clearing entries:', err);
    }
  }, []);

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
    clearAllEntries,
  };
}; 