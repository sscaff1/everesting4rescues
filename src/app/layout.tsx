import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Everesting 4 Rescues',
  description: "Join Steven Scaffidi's virtual Everest challenge to support Mid City Mutt Mamas animal shelter",
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
