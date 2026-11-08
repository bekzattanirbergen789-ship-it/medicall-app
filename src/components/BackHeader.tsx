import React from 'react';
import { Text, View } from 'react-native';
import { s } from '../theme/styles';
import { TapIcon } from './Icon';

export function BackHeader({ title, onBack, right }: { title: string; onBack: () => void; right?: React.ReactNode }) {
  return <View style={s.backHeader}>
    <TapIcon name="chevron-back" onPress={onBack} />
    <Text style={s.backTitle}>{title}</Text>
    <View style={{ width: 36, alignItems: 'flex-end' }}>{right}</View>
  </View>;
}
