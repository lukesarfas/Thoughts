import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useJournalEntries } from '../hooks/useJournalEntries';

const EntryDetailScreen = ({ route, navigation }) => {
  const { entryId } = route.params;
  const { entries, updateEntry, deleteEntry } = useJournalEntries();
  const [entry, setEntry] = useState(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const currentEntry = entries.find(e => e.id === entryId);
    if (currentEntry) {
      setEntry(currentEntry);
      setContent(currentEntry.content);
      setTitle(currentEntry.title);
    }
  }, [entries, entryId]);

  const handleUpdate = async () => {
    try {
      await updateEntry(entry.id, { ...entry, content, title });
      navigation.goBack();
    } catch (e) {
      Alert.alert('Error', 'Failed to update entry.');
      console.log('Error updating entry: ', e);
    }
  };

  const handleDelete = async () => {
    Alert.alert(
      'Delete Entry',
      'Are you sure you want to delete this entry?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteEntry(entry.id);
              navigation.goBack();
            } catch (e) {
              Alert.alert('Error', 'Failed to delete entry.');
              console.log('Error deleting entry: ', e);
            }
          },
        },
      ],
    );
  };

  if (!entry) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      {isEditing ? (
        <>
          <TextInput
            value={title}
            onChangeText={setTitle}
            style={styles.titleInput}
            placeholder="Title"
          />
          <TextInput
            value={content}
            onChangeText={setContent}
            style={styles.contentInput}
            placeholder="Write your thoughts..."
            multiline
          />
          <Button title="Save" onPress={handleUpdate} />
          <Button title="Cancel" onPress={() => setIsEditing(false)} />
        </>
      ) : (
        <>
          <Text style={styles.title}>{entry.title}</Text>
          <Text style={styles.content}>{entry.content}</Text>
          <Button title="Edit" onPress={() => setIsEditing(true)} />
          <Button title="Delete" onPress={handleDelete} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contentInput: {
    fontSize: 16,
    flex: 1,
  },
});

export default EntryDetailScreen; 