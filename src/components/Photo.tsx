import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { BLUE } from '../theme/colors';
import { s } from '../theme/styles';
import type { Doctor } from '../types';
import { Icon } from './Icon';

export function Photo({ doctor, size = 72 }: { doctor: Doctor; size?: number }) {
  const [failed, setFailed] = useState(false);
  return <View style={[s.avatar, { width: size, height: size, borderRadius: size / 2 }]}>
    {failed ? <Icon name="person" size={size * 0.55} color={BLUE} /> :
      <Image source={{ uri: doctor.photo }} style={{ width: size, height: size, borderRadius: size / 2 }} onError={() => setFailed(true)} />}
  </View>;
}
