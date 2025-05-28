import {
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-[#1d1d1d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              <Image
                src="/gtmbr-logo-secondary.svg"
                alt="Go to Market Brasil Logo"
                width={201}
                height={36}
              />
            </h3>
            <p className="text-brand-light leading-relaxed">
              Transformamos ideias em sucessos de mercado com estratégias
              comprovadas de go-to-market.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-6 h-6 text-brand-light hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-brand-light hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-brand-light hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-brand-light hover:text-white transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-light hover:text-white transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-light hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-light hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-brand-light hover:text-white transition-colors"
                >
                  Lançamento de Produto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-light hover:text-white transition-colors"
                >
                  PMM as a Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-light hover:text-white transition-colors"
                >
                  Marketing Estratégico
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-light hover:text-white transition-colors"
                >
                  Consultoria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-light" />
                <span className="text-brand-light">contato@gtmbrasil.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-light" />
                <span className="text-brand-light">+55 11 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-light" />
                <span className="text-brand-light">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-secondary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-light">
            © 2024 Go to Market Brasil. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-brand-light hover:text-white transition-colors"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-brand-light hover:text-white transition-colors"
            >
              Termos
            </a>
            <a
              href="#"
              className="text-brand-light hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
