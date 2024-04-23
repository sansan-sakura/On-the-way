import { Montserrat, Merriweather, Seymour_One, Rowdies, Lato } from 'next/font/google';

export const sans = Rowdies({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
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
