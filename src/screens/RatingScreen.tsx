import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { DOCTORS } from '../data/doctors';
import { s } from '../theme/styles';
import type { Doctor, GoTo, OpenDoctor } from '../types';
import { BackHeader } from '../components/BackHeader';
import { MiniPill } from '../components/MiniPill';
import { Icon } from '../components/Icon';
import { DoctorCard } from '../components/DoctorCard';

export default function RatingScreen({ go, openDoctor, favorites, toggleFavorite, book }: {
  go: GoTo; openDoctor: OpenDoctor; favorites: number[];
  toggleFavorite: (id: number) => void; book: (doctor: Doctor) => void;
}) {
  const [alphabetical, setAlphabetical] = useState(false);
  const doctors = [...DOCTORS].sort((a, b) => alphabetical ? a.name.localeCompare(b.name) : Number(b.rating) - Number(a.rating));
  return <ScrollView style={s.scroll} contentContainerStyle={s.mainContent}>
    <BackHeader title="Rating" onBack={() => go('doctorInfo')} />
    <View style={s.sortRow}>
      <Text style={s.sortLabel}>Sort by:</Text>
      <MiniPill text={alphabetical ? 'A–Z' : 'Rating'} selected onPress={() => setAlphabetical(v => !v)} />
      <Icon name="star" size={15} /><Text style={s.metaText}>Top rated</Text>
    </View>
    {doctors.map(doctor => <DoctorCard key={doctor.id} doctor={doctor}
      onInfo={() => openDoctor(doctor)} onFavorite={() => toggleFavorite(doctor.id)}
      favorite={favorites.includes(doctor.id)} onBook={() => book(doctor)} />)}
  </ScrollView>;
}
