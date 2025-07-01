import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useJournalEntries } from '../hooks/useJournalEntries';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen({ navigation }: any) {
  const [newEntryText, setNewEntryText] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const { entries, loading, error, createEntry, loadEntries } = useJournalEntries();

  // Refresh entries when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      loadEntries();
    }, [loadEntries])
  );

  const handleCreateEntry = async () => {
    if (!newEntryText.trim()) {
      Alert.alert('Error', 'Please enter some text for your journal entry');
      return;
    }

    try {
      setIsCreating(true);
      await createEntry({ text: newEntryText.trim() });
      setNewEntryText('');
      Alert.alert('Success', 'Journal entry created successfully!');
    } catch (err) {
      Alert.alert('Error', 'Failed to create journal entry');
    } finally {
      setIsCreating(false);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const truncateText = (text: string, maxLength: number = 100) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AI Journal</Text>
      
      {/* Create Entry Section */}
      <View style={styles.createSection}>
        <Text style={styles.sectionTitle}>Create New Entry</Text>
        <TextInput
          style={styles.textInput}
          placeholder="What's on your mind today?"
          value={newEntryText}
          onChangeText={setNewEntryText}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          testID="new-entry-input"
        />
        <TouchableOpacity
          style={[styles.button, isCreating && styles.buttonDisabled]}
          onPress={handleCreateEntry}
          disabled={isCreating}
          testID="save-entry-button"
        >
          <Text style={styles.buttonText}>
            {isCreating ? 'Creating...' : 'Save Entry'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Recent Entries Section */}
      <View style={styles.entriesSection}>
        <Text style={styles.sectionTitle}>
          Recent Entries ({entries.length})
        </Text>
        
        {error && (
          <Text style={styles.errorText}>{error}</Text>
        )}

        {entries.length === 0 ? (
          <Text style={styles.emptyText}>No entries yet. Create your first one above!</Text>
        ) : (
          <ScrollView style={styles.entriesList}>
            {entries.slice(0, 5).map((entry) => (
              <TouchableOpacity
                key={entry.id}
                style={styles.entryCard}
                onPress={() => navigation.navigate('EntryDetail', { entryId: entry.id })}
              >
                <Text style={styles.entryText}>
                  {truncateText(entry.content)}
                </Text>
                <Text style={styles.entryDate}>
                  {formatDate(entry.createdAt)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: '#666',
  },
  createSection: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    minHeight: 100,
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  entriesSection: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
    marginTop: 20,
  },
  entriesList: {
    flex: 1,
  },
  entryCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  entryText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
  entryDate: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
}); 