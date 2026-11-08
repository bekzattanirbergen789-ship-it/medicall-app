import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import type { Doctor, GoTo } from '../types';
import { s } from '../theme/styles';
import { BackHeader } from '../components/BackHeader';
import { TapIcon, Icon } from '../components/Icon';
import { Photo } from '../components/Photo';
import { Button } from '../components/Button';

export default function DoctorInfoScreen({ doctor, go, favorite, toggleFavorite, book }: {
  doctor: Doctor; go: GoTo; favorite: boolean; toggleFavorite: (id: number) => void;
  book: (doctor: Doctor) => void;
}) {
  return <ScrollView style={s.scroll} contentContainerStyle={s.mainContent}>
    <BackHeader title="Doctor Info" onBack={() => go('doctors')}
      right={<TapIcon name={favorite ? 'heart' : 'heart-outline'} onPress={() => toggleFavorite(doctor.id)} />} />
    <View style={s.doctorHero}>
      <Photo doctor={doctor} size={134} />
      <View style={s.doctorHeroBadge}>
        <Icon name="shield-checkmark-outline" color="white" size={20} />
        <Text style={s.heroBadgeText}>Expert Dermatologist{'\n'}Trusted skin specialist</Text>
      </View>
    </View>
    <View style={s.infoNameCard}>
      <Text style={s.infoName}>{doctor.name}</Text>
      <Text style={s.doctorSub}>{doctor.specialty}</Text>
      <View style={s.infoStats}>
        <Icon name="star" size={14} /><Text style={s.metaText}>{doctor.rating}</Text>
        <Icon name="time-outline" size={14} /><Text style={s.metaText}>{doctor.experience}</Text>
        <Icon name="cash-outline" size={14} /><Text style={s.metaText}>{doctor.fee}</Text>
      </View>
    </View>
    <Text style={s.infoHeading}>Profile</Text>
    <Text style={s.infoBody}>Experienced dermatology specialist focused on thoughtful skin care, diagnosis and personalized treatment.</Text>
    <Text style={s.infoHeading}>Career Path</Text>
    <Text style={s.infoBody}>Training in clinical dermatology, followed by years of patient-focused practice and continued professional development.</Text>
    <Text style={s.infoHeading}>Highlights</Text>
    <Text style={s.infoBody}>Skin consultations, preventive care, patient education and modern dermatology services.</Text>
    <View style={s.detailButtons}>
      <Button title="Ratings" light onPress={() => go('rating')} style={{ flex: 1 }} />
      <Button title="Make Appointment" onPress={() => book(doctor)} style={{ flex: 2 }} />
    </View>
  </ScrollView>;
}
