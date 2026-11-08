import React from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { s } from '../theme/styles';
import { BLUE } from '../theme/colors';
import { DAYS, DOCTORS } from '../data/doctors';
import type { Doctor, GoTo, OpenDoctor } from '../types';
import { Icon, TapIcon } from '../components/Icon';
import { DoctorCard } from '../components/DoctorCard';

export default function HomeScreen({ fullName, go, openDoctor, favorites, toggleFavorite, book, search, setSearch, day, setDay }: {
  fullName: string; go: GoTo; openDoctor: OpenDoctor;
  favorites: number[]; toggleFavorite: (id: number) => void; book: (doctor: Doctor) => void;
  search: string; setSearch: (v: string) => void; day: number; setDay: (day: number) => void;
}) {
  return <ScrollView style={s.scroll} contentContainerStyle={s.mainContent} keyboardShouldPersistTaps="handled">
    <View style={s.homeHeader}>
      <View style={s.homeIdentity}>
        <View style={s.tinyAvatar}><Icon name="person" size={22} /></View>
        <View><Text style={s.greeting}>Hi, Welcome back,</Text><Text style={s.profileName}>{fullName || 'John Doe'}</Text></View>
      </View>
      <View style={s.headerIcons}>
        <TapIcon name="notifications-outline" onPress={() => go('notifications')} />
        <TapIcon name="settings-outline" onPress={() => go('profile')} />
      </View>
    </View>
    <View style={s.homeTools}>
      <Pressable onPress={() => go('doctors')} style={s.tool}>
        <Icon name="medkit-outline" size={26} /><Text style={s.toolText}>Doctors</Text>
      </Pressable>
      <Pressable onPress={() => go('favorites')} style={s.tool}>
        <Icon name="heart-outline" size={26} /><Text style={s.toolText}>Favorite</Text>
      </Pressable>
      <View style={s.searchWrap}>
        <TextInput placeholder="Search" placeholderTextColor="#8097DF" value={search} onChangeText={setSearch}
          onSubmitEditing={() => go('doctors')} style={s.searchInput} />
        <TapIcon name="search-outline" onPress={() => go('doctors')} />
      </View>
    </View>
    <View style={s.calendarPanel}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.daysRow}>
        {DAYS.map((d, i) => <Pressable key={d.day} onPress={() => setDay(i)} style={[s.dayBox, day === i && s.dayBoxActive]}>
          <Text style={[s.dayNumber, day === i && s.whiteText]}>{d.day}</Text>
          <Text style={[s.dayLabel, day === i && s.whiteText]}>{d.week}</Text>
        </Pressable>)}
      </ScrollView>
      <Text style={s.calendarDate}>{['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day]} · Selected day</Text>
      <View style={s.scheduleRow}><Text style={s.scheduleTime}>9 AM</Text><View style={s.scheduleLine} /></View>
      <View style={s.scheduleRow}>
        <Text style={s.scheduleTime}>10 AM</Text>
        <View style={s.appointmentBox}>
          <Text style={s.appointmentTitle}>Dr. Olivia Turner, M.D.</Text>
          <Text style={s.appointmentDetail}>Example skin consultation</Text>
        </View>
      </View>
      <View style={s.scheduleRow}><Text style={s.scheduleTime}>11 AM</Text><View style={s.scheduleLine} /></View>
      <View style={s.scheduleRow}><Text style={s.scheduleTime}>12 PM</Text><View style={s.scheduleLine} /></View>
    </View>
    <View style={s.sectionHead}>
      <Text style={s.sectionTitle}>Popular Doctors</Text>
      <Pressable onPress={() => go('doctors')}><Text style={s.seeAll}>See all</Text></Pressable>
    </View>
    {DOCTORS.map(doctor => <DoctorCard key={doctor.id} doctor={doctor}
      onInfo={() => openDoctor(doctor)} onFavorite={() => toggleFavorite(doctor.id)}
      favorite={favorites.includes(doctor.id)} onBook={() => book(doctor)} />)}
  </ScrollView>;
}
