import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';

export default function SignInScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    try {
      await Auth.signIn(email, password);
      // The AppNavigator will automatically detect the sign-in and switch screens.
    } catch (error: any) {
      // Log the full error to the console for debugging
      console.log('Sign-in error:', JSON.stringify(error, null, 2));

      if (error.name === 'UserNotConfirmedException') {
        Alert.alert('Account not verified', 'Please check your email for a verification code.');
        navigation.navigate('SignUp', { email: email, step: 'confirm' });
      } else {
        Alert.alert('Error Signing In', error.message || JSON.stringify(error));
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign In" onPress={handleSignIn} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 10 },
  linkText: { color: 'blue', marginTop: 20, textAlign: 'center' },
}); 