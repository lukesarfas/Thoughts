// @ts-nocheck
import 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  const { getByText } = render(<Text>Hello, World!</Text>);
  expect(getByText('Hello, World!')).toBeTruthy();
}); 