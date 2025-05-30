import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';

interface WizardQuestionProps {
  currentStage: number;
  totalStages: number;
  question: string;
  options: Array<{
    text: string;
    value: number;
  }>;
  onAnswer: (value: number) => void;
}

export const WizardQuestion: React.FC<WizardQuestionProps> = ({
  currentStage,
  totalStages,
  question,
  options,
  onAnswer,
}) => {
  return (
    <>
      <Head>
        <title>Wizard GTM - Avalie sua estratégia de Go to Market</title>
        <meta
          name="description"
          content="Avalie a maturidade da sua estratégia de Go to Market com nosso wizard especializado."
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

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl max-w-[900px] mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Progresso</span>
                <span>
                  {Math.round(((currentStage + 1) / totalStages) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-primary transition-all duration-300"
                  style={{
                    width: `${((currentStage + 1) / totalStages) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                {question}
              </h2>
              <div className="space-y-4">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => onAnswer(option.value)}
                    className="w-full text-left p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-200 group"
                  >
                    <p className="text-sm md:text-base text-gray-700 group-hover:text-gray-900">
                      {option.text}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
