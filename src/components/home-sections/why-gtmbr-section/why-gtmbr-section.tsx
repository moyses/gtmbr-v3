'use client';

import {
  ArrowRight,
  Clock,
  Rocket,
  CheckSquare,
  Earth,
  ChartLine,
  CircleDollarSign,
  Users,
  Box,
  SearchCheck,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components//ui/button';
import {
  AnimateOnScroll,
  AnimateOnScrollFromLeft,
  AnimateOnScrollFromRight,
  StaggerChildren,
  StaggerItem,
} from '@/components//ui/motion';
import { useI18n } from '@/i18n';

type FloatingTag = {
  text: string;
  icon: React.ReactNode;
  position: string;
};

export const WhyGtmbrSection = () => {
  const { translations } = useI18n();

  const floatingTags: FloatingTag[] = [
    {
      text: translations.whyGtmbr.tags.market,
      icon: <Clock className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />,
      position: 'top-4 md:top-5 right-4 md:right-20',
    },
    {
      text: translations.whyGtmbr.tags.marketing,
      icon: <Rocket className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />,
      position: 'top-24 md:top-32 left-4 md:left-0',
    },
    {
      text: translations.whyGtmbr.tags.product,
      icon: <Box className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />,
      position: 'bottom-24 md:bottom-20 right-4 md:right-0',
    },
    {
      text: translations.whyGtmbr.tags.customerSuccess,
      icon: <Users className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />,
      position: 'bottom-4 md:bottom-0 left-4 md:left-20',
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Card do lado esquerdo com o diagrama */}
          <AnimateOnScrollFromLeft>
            <div className="rounded-5xl p-2 md:p-5 relative flex items-center justify-center min-h-[400px] md:min-h-[600px] w-full">
              <div className="relative w-full max-w-[400px] md:max-w-[600px] aspect-square mx-auto">
                {/* Círculo central com logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-52 h-32 md:h-52 bg-dark rounded-full flex items-center justify-center p-4 md:p-6 shadow-lg">
                  <Image
                    src="/gtmbr-logo-white.svg"
                    alt="GTM BR Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Círculo decorativo externo */}
                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_80s_linear_infinite]"
                  style={{ zIndex: 0 }}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#d0c3f9"
                    strokeWidth="0.4"
                    strokeDasharray="1 1"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="none"
                    stroke="#d0c3f9"
                    strokeWidth="0.4"
                    strokeDasharray="1 1"
                  />
                </svg>

                {/* Tags flutuantes - Ajustadas para mobile */}
                {floatingTags.map((tag, index) => (
                  <div
                    key={index}
                    className={`absolute ${tag.position} flex items-center gap-2 bg-white rounded-full py-2 px-3 shadow-lg border border-brand-primary/30 max-w-[250px] transform transition-transform hover:scale-105`}
                  >
                    <div className="p-1 bg-brand-primary/10 rounded-full flex-shrink-0">
                      {tag.icon}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-700 truncate">
                      {tag.text}
                    </span>
                  </div>
                ))}

                {/* Ícones decorativos */}
                <div className="absolute top-1/4 right-1/4">
                  <div className="bg-white p-2 md:p-3 rounded-lg shadow-md">
                    <CircleDollarSign className="w-4 h-4 md:w-6 md:h-6 text-brand-primary" />
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-1/4">
                  <div className="bg-white p-2 md:p-3 rounded-lg shadow-md">
                    <Rocket className="w-4 h-4 md:w-6 md:h-6 text-brand-primary" />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScrollFromLeft>

          {/* Conteúdo do lado direito */}
          <AnimateOnScrollFromRight>
            <div className="mt-8 lg:mt-0 w-full">
              <AnimateOnScroll>
                <h2 className="text-2xl md:text-3xl lg:text-heading-hg font-bold mb-4 md:mb-8">
                  {translations.whyGtmbr.title}
                </h2>

                <p className="text-sm md:text-md text-gray-600 mb-6 md:mb-8">
                  {translations.whyGtmbr.description}
                </p>
              </AnimateOnScroll>

              <StaggerChildren className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <StaggerItem
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -20 },
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 mt-1">
                    <CheckSquare className="w-4 md:w-5 h-4 md:h-5 text-brand-primary" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                      {translations.whyGtmbr.features.specialists.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {translations.whyGtmbr.features.specialists.description}
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -20 },
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 mt-1">
                    <Earth className="w-4 md:w-5 h-4 md:h-5 text-brand-primary" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                      {translations.whyGtmbr.features.experience.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {translations.whyGtmbr.features.experience.description}
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -20 },
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 mt-1">
                    <ChartLine className="w-4 md:w-5 h-4 md:h-5 text-brand-primary" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                      {translations.whyGtmbr.features.methodology.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {translations.whyGtmbr.features.methodology.description}
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -20 },
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 mt-1">
                    <SearchCheck className="w-4 md:w-5 h-4 md:h-5 text-brand-primary" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                      {translations.whyGtmbr.features.focus.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {translations.whyGtmbr.features.focus.description}
                    </p>
                  </div>
                </StaggerItem>
              </StaggerChildren>

              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3"
              >
                {translations.whyGtmbr.analyzeButton}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </AnimateOnScrollFromRight>
        </div>
      </div>
    </section>
  );
};
