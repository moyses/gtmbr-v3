import { Footer } from '../footer';
import { Header } from '../header';
import { Inter } from 'next/font/google';

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`flex min-h-screen flex-col bg-white ${inter.className} antialiased`}
    >
      <Header />
      <main className="flex-1 flex flex-col mb-12">{children}</main>
      <Footer />
    </div>
  );
};
