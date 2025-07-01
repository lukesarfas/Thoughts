// @ts-nocheck
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('../../hooks/useJournalEntries', () => {
  return {
    useJournalEntries: () => ({
      entries: [],
      loading: false,
      error: null,
      createEntry: jest.fn().mockResolvedValue({}),
      loadEntries: jest.fn(),
    }),
  };
});

describe('HomeScreen', () => {
  it('renders and allows creating entry button', () => {
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen navigation={{ navigate: jest.fn() }} />
      </NavigationContainer>
    );
    expect(getByText('Save Entry')).toBeTruthy();
  });
}); 