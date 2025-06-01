'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  CheckCircle2,
  RouteIcon,
  Blocks,
  Rocket,
  LaughIcon,
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimateOnScroll } from '@/components/ui/motion';
import { useI18n } from '@/i18n';

type Feature = {
  titleBtn: string;
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  image: string;
};

export const FeatureGTMSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>('analytics');
  const { translations } = useI18n();

  const features: Feature[] = [
    {
      id: 'analytics',
      titleBtn: translations.featureGTM.features.analytics.titleBtn,
      title: translations.featureGTM.features.analytics.title,
      description: translations.featureGTM.features.analytics.description,
      icon: <RouteIcon />,
      image: '/example.png',
      benefits: translations.featureGTM.features.analytics.benefits,
    },
    {
      id: 'marketing',
      titleBtn: translations.featureGTM.features.marketing.titleBtn,
      title: translations.featureGTM.features.marketing.title,
      description: translations.featureGTM.features.marketing.description,
      icon: <Blocks />,
      image: '/example.png',
      benefits: translations.featureGTM.features.marketing.benefits,
    },
    {
      id: 'privacy',
      titleBtn: translations.featureGTM.features.privacy.titleBtn,
      title: translations.featureGTM.features.privacy.title,
      description: translations.featureGTM.features.privacy.description,
      icon: <Rocket />,
      image: '/example.png',
      benefits: translations.featureGTM.features.privacy.benefits,
    },
    {
      id: 'automation',
      titleBtn: translations.featureGTM.features.automation.titleBtn,
      title: translations.featureGTM.features.automation.title,
      description: translations.featureGTM.features.automation.description,
      icon: <LaughIcon />,
      image: '/example.png',
      benefits: translations.featureGTM.features.automation.benefits,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-heading-hg max-w-[860px] mx-auto font-bold text-dark mb-6"
            >
              {translations.featureGTM.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {translations.featureGTM.description}
            </motion.p>
          </div>
        </AnimateOnScroll>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <Button
                variant={selectedFeature === feature.id ? 'default' : 'ghost'}
                className={cn(
                  'h-14 py-2 px-4 flex flex-row items-center justify-center text-center text-body-md w-full transition-all duration-300 gap-2',
                  selectedFeature === feature.id
                    ? 'text-body-md bg-brand-primary hover:bg-brand-primary/90 text-white scale-105'
                    : 'hover:bg-brand-primary/10 border-brand-primary/20'
                )}
                onClick={() => setSelectedFeature(feature.id)}
              >
                <div
                  className={cn(
                    'w-5 h-5 flex-shrink-0',
                    selectedFeature === feature.id
                      ? 'text-white'
                      : 'text-brand-primary'
                  )}
                >
                  {feature.icon}
                </div>
                <span className="font-semibold line-clamp-1">
                  {feature.titleBtn}
                </span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="md:p-2 md:pt-5">
          {features.map((feature) =>
            selectedFeature === feature.id ? (
              <div
                key={feature.id}
                className="grid md:grid-cols-2 gap-12 items-center transition-opacity duration-300"
              >
                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-heading-xl font-bold text-dark">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                  <ul className="space-y-4">
                    {feature.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-xl overflow-hidden flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={542}
                      height={550}
                      className="w-auto h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};
