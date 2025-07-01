const Reanimated = require('react-native-reanimated/mock');

// The mock for `react-native-reanimated` has some missing properties that we need to add manually
Reanimated.default.call = () => {};

module.exports = Reanimated; 