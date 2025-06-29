import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entry, CreateEntryRequest, UpdateEntryRequest } from '../models/Entry';

const ENTRIES_KEY = 'journal_entries';

export class LocalStorageService {
  // Get all entries
  static async getAllEntries(): Promise<Entry[]> {
    try {
      const entriesJson = await AsyncStorage.getItem(ENTRIES_KEY);
      return entriesJson ? JSON.parse(entriesJson) : [];
    } catch (error) {
      console.error('Error getting entries:', error);
      return [];
    }
  }

  // Get entry by ID
  static async getEntryById(id: string): Promise<Entry | null> {
    try {
      const entries = await this.getAllEntries();
      return entries.find(entry => entry.id === id) || null;
    } catch (error) {
      console.error('Error getting entry by ID:', error);
      return null;
    }
  }

  // Create new entry
  static async createEntry(request: CreateEntryRequest): Promise<Entry> {
    try {
      const entries = await this.getAllEntries();
      const now = new Date().toISOString();
      
      const newEntry: Entry = {
        id: Date.now().toString(),
        text: request.text,
        timestamp: now,
        createdAt: now,
        updatedAt: now,
      };

      entries.push(newEntry);
      await AsyncStorage.setItem(ENTRIES_KEY, JSON.stringify(entries));
      
      return newEntry;
    } catch (error) {
      console.error('Error creating entry:', error);
      throw new Error('Failed to create entry');
    }
  }

  // Update existing entry
  static async updateEntry(id: string, request: UpdateEntryRequest): Promise<Entry | null> {
    try {
      const entries = await this.getAllEntries();
      const entryIndex = entries.findIndex(entry => entry.id === id);
      
      if (entryIndex === -1) {
        return null;
      }

      entries[entryIndex] = {
        ...entries[entryIndex],
        text: request.text,
        updatedAt: new Date().toISOString(),
      };

      await AsyncStorage.setItem(ENTRIES_KEY, JSON.stringify(entries));
      return entries[entryIndex];
    } catch (error) {
      console.error('Error updating entry:', error);
      throw new Error('Failed to update entry');
    }
  }

  // Delete entry
  static async deleteEntry(id: string): Promise<boolean> {
    try {
      const entries = await this.getAllEntries();
      const filteredEntries = entries.filter(entry => entry.id !== id);
      
      await AsyncStorage.setItem(ENTRIES_KEY, JSON.stringify(filteredEntries));
      return true;
    } catch (error) {
      console.error('Error deleting entry:', error);
      return false;
    }
  }

  // Get entries by date range
  static async getEntriesByDateRange(startDate: string, endDate: string): Promise<Entry[]> {
    try {
      const entries = await this.getAllEntries();
      return entries.filter(entry => {
        const entryDate = entry.timestamp.split('T')[0];
        return entryDate >= startDate && entryDate <= endDate;
      });
    } catch (error) {
      console.error('Error getting entries by date range:', error);
      return [];
    }
  }

  // Clear all entries (for testing/reset)
  static async clearAllEntries(): Promise<void> {
    try {
      await AsyncStorage.removeItem(ENTRIES_KEY);
    } catch (error) {
      console.error('Error clearing entries:', error);
    }
  }
} 