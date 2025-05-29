'use client';

import {
  ArrowRight,
  CheckSquare,
  SquareChartGantt,
  UserCheck,
  UserPen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
  AnimateOnScroll,
  StaggerChildren,
  StaggerItem,
} from '@/components/ui/motion';

type CardProps = {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  items: string[];
};

const cards: CardProps[] = [
  {
    icon: <SquareChartGantt className="w-8 h-8 text-brand-primary" />,
    label: 'PMM as a Service',
    title: 'Gestão estratégica contínua de marketing de produto',
    description:
      'Analisamos continuamente o posicionamento, comportamento do mercado, concorrência e resultados do produto. Atuamos como uma extensão do seu time, garantindo que as decisões não sejam tomadas com base apenas em achismos, mas em dados, contexto e estratégia.',
    items: [
      'Gestão estratégica contínua de marketing de produto',
      'Análises recorrentes de concorrência e posicionamento',
      'Apoio na priorização de roadmap com foco em impacto',
    ],
  },
  {
    icon: <UserCheck className="w-8 h-8 text-brand-primary" />,
    label: 'PMM as a Service',
    title: 'Estratégia comercial para produtos de Alto Ticket',
    description:
      'Para produtos de venda consultiva e ciclo longo, estruturamos estratégias de GTM com foco em geração de pipeline qualificado e tração nas contas certas. Inclui diagnóstico do funil, análise de perdas e estruturação de campanhas baseadas em contas (ABM).',
    items: [
      'Diagnóstico comercial orientado a dados',
      'Estratégia de Account-Based Marketing (ABM)',
      'Posicionamento e discurso alinhados ao processo de venda B2B enterprise',
    ],
  },
  {
    icon: <UserPen className="w-8 h-8 text-brand-primary" />,
    label: 'PM as a Service',
    title: 'Traduzimos objetivos de negócio em decisões técnicas assertivas',
    description:
      'Com background técnico e visão estratégica, atuamos como um elo entre tecnologia e negócio ao avaliar seu MVP, os requisitos e as entregas da software house ou time interno, para alinhar o que está sendo desenvolvido com o que, de fato, o mercado precisa.',
    items: [
      'Avaliação funcional e estratégica de MVPs em desenvolvimento',
      'Alinhamento entre expectativas de negócio e entregas técnicas',
      'Interlocução qualificada com software houses e squads de produto',
    ],
  },
];

const Card = ({ icon, label, title, description, items }: CardProps) => {
  return (
    <StaggerItem
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      className="flex flex-col bg-white rounded-xl p-8 shadow-lg border border-purple-500/20 relative"
    >
      <div className="absolute -top-3 right-6">
        <div className="text-sm font-medium bg-brand-primary/80 text-white px-4 py-1.5 rounded-md shadow-md">
          {label}
        </div>
      </div>
      <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-brand-primary/10">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ol className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-1">
              <CheckSquare className="w-5 h-5 text-brand-primary" />
            </span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ol>
    </StaggerItem>
  );
};

export const GtmbrAasSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-heading-hg max-w-[860px] mx-auto font-bold text-dark mb-6">
              <span className="text-brand-primary">
                Go to Market é uma disciplina.
              </span>{' '}
              E nós cobrimos todos os ângulos dela.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Do MVP ao portfólio multiregional, entregamos estratégia onde seu
              time precisa de profundidade.
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </StaggerChildren>

        <AnimateOnScroll>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Quer contratar um profissional AaS para o seu time?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3"
              >
                Agendar uma conversa
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
