import Link from 'next/link';
import { Button } from '../ui/button';
import { ActiveLink } from '../active-link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="bg-dark border-b border-gray-100/5 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-brand-primary">
              <Image
                src="/gtmbr-logo-white.svg"
                alt="Go to Market Brasil Logo"
                width={212}
                height={38}
              />
            </Link>
          </div>

          <nav className="flex items-center gap-6 text-gray-100">
            <ActiveLink href="/solutions">Soluções</ActiveLink>
            <ActiveLink href="/services">Serviços AAS</ActiveLink>
            <ActiveLink href="/business-types">Tipos de Negócio</ActiveLink>
            <ActiveLink href="/resources">Recursos</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button className="">
              <Link href="/especialist">Falar com especialista</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
