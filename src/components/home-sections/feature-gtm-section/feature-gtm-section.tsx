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

type Feature = {
  titleBtn: string;
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  image: string;
};

const features: Feature[] = [
  {
    id: 'analytics',
    titleBtn: 'Seu produto na rota certa',
    title: 'Traga seu produto para a rota certa.',
    description:
      'Nossa abordagem analítica conecta sua solução a oportunidades reais de mercado, definindo volume de público, concorrência e comportamento de compra.',
    icon: <RouteIcon />,
    image: '/example.png',
    benefits: [
      'Análise de mercado',
      'Análise de concorrência e benchmarks',
      'Mapeamento qualitativo de comportamento e dores da persona',
    ],
  },
  {
    id: 'marketing',
    titleBtn: 'Alinhe sua solução',
    title: 'Alinhe a sua solução para quem realmente precisa dele. ',
    description:
      'Definimos como seu produto deve ser percebido e comprado por quem realmente precisa dele. Ajustamos a rota da proposta de valor com margem saudável e aderência ao mercado.',
    icon: <Blocks />,
    image: '/example.png',
    benefits: [
      'Posicionamento e mensagem',
      'Estratégia de precificação e empacotamento de funcionalidades',
      'Desenvolvimento de mensagem central, discurso de vendas e treinamentos',
    ],
  },
  {
    id: 'privacy',
    titleBtn: 'Acelere o time to value',
    title: 'Reduza o time to market e acelere o time to value.',
    description:
      'Desenhamos o plano completo de ativação, com foco em reduzir o tempo entre lançamento e geração de receita, incluindo canais, equipe, mensagens e funil de conversão.',
    icon: <Rocket />,
    image: '/example.png',
    benefits: [
      'Plano tático completo de lançamento',
      'Alinhamento interfuncional entre produto, marketing e vendas.',
      'Desenvolvimento de materiais de apoio para ativação e treinamento',
    ],
  },
  {
    id: 'automation',
    titleBtn: 'Fidelize seus clientes',
    title:
      'Transforme usuários em clientes fiéis com estratégias de longo prazo',
    description:
      'Acompanhamos após o go live com estratégias que mantêm o produto em evolução: retendo, reengajando e otimizando sua base com dados de uso e feedback de clientes.',
    icon: <LaughIcon />,
    image: '/example.png',
    benefits: [
      'Estratégias de engajamento, crescimento e retenção',
      'Adequação a Product-Led Growth',
      'Reposicionamento contínuo e testes de tração',
    ],
  },
];

export const FeatureGTMSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>('analytics');

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
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                className="text-brand-primary"
              >
                Somos o elo estratégico
              </motion.span>{' '}
              entre produto, mercado, receita e execução.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Gerencie todas as suas tags de marketing, analytics e rastreamento
              em uma única plataforma intuitiva.
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
