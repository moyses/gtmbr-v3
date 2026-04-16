import type { Metadata } from 'next';
import { PT_Sans_Caption, Inter } from 'next/font/google';
import { I18nProvider } from '@/providers/i18n-provider';
import './globals.css';

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans-caption',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'GTMBR - Go to Market Brasil',
  description:
    'Estratégias de Go-to-Market para startups e produtos digitais no Brasil.',
  icons: {
    icon: '/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${ptSansCaption.variable} ${inter.variable} font-sans antialiased`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
