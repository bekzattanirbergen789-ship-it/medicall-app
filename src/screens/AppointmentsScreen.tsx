import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { DOCTORS } from '../data/doctors';
import { s } from '../theme/styles';
import type { Doctor, GoTo, OpenDoctor } from '../types';
import { BackHeader } from '../components/BackHeader';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import { DoctorCard } from '../components/DoctorCard';

export default function AppointmentsScreen({ go, bookings, cancelBooking, openDoctor, favorites, toggleFavorite, book }: {
  go: GoTo; bookings: number[]; cancelBooking: (id: number) => void;
  openDoctor: OpenDoctor; favorites: number[]; toggleFavorite: (id: number) => void; book: (doctor: Doctor) => void;
}) {
  const bookedDoctors = DOCTORS.filter(doctor => bookings.includes(doctor.id));
  return <ScrollView style={s.scroll} contentContainerStyle={s.mainContent}>
    <BackHeader title="Appointments" onBack={() => go('home')} />
    {bookedDoctors.length === 0 ? <View style={s.emptyWrap}>
      <Icon name="calendar-outline" size={50} />
      <Text style={s.emptyText}>No appointments yet</Text>
      <Button title="Find a Doctor" onPress={() => go('doctors')} style={{ marginTop: 18 }} />
    </View> : bookedDoctors.map(d => <View key={d.id}>
      <DoctorCard doctor={d} onInfo={() => openDoctor(d)} onFavorite={() => toggleFavorite(d.id)}
        favorite={favorites.includes(d.id)} onBook={() => book(d)} />
      <Pressable style={s.cancelButton} onPress={() => cancelBooking(d.id)}>
        <Text style={s.cancelText}>Cancel demo appointment</Text>
      </Pressable>
    </View>)}
  </ScrollView>;
}
