export type Page =
  | 'splash' | 'welcome' | 'login' | 'signup' | 'reset'
  | 'home' | 'doctors' | 'doctorInfo' | 'rating'
  | 'favorites' | 'services' | 'female' | 'male'
  | 'notifications' | 'profile' | 'appointments';

export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  photo: string;
  rating: string;
  fee: string;
  gender: 'female' | 'male';
  experience: string;
};

export type FavoriteTab = 'doctors' | 'services';

export type OpenDoctor = (doctor: Doctor) => void;
export type GoTo = (page: Page) => void;
