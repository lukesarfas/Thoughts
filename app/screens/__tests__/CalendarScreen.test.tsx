import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import CalendarScreen from '../CalendarScreen';
import { useJournalEntries } from '../../hooks/useJournalEntries';
import { useFocusEffect } from '@react-navigation/native';

// Mock hooks
jest.mock('../../hooks/useJournalEntries');
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
}));

const mockedUseJournalEntries = useJournalEntries as jest.Mock;

describe('CalendarScreen', () => {
  const navigation = { navigate: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the loading state', () => {
    mockedUseJournalEntries.mockReturnValue({
      entries: [],
      loading: true,
      error: null,
      loadEntries: jest.fn(),
    });

    const { getByText } = render(<CalendarScreen navigation={navigation} />);
    expect(getByText('Loading entries...')).toBeTruthy();
  });

  it('renders the initial state with no date selected', () => {
    mockedUseJournalEntries.mockReturnValue({
      entries: [],
      loading: false,
      error: null,
      loadEntries: jest.fn(),
    });

    const { getByText } = render(<CalendarScreen navigation={navigation} />);
    expect(getByText('Select a date to view your journal entries')).toBeTruthy();
  });

  it('selects a day and displays entries', () => {
    const mockEntries = [
      { id: '1', content: 'First entry', date: '2024-01-01', createdAt: '2024-01-01T12:00:00Z' },
    ];
    mockedUseJournalEntries.mockReturnValue({
      entries: mockEntries,
      loading: false,
      error: null,
      loadEntries: jest.fn(),
    });

    const { getByText } = render(<CalendarScreen navigation={navigation} />);
    
    // Press the mock calendar
    fireEvent.press(getByText('Select a day'));

    expect(getByText('First entry')).toBeTruthy();
  });

  it('navigates to entry detail when an entry is pressed', () => {
    const mockEntries = [
      { id: '1', content: 'First entry', date: '2024-01-01', createdAt: '2024-01-01T12:00:00Z' },
    ];
    mockedUseJournalEntries.mockReturnValue({
      entries: mockEntries,
      loading: false,
      error: null,
      loadEntries: jest.fn(),
    });

    const { getByText } = render(<CalendarScreen navigation={navigation} />);
    
    fireEvent.press(getByText('Select a day')); // Select day to show entries
    fireEvent.press(getByText('First entry'));

    expect(navigation.navigate).toHaveBeenCalledWith('EntryDetail', { entryId: '1' });
  });

  it('navigates to insights when the insights button is pressed', () => {
    mockedUseJournalEntries.mockReturnValue({
      entries: [],
      loading: false,
      error: null,
      loadEntries: jest.fn(),
    });

    const { getByText } = render(<CalendarScreen navigation={navigation} />);
    
    fireEvent.press(getByText('Select a day')); // Select day to show button
    fireEvent.press(getByText('Insights'));

    expect(navigation.navigate).toHaveBeenCalledWith('Insights', { selectedDate: '2024-01-01' });
  });
}); 