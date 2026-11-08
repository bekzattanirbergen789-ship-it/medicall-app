import React from 'react';
import { Pressable, Text, StyleProp, ViewStyle } from 'react-native';
import { s } from '../theme/styles';

export function Button({ title, onPress, light = false, style }: {
  title: string; onPress: () => void; light?: boolean; style?: StyleProp<ViewStyle>;
}) {
  return <Pressable onPress={onPress} accessibilityRole="button" style={[s.button, light && s.buttonLight, style]}>
    <Text style={[s.buttonText, light && s.buttonTextLight]}>{title}</Text>
  </Pressable>;
}
