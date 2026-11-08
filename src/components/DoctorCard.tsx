import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { BLUE } from '../theme/colors';
import { s } from '../theme/styles';
import type { Doctor } from '../types';
import { Icon, TapIcon } from './Icon';
import { MiniPill } from './MiniPill';
import { Photo } from './Photo';

export function DoctorCard({ doctor, onInfo, onFavorite, favorite, onBook, showBook = false }: {
  doctor: Doctor; onInfo: () => void; onFavorite: () => void; favorite: boolean;
  onBook: () => void; showBook?: boolean;
}) {
  return <View style={s.doctorCard}>
    <Photo doctor={doctor} size={74} />
    <View style={{ flex: 1, marginLeft: 11 }}>
      <Text style={s.doctorName} numberOfLines={2}>{doctor.name}</Text>
      <Text style={s.doctorSub}>{doctor.specialty}</Text>
      <View style={s.cardActions}>
        <MiniPill text="Info" selected onPress={onInfo} />
        <Icon name="star" size={12} color={BLUE} />
        <Text style={s.metaText}>{doctor.rating}</Text>
        <Icon name="cash-outline" size={12} color={BLUE} />
        <Text style={s.metaText}>{doctor.fee}</Text>
      </View>
      {showBook && <Pressable onPress={onBook} style={s.bookStrip}><Text style={s.bookStripText}>Make Appointment</Text></Pressable>}
    </View>
    <View style={{ justifyContent: 'space-between', alignItems: 'center', height: 70 }}>
      <TapIcon name={favorite ? 'heart' : 'heart-outline'} color={BLUE} onPress={onFavorite} size={19} />
      <TapIcon name="chevron-forward-circle-outline" size={19} onPress={onInfo} />
    </View>
  </View>;
}
