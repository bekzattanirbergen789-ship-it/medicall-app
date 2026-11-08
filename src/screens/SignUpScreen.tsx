import React from 'react';
import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { s } from '../theme/styles';
import { BackHeader } from '../components/BackHeader';
import { Field } from '../components/Field';
import { Button } from '../components/Button';
import { Icon, IconName } from '../components/Icon';

export default function SignUpScreen({ fullName, setFullName, email, setEmail, password, setPassword, mobile, setMobile, birth, setBirth, onBack, onSignup, onLogin }: {
  fullName: string; setFullName: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  password: string; setPassword: (v: string) => void;
  mobile: string; setMobile: (v: string) => void;
  birth: string; setBirth: (v: string) => void;
  onBack: () => void; onSignup: () => void; onLogin: () => void;
}) {
  return <ScrollView contentContainerStyle={s.authContent} keyboardShouldPersistTaps="handled">
    <BackHeader title="New Account" onBack={onBack} />
    <Field label="Full Name" value={fullName} onChangeText={setFullName} placeholder="Your full name" />
    <Field label="Password" value={password} onChangeText={setPassword} placeholder="••••••••" secure />
    <Field label="Email" value={email} onChangeText={setEmail} placeholder="example@example.com" keyboardType="email-address" />
    <Field label="Mobile Number" value={mobile} onChangeText={setMobile} placeholder="+7 777 123 4567" keyboardType="phone-pad" />
    <Field label="Date Of Birth" value={birth} onChangeText={setBirth} placeholder="DD / MM / YYYY" />
    <Text style={s.terms}>This is a student demo app. No real account is created or information sent to a server.</Text>
    <Button title="Sign Up" onPress={onSignup} style={{ alignSelf: 'center', width: 205 }} />
    <Text style={s.orText}>or sign up with</Text>
    <View style={s.socialRow}>
      {(['logo-google', 'logo-facebook', 'finger-print'] as IconName[]).map(name =>
        <Pressable key={name} style={s.socialCircle} onPress={() => Alert.alert('Demo', 'Social sign-up is not connected.')}>
          <Icon name={name} size={22} />
        </Pressable>
      )}
    </View>
    <View style={s.authFooter}>
      <Text style={s.authFooterText}>Already have an account? </Text>
      <Pressable onPress={onLogin}><Text style={s.authFooterLink}>Log In</Text></Pressable>
    </View>
  </ScrollView>;
}
