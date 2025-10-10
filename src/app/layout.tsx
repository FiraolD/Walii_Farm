import './globals.css'; 
import type { Metadata } from 'next';
import { Header } from '@/app/components/Header/Header';
import { Footer } from '@/app/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Awash Farm',
  description: 'Experience rustic charm and modern comfort',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}