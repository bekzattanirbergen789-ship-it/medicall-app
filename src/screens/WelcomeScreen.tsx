import React from 'react';
import { Text, View } from 'react-native';
import { s } from '../theme/styles';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';

export default function WelcomeScreen({ onLogin, onSignup }: { onLogin: () => void; onSignup: () => void }) {
  return <View style={s.welcome}>
    <View style={{ flex: 1, justifyContent: 'center' }}><Logo large /></View>
    <Text style={s.welcomeBody}>Your skin deserves professional and gentle care. Find a specialist and book a consultation.</Text>
    <Button title="Log In" onPress={onLogin} />
    <Button title="Sign Up" light onPress={onSignup} style={{ marginTop: 9 }} />
  </View>;
}
