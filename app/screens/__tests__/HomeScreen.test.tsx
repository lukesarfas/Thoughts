import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import { useJournalEntries } from '../../hooks/useJournalEntries';
import { useFocusEffect } from '@react-navigation/native';
import { Alert } from 'react-native';

// Mock modules
jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));
jest.mock('../../hooks/useJournalEntries');
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
}));

const mockedUseJournalEntries = useJournalEntries as jest.Mock;

describe('HomeScreen', () => {
  const navigation = { navigate: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the loading state', () => {
    mockedUseJournalEntries.mockReturnValue({
      entries: [],
      loading: true,
      error: null,
      createEntry: jest.fn(),
      loadEntries: jest.fn(),
    });

    const { getByText } = render(<HomeScreen navigation={navigation} />);
    expect(getByText('Loading...')).toBeTruthy();
  });

  it('renders the empty state', () => {
    mockedUseJournalEntries.mockReturnValue({
      entries: [],
      loading: false,
      error: null,
      createEntry: jest.fn(),
      loadEntries: jest.fn(),
    });

    const { getByText } = render(<HomeScreen navigation={navigation} />);
    expect(getByText('No entries yet. Create your first one above!')).toBeTruthy();
  });

  it('renders a list of entries', () => {
    const mockEntries = [
      { id: '1', content: 'First entry', createdAt: new Date().toISOString() },
      { id: '2', content: 'Second entry', createdAt: new Date().toISOString() },
    ];
    mockedUseJournalEntries.mockReturnValue({
      entries: mockEntries,
      loading: false,
      error: null,
      createEntry: jest.fn(),
      loadEntries: jest.fn(),
    });

    const { getByText } = render(<HomeScreen navigation={navigation} />);
    expect(getByText('First entry')).toBeTruthy();
    expect(getByText('Second entry')).toBeTruthy();
  });

  it('creates a new entry', async () => {
    const createEntryMock = jest.fn().mockResolvedValue({});
    mockedUseJournalEntries.mockReturnValue({
      entries: [],
      loading: false,
      error: null,
      createEntry: createEntryMock,
      loadEntries: jest.fn(),
    });

    const { getByText, getByPlaceholderText } = render(<HomeScreen navigation={navigation} />);

    const input = getByPlaceholderText("What's on your mind today?");
    fireEvent.changeText(input, 'New test entry');

    const saveButton = getByText('Save Entry');
    await act(async () => {
      fireEvent.press(saveButton);
    });

    expect(createEntryMock).toHaveBeenCalledWith({ text: 'New test entry' });
    expect(Alert.alert).toHaveBeenCalledWith('Success', 'Journal entry created successfully!');
  });
}); 