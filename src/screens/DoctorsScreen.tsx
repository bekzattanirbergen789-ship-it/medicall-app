import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { DOCTORS } from '../data/doctors';
import { s } from '../theme/styles';
import type { Doctor, GoTo, OpenDoctor, Page } from '../types';
import { BackHeader } from '../components/BackHeader';
import { MiniPill } from '../components/MiniPill';
import { Icon } from '../components/Icon';
import { DoctorCard } from '../components/DoctorCard';

export default function DoctorsScreen({ page, go, openDoctor, favorites, toggleFavorite, book, search, setSearch }: {
  page: Extract<Page, 'doctors' | 'female' | 'male'>; go: GoTo; openDoctor: OpenDoctor;
  favorites: number[]; toggleFavorite: (id: number) => void; book: (doctor: Doctor) => void;
  search: string; setSearch: (v: string) => void;
}) {
  const [alphabetical, setAlphabetical] = useState(true);
  const doctors = DOCTORS.filter(d => {
    if (page === 'female' && d.gender !== 'female') return false;
    if (page === 'male' && d.gender !== 'male') return false;
    return `${d.name} ${d.specialty}`.toLowerCase().includes(search.toLowerCase());
  }).sort((a, b) => alphabetical ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
  return <ScrollView style={s.scroll} contentContainerStyle={s.mainContent} keyboardShouldPersistTaps="handled">
    <BackHeader title={page === 'female' ? 'Female' : page === 'male' ? 'Male' : 'Doctors'} onBack={() => go('home')} />
    <View style={s.sortRow}>
      <Text style={s.sortLabel}>Sort by:</Text>
      <MiniPill text={alphabetical ? 'A–Z' : 'Z–A'} selected onPress={() => setAlphabetical(v => !v)} />
      <MiniPill text="All" selected={page === 'doctors'} onPress={() => go('doctors')} />
      <MiniPill text="Female" selected={page === 'female'} onPress={() => go('female')} />
      <MiniPill text="Male" selected={page === 'male'} onPress={() => go('male')} />
    </View>
    <View style={[s.searchWrap, { marginBottom: 14, height: 42 }]}>
      <Icon name="search-outline" size={18} />
      <TextInput style={s.searchInput} value={search} onChangeText={setSearch}
        placeholder="Find a doctor" placeholderTextColor="#7E97DC" />
    </View>
    {doctors.length ? doctors.map(d => <DoctorCard key={d.id} doctor={d}
      onInfo={() => openDoctor(d)} onFavorite={() => toggleFavorite(d.id)}
      favorite={favorites.includes(d.id)} onBook={() => book(d)} />)
      : <Text style={s.emptyText}>No doctors found.</Text>}
  </ScrollView>;
}
