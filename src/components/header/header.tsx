'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { ActiveLink } from '../active-link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fecha o menu quando a tela é redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Previne o scroll quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-dark border-b border-gray-100/5 py-2 md:py-4 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-brand-primary">
              <Image
                src="/gtmbr-logo-white.svg"
                alt="Go to Market Brasil Logo"
                width={150}
                height={27}
                className="md:w-[212px] md:h-[38px]"
              />
            </Link>
          </div>

          {/* Menu Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-brand-primary transition-colors p-2 z-50"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-gray-100">
            <ActiveLink href="/solutions">Soluções</ActiveLink>
            <ActiveLink href="/services">Serviços AAS</ActiveLink>
            <ActiveLink href="/business-types">Tipos de Negócio</ActiveLink>
            <ActiveLink href="/resources">Recursos</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button size="sm" className="ml-2">
              <Link href="/especialist">Falar com especialista</Link>
            </Button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-dark/95 md:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '64px' }}
        >
          <nav className="flex flex-col items-center justify-start pt-8 px-4 h-[calc(100vh-64px)] overflow-y-auto">
            <div className="w-full max-w-md space-y-4">
              <ActiveLink
                href="/solutions"
                className="block w-full text-lg text-center py-3 text-white hover:text-brand-primary transition-colors"
              >
                Soluções
              </ActiveLink>
              <ActiveLink
                href="/services"
                className="block w-full text-lg text-center py-3 text-white hover:text-brand-primary transition-colors"
              >
                Serviços AAS
              </ActiveLink>
              <ActiveLink
                href="/business-types"
                className="block w-full text-lg text-center py-3 text-white hover:text-brand-primary transition-colors"
              >
                Tipos de Negócio
              </ActiveLink>
              <ActiveLink
                href="/resources"
                className="block w-full text-lg text-center py-3 text-white hover:text-brand-primary transition-colors"
              >
                Recursos
              </ActiveLink>
              <ActiveLink
                href="/blog"
                className="block w-full text-lg text-center py-3 text-white hover:text-brand-primary transition-colors"
              >
                Blog
              </ActiveLink>
              <div className="pt-4">
                <Button className="w-full" size="lg">
                  <Link href="/especialist" className="w-full text-center">
                    Falar com especialista
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
