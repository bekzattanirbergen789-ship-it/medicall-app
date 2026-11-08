import type { Doctor } from '../types';

// Оқу жобасына арналған демонстрациялық деректер. Нағыз дәрігерлер мен брондаулар емес.
export const DOCTORS: Doctor[] = [
  { id: 1, name: 'Dr. Alexander Bennett, Ph.D.', specialty: 'Dermato-Genetics', gender: 'male', photo: 'https://randomuser.me/api/portraits/men/32.jpg', rating: '4.9', fee: '$ 50', experience: '8 years' },
  { id: 2, name: 'Dr. Michael Davidson, M.D.', specialty: 'Solar Dermatology', gender: 'male', photo: 'https://randomuser.me/api/portraits/men/75.jpg', rating: '4.8', fee: '$ 90', experience: '12 years' },
  { id: 3, name: 'Dr. Olivia Turner, M.D.', specialty: 'Dermato-Endocrinology', gender: 'female', photo: 'https://randomuser.me/api/portraits/women/44.jpg', rating: '4.9', fee: '$ 60', experience: '10 years' },
  { id: 4, name: 'Dr. Sophia Martinez, Ph.D.', specialty: 'Cosmetic Bioengineering', gender: 'female', photo: 'https://randomuser.me/api/portraits/women/68.jpg', rating: '5.0', fee: '$ 80', experience: '9 years' },
];
export const SERVICES = ['Dermato-Endocrinology', 'Cosmetic Bioengineering', 'Dermato-Genetics', 'Solar Dermatology'];
export const DAYS = [
  { week: 'MON', day: '9' }, { week: 'TUE', day: '10' },
  { week: 'WED', day: '11' }, { week: 'THU', day: '12' },
  { week: 'FRI', day: '13' }, { week: 'SAT', day: '14' },
];
