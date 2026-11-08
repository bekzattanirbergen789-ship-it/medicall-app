import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { s } from '../theme/styles';
import type { GoTo } from '../types';
import { BackHeader } from '../components/BackHeader';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';

export default function ProfileScreen({ go, fullName, email, onLogout }: {
  go: GoTo; fullName: string; email: string; onLogout: () => void;
}) {
  return <ScrollView style={s.scroll} contentContainerStyle={s.mainContent}>
    <BackHeader title="Profile" onBack={() => go('home')} />
    <View style={s.profileCard}>
      <View style={s.profileAvatar}><Icon name="person" color="white" size={43} /></View>
      <Text style={s.infoName}>{fullName || 'John Doe'}</Text>
      <Text style={s.doctorSub}>{email || 'example@example.com'}</Text>
    </View>
    <Pressable style={s.menuRow} onPress={() => go('favorites')}>
      <Icon name="heart-outline" /><Text style={s.menuText}>My Favorites</Text><Icon name="chevron-forward" />
    </Pressable>
    <Pressable style={s.menuRow} onPress={() => go('appointments')}>
      <Icon name="calendar-outline" /><Text style={s.menuText}>My Appointments</Text><Icon name="chevron-forward" />
    </Pressable>
    <Pressable style={s.menuRow} onPress={() => go('reset')}>
      <Icon name="lock-closed-outline" /><Text style={s.menuText}>Change Password</Text><Icon name="chevron-forward" />
    </Pressable>
    <Button title="Log Out" light onPress={onLogout} style={{ marginTop: 30 }} />
  </ScrollView>;
}
