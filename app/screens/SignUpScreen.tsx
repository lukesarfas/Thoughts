import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';

export default function SignUpScreen({ route, navigation }: { route: any, navigation: any }) {
  const [email, setEmail] = useState(route.params?.email || '');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(route.params?.step || 'signUp');

  async function handleSignUp() {
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: { email },
      });
      setStep('confirm');
      Alert.alert('Success', 'Check your email for a verification code.');
    } catch (error: any) {
      Alert.alert('Error Signing Up', error.message || JSON.stringify(error));
    }
  }

  async function handleConfirmSignUp() {
    try {
      await Auth.confirmSignUp(email, code);
      Alert.alert('Success', 'Account confirmed! Please sign in.');
      navigation.navigate('SignIn');
    } catch (error: any) {
      Alert.alert('Error Confirming', error.message || JSON.stringify(error));
    }
  }

  async function handleResendCode() {
    try {
      await Auth.resendSignUp(email);
      Alert.alert('Success', 'A new verification code has been sent to your email.');
    } catch (error: any) {
      Alert.alert('Error Resending Code', error.message || JSON.stringify(error));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{step === 'signUp' ? 'Create Account' : 'Verify Email'}</Text>
      
      {step === 'signUp' ? (
        <>
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
          <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
          <Button title="Sign Up" onPress={handleSignUp} />
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.linkText}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
          <TextInput style={styles.input} placeholder="Verification Code" value={code} onChangeText={setCode} />
          <Button title="Confirm Sign Up" onPress={handleConfirmSignUp} />
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={styles.linkText}>Resend Code</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 10 },
  linkText: { color: 'blue', marginTop: 20, textAlign: 'center' },
}); 