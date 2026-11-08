import React from 'react';
import { Pressable, Text } from 'react-native';
import { BLUE } from '../theme/colors';
import { s } from '../theme/styles';
import { Icon, IconName } from './Icon';

export function MiniPill({ text, onPress, selected = false, icon }: {
  text: string; onPress: () => void; selected?: boolean; icon?: IconName;
}) {
  return <Pressable onPress={onPress} style={[s.miniPill, selected && s.miniPillActive]}>
    {icon && <Icon name={icon} size={12} color={selected ? '#FFF' : BLUE} />}
    <Text style={[s.miniPillText, selected && { color: 'white' }]}>{text}</Text>
  </Pressable>;
}
