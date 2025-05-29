'use client';

import {
  ArrowRight,
  Clock,
  Rocket,
  Target,
  Zap,
  CheckSquare,
  Earth,
  ChartLine,
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

type FloatingTag = {
  text: string;
  icon: React.ReactNode;
  position: string;
};

const floatingTags: FloatingTag[] = [
  {
    text: 'Mais de 10 anos de experiência',
    icon: <Clock className="w-5 h-5 text-brand-primary" />,
    position: 'top-0 right-20',
  },
  {
    text: 'Nosso fluxo busca sempre eficiência',
    icon: <Rocket className="w-5 h-5 text-brand-primary" />,
    position: 'top-32 left-0',
  },
  {
    text: 'Especialista em B2B, B2C e B2B2C',
    icon: <Target className="w-5 h-5 text-brand-primary" />,
    position: 'bottom-20 right-0',
  },
  {
    text: 'Tecnologia anda junto com inovação',
    icon: <Zap className="w-5 h-5 text-brand-primary" />,
    position: 'bottom-0 left-20',
  },
];

export const WhyGtmbrSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Card do lado esquerdo com o diagrama */}
          <AnimateOnScrollFromLeft>
            <div className="rounded-5xl p-5 relative flex items-center justify-center min-h-[600px]">
              <div className="relative w-[600px] h-[600px]">
                {/* Círculo central com logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-dark rounded-full flex items-center justify-center p-6 shadow-lg">
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
                  className="absolute inset-0 w-full h-full animate-[spin_50s_linear_infinite]"
                  style={{ zIndex: 0 }}
                >
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="#d0c3f9"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Tags flutuantes */}
                {floatingTags.map((tag, index) => (
                  <div
                    key={index}
                    className={`absolute ${tag.position} flex items-center gap-2 bg-white rounded-full py-2 px-4 shadow-lg border border-brand-primary/30`}
                  >
                    <div className="p-1 bg-brand-primary/10 rounded-full">
                      {tag.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {tag.text}
                    </span>
                  </div>
                ))}

                {/* Ícones decorativos */}
                <div className="absolute top-1/4 right-1/4">
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <Target className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-1/4">
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <Rocket className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScrollFromLeft>

          {/* Conteúdo do lado direito */}
          <AnimateOnScrollFromRight>
            <div>
              <AnimateOnScroll>
                <h2 className="text-heading-hg font-bold mb-8">
                  Por que a Go to Market Brasil é ideal para sua tech company?
                </h2>

                <p className="text-md text-gray-600 mb-8">
                  Combinamos profundidade técnica, visão de negócio e
                  experiência real em lançamentos de diferentes portes e
                  complexidades. Nosso modelo conecta inteligência estratégica à
                  execução prática, respeitando o tempo e os desafios de cada
                  empresa.
                </p>
              </AnimateOnScroll>

              <StaggerChildren className="space-y-6 mb-8">
                <StaggerItem
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -20 },
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 mt-1">
                    <CheckSquare className="w-5 h-5 text-brand-primary" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      +100 especialistas em Product Marketing
                    </h4>
                    <p className="text-gray-600">
                      Atuamos em parceria com a{' '}
                      <span className="text-brand-primary font-medium">
                        Elas que Lançam,
                      </span>{' '}
                      a maior comunidade de PMMs do Brasil, com profissionais de
                      diferentes indústrias, prontos para compor equipes
                      multidisciplinares.
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
                    <Earth className="w-5 h-5 text-brand-primary" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Experiência de mercado em múltiplos níveis
                    </h4>
                    <p className="text-gray-600">
                      De startups em tração a multinacionais com portfólio
                      consolidado, nossa vivência traz adaptabilidade, agilidade
                      e profundidade estratégica para cada contexto.
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
                    <ChartLine className="w-5 h-5 text-brand-primary" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Metodologia ágil com foco em resultado
                    </h4>
                    <p className="text-gray-600">
                      Nossas entregas acontecem em sprints acompanhadas de
                      indicadores, priorizações táticas e rituais de
                      acompanhamento para garantir avanço concreto e mensurável.
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
                    <SearchCheck className="w-5 h-5 text-brand-primary" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Métodos reconhecidos globalmente
                    </h4>
                    <p className="text-gray-600">
                      Nossas abordagens seguem os principais frameworks de
                      lançamento do mercado internacional, desenvolvidos pela
                      Product Marketing Alliance, adaptados à realidade de
                      produto e comportamento do consumidor brasileiro.
                    </p>
                  </div>
                </StaggerItem>
              </StaggerChildren>

              <AnimateOnScroll>
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-secondary text-white px-8"
                >
                  Falar com um especialista
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </AnimateOnScroll>
            </div>
          </AnimateOnScrollFromRight>
        </div>
      </div>
    </section>
  );
};
