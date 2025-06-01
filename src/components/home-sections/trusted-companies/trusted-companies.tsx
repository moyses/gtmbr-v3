'use client';

import Image from 'next/image';
import { useI18n } from '@/i18n';

export const TrustedCompanies = () => {
  const { translations } = useI18n();

  return (
    <section className="py-12 bg-white mt-5 md:mt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg">
            {translations.trustedCompanies.title}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          <div className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/companies/coinbase.svg"
              alt="Coinbase"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/companies/slack.svg"
              alt="Slack"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/companies/dropbox.svg"
              alt="Dropbox"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/companies/webflow.svg"
              alt="Webflow"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/companies/zoom.svg"
              alt="Zoom"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
