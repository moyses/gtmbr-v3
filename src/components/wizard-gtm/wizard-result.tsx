import React from 'react';
import { Button } from '../ui/button';
import { MessageCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';

interface WizardResultProps {
  diagnosis: {
    percentage: number;
    level: string;
    tips: string[];
  };
  onReset: () => void;
}

export const WizardResult: React.FC<WizardResultProps> = ({
  diagnosis,
  onReset,
}) => {
  return (
    <>
      <Head>
        <title>Wizard GTM - Resultado | GTM BR</title>
        <meta
          name="description"
          content="Veja o resultado do seu diagnóstico de Go to Market e receba recomendações personalizadas."
        />
      </Head>

      <main className="min-h-screen bg-dark">
        <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[900px] mx-auto">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-brand-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm md:text-base">Voltar para home</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="text-center mb-12">
              <div className="relative">
                <div className="wizard-score-glow animate-pulse"></div>
                <div className="wizard-score-circle w-48 h-48 md:w-56 md:h-56">
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-7xl md:text-8xl font-bold text-white animate-fade-in">
                        {diagnosis.percentage}
                      </span>
                      <span className="text-3xl md:text-4xl font-bold text-white/90 ml-1 animate-fade-in">
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl text-gray-900 mt-5 mb-2 animate-fade-in">
                Resultado do seu diagnóstico:
              </h2>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-2 animate-fade-in">
                {diagnosis.level}
              </h2>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                Recomendações para seu Go to Market
              </h3>
              <ul className="space-y-3">
                {diagnosis.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm md:text-base text-gray-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button
                onClick={onReset}
                variant="outline"
                size="lg"
                className="w-full md:w-auto"
              >
                Refazer avaliação
              </Button>
              <Button size="lg" className="w-full md:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com especialista
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
