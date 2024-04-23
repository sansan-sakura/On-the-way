import type { Metadata } from 'next';
import './styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from './site';
import { lato, sans, serif } from './styles/fonts';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  icons: {
    icon: '/favicon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-black/80">
          <Header />
          <main className="flex items-center justify-center">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
