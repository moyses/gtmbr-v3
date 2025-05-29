'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import {
  CheckCircle2,
  RouteIcon,
  Blocks,
  Rocket,
  LaughIcon,
} from 'lucide-react';
import Image from 'next/image';

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
        <div className="text-center mb-16">
          <h2 className="text-[56px] font-bold text-dark mb-6">
            <span className="text-brand-primary">Somos o elo estratégico</span>{' '}
            entre produto, mercado, receita e execução.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gerencie todas as suas tags de marketing, analytics e rastreamento
            em uma única plataforma intuitiva.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feature) => (
            <Button
              key={feature.id}
              variant={selectedFeature === feature.id ? 'default' : 'ghost'}
              className={cn(
                'h-auto py-4 px-4 flex flex-row items-center justify-center text-center text-body-md transition-all duration-300 gap-2',
                selectedFeature === feature.id
                  ? 'text-body-md bg-brand-primary hover:bg-brand-primary/90 text-white scale-105'
                  : 'hover:bg-brand-primary/10 border-brand-primary/20'
              )}
              onClick={() => setSelectedFeature(feature.id)}
            >
              <div
                className={cn(
                  'w-5 h-5',
                  selectedFeature === feature.id
                    ? 'text-white'
                    : 'text-brand-primary'
                )}
              >
                {feature.icon}
              </div>
              <span className="font-semibold">{feature.titleBtn}</span>
            </Button>
          ))}
        </div>

        <div className="md:p-2 md:pt-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={cn(
                'grid md:grid-cols-2 gap-8 transition-all duration-500 items-center',
                selectedFeature === feature.id
                  ? 'opacity-100'
                  : 'hidden opacity-0'
              )}
            >
              <div className="flex flex-col justify-center">
                <h3 className="text-heading-xl font-bold text-dard mb-4 flex items-center gap-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-4">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <div className="flex items-center justify-center p-1">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={542}
                    height={550}
                    className="max-h-[500px] w-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
