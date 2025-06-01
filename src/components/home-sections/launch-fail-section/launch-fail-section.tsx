'use client';

import Image from 'next/image';
import { StaggerChildren, StaggerItem } from '@/components/ui/motion';
import { useI18n } from '@/i18n';

export const LaunchFailSection = () => {
  const { translations } = useI18n();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading-hg max-w-[860px] mx-auto font-bold text-dark mb-6">
            {translations.launchFail.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.launchFail.description}
          </p>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - Falta de clareza */}
          <StaggerItem
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-purple-600"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/sad-face.svg"
                  alt={translations.launchFail.cards.clarity.title}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <h3 className="text-brand-primary text-lg mb-2">
              {translations.launchFail.cards.clarity.title}
            </h3>
            <p className="text-gray-400">
              {translations.launchFail.cards.clarity.description}
            </p>
          </StaggerItem>

          {/* Card 2 - Posicionamento */}
          <StaggerItem
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            className="bg-white rounded-2xl p-8 border border-purple-600"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/chart.svg"
                  alt={translations.launchFail.cards.positioning.title}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <h3 className="text-brand-primary text-lg mb-2">
              {translations.launchFail.cards.positioning.title}
            </h3>
            <p className="text-gray-400">
              {translations.launchFail.cards.positioning.description}
            </p>
          </StaggerItem>

          {/* Card 3 - Precificação */}
          <StaggerItem
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            className="bg-white rounded-2xl p-8 border border-purple-600"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/money.svg"
                  alt={translations.launchFail.cards.pricing.title}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <h3 className="text-brand-primary text-lg mb-2">
              {translations.launchFail.cards.pricing.title}
            </h3>
            <p className="text-gray-400">
              {translations.launchFail.cards.pricing.description}
            </p>
          </StaggerItem>

          {/* Card 4 - Desalinhamento */}
          <StaggerItem
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            className="bg-white rounded-2xl p-8 border border-purple-600"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/target.svg"
                  alt={translations.launchFail.cards.alignment.title}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <h3 className="text-brand-primary text-lg mb-2">
              {translations.launchFail.cards.alignment.title}
            </h3>
            <p className="text-gray-400">
              {translations.launchFail.cards.alignment.description}
            </p>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
};
