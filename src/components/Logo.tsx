import React from 'react';
import { Text, View } from 'react-native';
import { BLUE } from '../theme/colors';
import { s } from '../theme/styles';
import { Icon } from './Icon';

export function Logo({ white = false, large = false }: { white?: boolean; large?: boolean }) {
  const color = white ? '#FFFFFF' : BLUE;
  return <View style={{ alignItems: 'center' }}>
    <View style={[s.logoMark, large && { transform: [{ scale: 1.12 }] }]}>
      <View style={[s.logoHorizontal, { backgroundColor: color }]} />
      <View style={[s.logoVertical, { backgroundColor: color }]} />
      <Icon name="leaf-outline" size={32} color={white ? BLUE : 'white'} />
    </View>
    <Text style={[s.logoText, { color }, large && { fontSize: 32 }]}>Skin{'\n'}Firts</Text>
    <Text style={[s.logoCaption, { color }]}>Dermatology Center</Text>
  </View>;
}
