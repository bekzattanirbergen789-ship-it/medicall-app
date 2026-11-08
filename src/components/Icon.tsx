import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BLUE } from '../theme/colors';
import { s } from '../theme/styles';

export type IconName = React.ComponentProps<typeof Ionicons>['name'];

export function Icon({ name, size = 18, color = BLUE }: { name: IconName; size?: number; color?: string }) {
  return <Ionicons name={name} size={size} color={color} />;
}

export function TapIcon({ name, onPress, color = BLUE, size = 20 }: {
  name: IconName; onPress: () => void; color?: string; size?: number;
}) {
  return <Pressable onPress={onPress} hitSlop={10} accessibilityRole="button" style={s.iconTap}>
    <Icon name={name} color={color} size={size} />
  </Pressable>;
}
