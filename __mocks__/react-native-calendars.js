import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// A very lightweight, non-interactive mock for the Calendar component
export const Calendar = ({ onDayPress }) => {
  return (
    <View>
      <Text>Mock Calendar</Text>
      <TouchableOpacity onPress={() => onDayPress({ dateString: '2024-01-01' })}>
        <Text>Select a day</Text>
      </TouchableOpacity>
    </View>
  );
};

// Mock DateData type isn't strictly necessary in JS mock, but helps clarity.
export const DateData = {}; 