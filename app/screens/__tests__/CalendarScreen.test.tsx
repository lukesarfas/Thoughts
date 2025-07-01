// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react-native';
import CalendarScreen from '../CalendarScreen';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('../../hooks/useJournalEntries', () => {
  return {
    useJournalEntries: () => ({
      entries: [
        {
          id: '1',
          userID: 'user',
          content: 'hello',
          date: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      loading: false,
      error: null,
      getEntriesByDate: () => [],
      loadEntries: jest.fn(),
    }),
  };
});

jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    useNavigation: () => ({ navigate: jest.fn() }),
  };
});

describe('CalendarScreen', () => {
  it('renders calendar component', () => {
    const { getByText } = render(
      <NavigationContainer>
        <CalendarScreen />
      </NavigationContainer>
    );
    expect(getByText('Select a date to view your journal entries')).toBeTruthy();
  });
}); 