import { Montserrat, Merriweather, Seymour_One, Rowdies, Lato, Bebas_Neue } from 'next/font/google';

export const sans = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal'],
});

export const serif = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal'],
});
