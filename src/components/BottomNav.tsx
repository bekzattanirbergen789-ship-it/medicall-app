import React from 'react';
import { Pressable, View } from 'react-native';
import { s } from '../theme/styles';
import type { GoTo, Page } from '../types';
import { Icon, IconName } from './Icon';

export function BottomNav({ page, go }: { page: Page; go: GoTo }) {
  const tabs: { page: Page; icon: IconName; selectedIcon: IconName }[] = [
    { page: 'home', icon: 'home-outline', selectedIcon: 'home' },
    { page: 'notifications', icon: 'notifications-outline', selectedIcon: 'notifications' },
    { page: 'profile', icon: 'person-outline', selectedIcon: 'person' },
    { page: 'appointments', icon: 'calendar-outline', selectedIcon: 'calendar' },
  ];
  return <View style={s.bottomNav}>
    {tabs.map(tab => <Pressable key={tab.page} onPress={() => go(tab.page)} accessibilityRole="button" style={s.navItem}>
      <Icon name={page === tab.page ? tab.selectedIcon : tab.icon} color="white" size={24} />
    </Pressable>)}
  </View>;
}
