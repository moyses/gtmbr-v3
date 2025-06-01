import {
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import { useI18n } from '@/i18n';

export const Footer = () => {
  const { translations } = useI18n();

  return (
    <footer className="bg-gray-800 text-white">
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
              {translations.footer.description}
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-6 h-6 text-brand-light hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-brand-light hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-brand-light hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">
              {translations.footer.quickLinks.title}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-action-sm text-brand-light hover:text-white transition-colors"
                >
                  {translations.footer.quickLinks.about}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-action-sm text-brand-light hover:text-white transition-colors"
                >
                  {translations.footer.quickLinks.services}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-action-sm text-brand-light hover:text-white transition-colors"
                >
                  {translations.footer.quickLinks.caseStudies}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-action-sm text-brand-light hover:text-white transition-colors"
                >
                  {translations.footer.quickLinks.blog}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">
              {translations.footer.services.title}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-action-sm text-brand-light hover:text-white transition-colors"
                >
                  {translations.footer.services.productLaunch}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-action-sm text-brand-light hover:text-white transition-colors"
                >
                  {translations.footer.services.pmmService}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-action-sm text-brand-light hover:text-white transition-colors"
                >
                  {translations.footer.services.strategicMarketing}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-action-sm text-brand-light hover:text-white transition-colors"
                >
                  {translations.footer.services.consulting}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">
              {translations.footer.contact.title}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-light" />
                <span className="text-action-sm text-brand-light">
                  {translations.footer.contact.email}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-light" />
                <span className="text-action-sm text-brand-light">
                  {translations.footer.contact.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-light" />
                <span className="text-action-sm text-brand-light">
                  {translations.footer.contact.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-secondary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-light">{translations.footer.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-action-sm text-brand-light hover:text-white transition-colors"
            >
              {translations.footer.legal.privacy}
            </a>
            <a
              href="#"
              className="text-action-sm text-brand-light hover:text-white transition-colors"
            >
              {translations.footer.legal.terms}
            </a>
            <a
              href="#"
              className="text-action-sm text-brand-light hover:text-white transition-colors"
            >
              {translations.footer.legal.cookies}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
