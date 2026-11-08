import React from 'react';
import { Pressable } from 'react-native';
import { s } from '../theme/styles';
import { Logo } from '../components/Logo';

export default function SplashScreen({ onContinue }: { onContinue: () => void }) {
  return <Pressable style={s.splash} onPress={onContinue}><Logo white large /></Pressable>;
}
