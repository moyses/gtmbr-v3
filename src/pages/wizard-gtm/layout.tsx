import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface WizardLayoutProps {
  children: React.ReactNode;
}

export default function WizardLayout({ children }: WizardLayoutProps) {
  return <div className={`min-h-screen ${inter.className}`}>{children}</div>;
}
