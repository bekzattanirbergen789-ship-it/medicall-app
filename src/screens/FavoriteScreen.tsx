import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { DOCTORS, SERVICES } from '../data/doctors';
import { s } from '../theme/styles';
import type { Doctor, FavoriteTab, GoTo, OpenDoctor } from '../types';
import { BackHeader } from '../components/BackHeader';
import { MiniPill } from '../components/MiniPill';
import { DoctorCard } from '../components/DoctorCard';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';

export default function FavoriteScreen({ go, tab, setTab, favorites, toggleFavorite, favoriteServices, toggleService, openDoctor, book }: {
  go: GoTo; tab: FavoriteTab; setTab: (v: FavoriteTab) => void;
  favorites: number[]; toggleFavorite: (id: number) => void;
  favoriteServices: string[]; toggleService: (name: string) => void;
  openDoctor: OpenDoctor; book: (doctor: Doctor) => void;
}) {
  const likedDoctors = DOCTORS.filter(d => favorites.includes(d.id));
  return <ScrollView style={s.scroll} contentContainerStyle={s.mainContent}>
    <BackHeader title="Favorite" onBack={() => go('home')} />
    <View style={s.favoriteToggle}>
      <MiniPill text="Doctors" selected={tab === 'doctors'} onPress={() => setTab('doctors')} />
      <MiniPill text="Services" selected={tab === 'services'} onPress={() => setTab('services')} />
    </View>
    {tab === 'doctors' ? <>
      {likedDoctors.length ? likedDoctors.map(d => <DoctorCard key={d.id} doctor={d}
        onInfo={() => openDoctor(d)} favorite onFavorite={() => toggleFavorite(d.id)}
        onBook={() => book(d)} showBook />)
        : <Text style={s.emptyText}>No favorite doctors yet. Tap a heart to add one.</Text>}
    </> : <>
      <Text style={[s.infoBody, { marginBottom: 14 }]}>Choose your favorite dermatology services.</Text>
      {SERVICES.map(item => <Pressable key={item} style={s.serviceRow} onPress={() => toggleService(item)}>
        <View style={s.serviceLabel}>
          <Icon name={favoriteServices.includes(item) ? 'heart' : 'heart-outline'} color="white" size={18} />
          <Text style={s.serviceText}>{item}</Text>
        </View>
        <Icon name={favoriteServices.includes(item) ? 'checkmark-circle' : 'add-circle-outline'} color="white" size={21} />
      </Pressable>)}
      <Button title="Looking for doctors" light style={{ marginTop: 18 }} onPress={() => go('doctors')} />
    </>}
  </ScrollView>;
}
