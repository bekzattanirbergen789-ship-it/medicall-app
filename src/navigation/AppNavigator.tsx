import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s } from '../theme/styles';
import { BLUE } from '../theme/colors';
import { DOCTORS, SERVICES } from '../data/doctors';
import type { Doctor, FavoriteTab, Page } from '../types';
import { BottomNav } from '../components/BottomNav';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import DoctorsScreen from '../screens/DoctorsScreen';
import DoctorInfoScreen from '../screens/DoctorInfoScreen';
import RatingScreen from '../screens/RatingScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';

export default function AppNavigator() {
  const [page, setPage] = useState<Page>('splash');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(DOCTORS[0]);
  const [favorites, setFavorites] = useState<number[]>([3, 1]);
  const [favoriteServices, setFavoriteServices] = useState<string[]>([SERVICES[0], SERVICES[2]]);
  const [favTab, setFavTab] = useState<FavoriteTab>('doctors');
  const [search, setSearch] = useState('');
  const [day, setDay] = useState(4);
  const [bookings, setBookings] = useState<number[]>([]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [birth, setBirth] = useState('');

  useEffect(() => {
    if (page !== 'splash') return;
    const timeout = setTimeout(() => setPage('welcome'), 1500);
    return () => clearTimeout(timeout);
  }, [page]);

  const go = (next: Page) => {
    // Search retained when moving from Home to Doctors.
    if (!(['home', 'doctors', 'female', 'male'] as Page[]).includes(next)) setSearch('');
    setPage(next);
  };
  const openDoctor = (doctor: Doctor) => { setSelectedDoctor(doctor); go('doctorInfo'); };
  const toggleFavorite = (id: number) => setFavorites(current =>
    current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  const toggleService = (name: string) => setFavoriteServices(current =>
    current.includes(name) ? current.filter(item => item !== name) : [...current, name]);
  const book = (doctor: Doctor) => {
    setBookings(current => current.includes(doctor.id) ? current : [...current, doctor.id]);
    Alert.alert('Appointment saved', `Demo appointment with ${doctor.name} was added.`);
  };
  const submitLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Missing information', 'Enter your email and password.');
      return;
    }
    go('home');
  };
  const submitSignup = () => {
    if (!fullName.trim() || !email.trim() || !mobile.trim() || !birth.trim() || password.trim().length < 6) {
      Alert.alert('Check fields', 'Fill in all fields and enter a password of at least 6 characters.');
      return;
    }
    go('home');
  };
  const submitReset = () => {
    if (password.length < 6) return Alert.alert('Password', 'Enter at least 6 characters.');
    if (password !== confirmPassword) return Alert.alert('Password', 'Passwords do not match.');
    Alert.alert('Demo', 'Password changed for this demo session only.');
    go('login');
  };

  // Render each screen as an independent .tsx component.
  const renderScreen = () => {
    switch (page) {
      case 'splash': return <SplashScreen onContinue={() => go('welcome')} />;
      case 'welcome': return <WelcomeScreen onLogin={() => go('login')} onSignup={() => go('signup')} />;
      case 'login': return <LoginScreen email={email} setEmail={setEmail} password={password} setPassword={setPassword}
        onBack={() => go('welcome')} onLogin={submitLogin} onSignup={() => go('signup')}
        onForgot={() => { setPassword(''); setConfirmPassword(''); go('reset'); }} />;
      case 'signup': return <SignUpScreen fullName={fullName} setFullName={setFullName}
        email={email} setEmail={setEmail} password={password} setPassword={setPassword}
        mobile={mobile} setMobile={setMobile} birth={birth} setBirth={setBirth}
        onBack={() => go('login')} onSignup={submitSignup} onLogin={() => go('login')} />;
      case 'reset': return <SetPasswordScreen password={password} setPassword={setPassword}
        confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
        onBack={() => go('login')} onSave={submitReset} />;
      case 'home': return <HomeScreen fullName={fullName} go={go} openDoctor={openDoctor}
        favorites={favorites} toggleFavorite={toggleFavorite} book={book}
        search={search} setSearch={setSearch} day={day} setDay={setDay} />;
      case 'doctors':
      case 'female':
      case 'male': return <DoctorsScreen page={page} go={go} openDoctor={openDoctor}
        favorites={favorites} toggleFavorite={toggleFavorite} book={book} search={search} setSearch={setSearch} />;
      case 'doctorInfo': return <DoctorInfoScreen doctor={selectedDoctor} go={go}
        favorite={favorites.includes(selectedDoctor.id)} toggleFavorite={toggleFavorite} book={book} />;
      case 'rating': return <RatingScreen go={go} openDoctor={openDoctor}
        favorites={favorites} toggleFavorite={toggleFavorite} book={book} />;
      case 'favorites':
      case 'services': return <FavoriteScreen go={go} tab={favTab} setTab={setFavTab}
        favorites={favorites} toggleFavorite={toggleFavorite} favoriteServices={favoriteServices}
        toggleService={toggleService} openDoctor={openDoctor} book={book} />;
      case 'notifications': return <NotificationsScreen go={go} bookings={bookings} />;
      case 'profile': return <ProfileScreen go={go} fullName={fullName} email={email} onLogout={() => go('welcome')} />;
      case 'appointments': return <AppointmentsScreen go={go} bookings={bookings}
        cancelBooking={id => setBookings(current => current.filter(item => item !== id))}
        openDoctor={openDoctor} favorites={favorites} toggleFavorite={toggleFavorite} book={book} />;
    }
  };

  const authPages: Page[] = ['splash', 'welcome', 'login', 'signup', 'reset'];
  return <SafeAreaView edges={['top', 'bottom']} style={[s.safe, page === 'splash' && { backgroundColor: BLUE }]}>
    <StatusBar style={page === 'splash' ? 'light' : 'dark'} />
    {renderScreen()}
    {!authPages.includes(page) && <BottomNav page={page} go={go} />}
  </SafeAreaView>;
}
