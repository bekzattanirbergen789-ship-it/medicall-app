import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { DOCTORS } from '../data/doctors';
import { s } from '../theme/styles';
import type { GoTo } from '../types';
import { BackHeader } from '../components/BackHeader';
import { Icon } from '../components/Icon';

export default function NotificationsScreen({ go, bookings }: { go: GoTo; bookings: number[] }) {
  return <ScrollView style={s.scroll} contentContainerStyle={s.mainContent}>
    <BackHeader title="Notifications" onBack={() => go('home')} />
    <View style={s.notice}>
      <Icon name="calendar-outline" size={25} />
      <View style={{ flex: 1 }}>
        <Text style={s.noticeTitle}>Welcome to Skin Firts</Text>
        <Text style={s.noticeBody}>Explore our dermatology services and find a specialist.</Text>
      </View>
    </View>
    {bookings.map(id => {
      const doctor = DOCTORS.find(d => d.id === id);
      if (!doctor) return null;
      return <View key={id} style={s.notice}>
        <Icon name="checkmark-circle-outline" size={25} />
        <View style={{ flex: 1 }}>
          <Text style={s.noticeTitle}>Appointment added</Text>
          <Text style={s.noticeBody}>{doctor.name} · Demo booking</Text>
        </View>
      </View>;
    })}
  </ScrollView>;
}
