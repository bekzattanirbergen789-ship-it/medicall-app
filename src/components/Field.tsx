import React, { useState } from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';
import { s } from '../theme/styles';
import { TapIcon } from './Icon';

export function Field({ label, value, onChangeText, placeholder, secure = false, keyboardType = 'default' }: {
  label: string; value: string; onChangeText: (text: string) => void; placeholder: string;
  secure?: boolean; keyboardType?: KeyboardTypeOptions;
}) {
  const [visible, setVisible] = useState(false);
  return <View style={{ marginBottom: 13 }}>
    <Text style={s.fieldLabel}>{label}</Text>
    <View style={s.inputWrap}>
      <TextInput
        style={s.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#90A6E6"
        secureTextEntry={secure && !visible}
        keyboardType={keyboardType}
        autoCapitalize="none"
        accessibilityLabel={label}
      />
      {secure && <TapIcon name={visible ? 'eye-off-outline' : 'eye-outline'} color="#506082" size={18} onPress={() => setVisible(!visible)} />}
    </View>
  </View>;
}
