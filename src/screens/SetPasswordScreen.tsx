import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { s } from '../theme/styles';
import { BackHeader } from '../components/BackHeader';
import { Field } from '../components/Field';
import { Button } from '../components/Button';

export default function SetPasswordScreen({ password, setPassword, confirmPassword, setConfirmPassword, onBack, onSave }: {
  password: string; setPassword: (v: string) => void;
  confirmPassword: string; setConfirmPassword: (v: string) => void;
  onBack: () => void; onSave: () => void;
}) {
  return <ScrollView contentContainerStyle={s.authContent} keyboardShouldPersistTaps="handled">
    <BackHeader title="Set Password" onBack={onBack} />
    <Text style={s.authDescription}>Create a new password. Use at least six characters.</Text>
    <View style={{ marginTop: 22 }}>
      <Field label="Password" value={password} onChangeText={setPassword} placeholder="••••••••" secure />
      <Field label="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} placeholder="••••••••" secure />
    </View>
    <Button title="Create New Password" onPress={onSave} style={{ alignSelf: 'center', paddingHorizontal: 20, marginTop: 22 }} />
  </ScrollView>;
}
