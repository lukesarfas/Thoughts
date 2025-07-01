import '@testing-library/jest-native/extend-expect';

// Silence React Native warning: Animated: `useNativeDriver`.
// @ts-ignore
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper'); 