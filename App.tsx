import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Amplify } from 'aws-amplify';

import AppNavigator from './app/navigation/AppNavigator';
import config from './src/amplifyconfiguration.json';

Amplify.configure(config);

function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App; 