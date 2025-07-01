module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo|react-navigation|@react-native-community|@aws-amplify|aws-amplify|@testing-library|react-native-gesture-handler|react-native-reanimated)',
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      lines: 0,
      statements: 0,
    },
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/app/screens',
  ],
}; 