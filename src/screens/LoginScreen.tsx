import React from 'react';
import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { s } from '../theme/styles';
import { BackHeader } from '../components/BackHeader';
import { Field } from '../components/Field';
import { Button } from '../components/Button';
import { Icon, IconName } from '../components/Icon';

export default function LoginScreen({ email, setEmail, password, setPassword, onBack, onLogin, onSignup, onForgot }: {
  email: string; setEmail: (v: string) => void; password: string; setPassword: (v: string) => void;
  onBack: () => void; onLogin: () => void; onSignup: () => void; onForgot: () => void;
}) {
  return <ScrollView contentContainerStyle={s.authContent} keyboardShouldPersistTaps="handled">
    <BackHeader title="Log In" onBack={onBack} />
    <Text style={s.authHeading}>Welcome</Text>
    <Text style={s.authDescription}>Welcome to Skin Firts. Sign in to view doctors and appointments.</Text>
    <View style={{ marginTop: 23 }}>
      <Field label="Email or Mobile Number" value={email} onChangeText={setEmail} placeholder="example@example.com" keyboardType="email-address" />
      <Field label="Password" value={password} onChangeText={setPassword} placeholder="••••••••" secure />
      <Pressable onPress={onForgot}><Text style={s.forgot}>Forgot Password?</Text></Pressable>
    </View>
    <Button title="Log In" onPress={onLogin} style={{ marginTop: 24, alignSelf: 'center', width: 205 }} />
    <Text style={s.orText}>or sign up with</Text>
    <View style={s.socialRow}>
      {(['logo-google', 'logo-facebook', 'finger-print'] as IconName[]).map(name =>
        <Pressable key={name} style={s.socialCircle} onPress={() => Alert.alert('Demo', 'Social login is not connected yet.')}>
          <Icon name={name} size={22} />
        </Pressable>
      )}
    </View>
    <View style={s.authFooter}>
      <Text style={s.authFooterText}>Don't have an account? </Text>
      <Pressable onPress={onSignup}><Text style={s.authFooterLink}>Sign Up</Text></Pressable>
    </View>
  </ScrollView>;
}
