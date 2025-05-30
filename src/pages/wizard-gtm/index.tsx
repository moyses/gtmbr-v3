'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import type { ReactElement } from 'react';
import WizardLayout from './layout';

interface ResponseOption {
  text: string;
  value: number;
}

interface WizardStage {
  id: number;
  question: string;
  options: ResponseOption[];
}

interface DiagnosisResult {
  percentage: number;
  level: string;
  tips: string[];
}

const wizardStages: WizardStage[] = [
  {
    id: 1,
    question: 'Como está a validação do seu produto com o mercado-alvo?',
    options: [
      {
        text: 'Validado com mais de 50 potenciais clientes e temos feedback positivo consistente',
        value: 10,
      },
      {
        text: 'Validado com 10-50 potenciais clientes com feedback misto',
        value: 5,
      },
      {
        text: 'Ainda não validamos adequadamente ou temos pouco feedback',
        value: 0,
      },
    ],
  },
  {
    id: 2,
    question: 'Qual o nível de definição do seu produto mínimo viável (MVP)?',
    options: [
      { text: 'MVP desenvolvido, testado e pronto para lançamento', value: 10 },
      {
        text: 'MVP em desenvolvimento com funcionalidades principais definidas',
        value: 5,
      },
      { text: 'Ainda estamos definindo as funcionalidades do MVP', value: 0 },
    ],
  },
  {
    id: 3,
    question:
      'Como está a análise da concorrência e posicionamento no mercado?',
    options: [
      {
        text: 'Análise completa da concorrência com posicionamento diferenciado claro',
        value: 10,
      },
      {
        text: 'Conhecemos os principais concorrentes mas ainda refinando posicionamento',
        value: 5,
      },
      {
        text: 'Análise superficial da concorrência e posicionamento indefinido',
        value: 0,
      },
    ],
  },
  {
    id: 4,
    question: 'Qual o status da sua estratégia de precificação?',
    options: [
      {
        text: 'Estratégia de pricing validada com testes de mercado e aceita pelos clientes',
        value: 10,
      },
      {
        text: 'Modelo de precificação definido mas ainda não totalmente validado',
        value: 5,
      },
      {
        text: 'Ainda estamos definindo como precificar nosso produto/serviço',
        value: 0,
      },
    ],
  },
  {
    id: 5,
    question: 'Como está o desenvolvimento dos canais de venda e distribuição?',
    options: [
      {
        text: 'Canais de venda estabelecidos com parcerias confirmadas',
        value: 10,
      },
      {
        text: 'Canais principais identificados com algumas parcerias em negociação',
        value: 5,
      },
      {
        text: 'Ainda definindo os melhores canais para nosso produto',
        value: 0,
      },
    ],
  },
  {
    id: 6,
    question: 'Qual o nível de preparação da equipe de vendas e marketing?',
    options: [
      {
        text: 'Equipe treinada com processos definidos e materiais de vendas prontos',
        value: 10,
      },
      {
        text: 'Equipe parcialmente preparada com alguns processos em desenvolvimento',
        value: 5,
      },
      {
        text: 'Equipe ainda em formação ou sem preparação específica para o lançamento',
        value: 0,
      },
    ],
  },
  {
    id: 7,
    question: 'Como está a preparação financeira para o go-to-market?',
    options: [
      {
        text: 'Orçamento aprovado com recursos suficientes para 12+ meses de operação',
        value: 10,
      },
      {
        text: 'Recursos garantidos para 6-12 meses com planos para captação adicional',
        value: 5,
      },
      {
        text: 'Recursos limitados (menos de 6 meses) ou ainda buscando investimento',
        value: 0,
      },
    ],
  },
  {
    id: 8,
    question:
      'Qual o nível de desenvolvimento dos KPIs e métricas de acompanhamento?',
    options: [
      {
        text: 'KPIs definidos com sistema de monitoramento implementado',
        value: 10,
      },
      {
        text: 'Principais métricas identificadas mas sistema ainda em desenvolvimento',
        value: 5,
      },
      {
        text: 'Ainda definindo quais métricas acompanhar e como medi-las',
        value: 0,
      },
    ],
  },
];

const getDiagnosis = (score: number): DiagnosisResult => {
  const maxScore = wizardStages.length * 10;
  const percentage = Math.round((score / maxScore) * 100);

  if (percentage >= 80) {
    return {
      percentage,
      level: 'Excelente Prontidão',
      tips: [
        'Sua startup está muito bem preparada para o lançamento!',
        'Execute seu plano de go-to-market com confiança',
        'Monitore métricas de perto nos primeiros meses',
        'Considere acelerar o cronograma de lançamento',
      ],
    };
  } else if (percentage >= 60) {
    return {
      percentage,
      level: 'Boa Prontidão',
      tips: [
        'Sua startup está no caminho certo, mas há áreas para melhorar',
        'Finalize validações pendentes antes do lançamento',
        'Reforce a preparação da equipe de vendas',
        'Revise a estratégia de precificação se necessário',
      ],
    };
  } else if (percentage >= 40) {
    return {
      percentage,
      level: 'Prontidão Moderada',
      tips: [
        'Ainda há trabalho importante a ser feito antes do lançamento',
        'Priorize a validação com clientes reais',
        'Desenvolva melhor sua análise competitiva',
        'Garanta recursos financeiros adequados',
      ],
    };
  } else {
    return {
      percentage,
      level: 'Baixa Prontidão',
      tips: [
        'Recomendamos adiar o lançamento para melhor preparação',
        'Foque na validação do produto com o mercado',
        'Desenvolva um MVP mais robusto',
        'Busque mentoria especializada em go-to-market',
      ],
    };
  }
};

// Função para embaralhar array usando o algoritmo Fisher-Yates
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Função para embaralhar as opções de cada pergunta
const shuffleStageOptions = (stage: WizardStage): WizardStage => {
  return {
    ...stage,
    options: shuffleArray([...stage.options]),
  };
};

// Função para embaralhar todo o wizard (perguntas e opções)
const shuffleWizard = (stages: WizardStage[]): WizardStage[] => {
  return shuffleArray(stages.map((stage) => shuffleStageOptions(stage)));
};

// Componente para garantir randomização apenas no cliente
const RandomizedWizard: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [stages, setStages] = useState<WizardStage[]>([]);
  const [currentStage, setCurrentStage] = useState(0);
  const [responses, setResponses] = useState<{ [key: number]: number }>({});
  const [showResult, setShowResult] = useState(false);

  // Inicializa o estado apenas quando o componente é montado no cliente
  useEffect(() => {
    setMounted(true);
    setStages(shuffleWizard(wizardStages));
  }, []);

  const handleResponse = (stageId: number, value: number) => {
    const newResponses = { ...responses, [stageId]: value };
    setResponses(newResponses);

    setTimeout(() => {
      if (currentStage < stages.length - 1) {
        setCurrentStage(currentStage + 1);
      } else {
        setShowResult(true);
      }
    }, 500);
  };

  const resetWizard = () => {
    setCurrentStage(0);
    setResponses({});
    setShowResult(false);
    setStages(shuffleWizard(wizardStages));
  };

  // Não renderiza nada até que o componente seja montado no cliente
  if (!mounted || stages.length === 0) {
    return null;
  }

  if (showResult) {
    const diagnosis = getDiagnosis(
      Object.values(responses).reduce((sum, value) => sum + value, 0)
    );
    return (
      <WizardLayout>
        <Head>
          <title>Diagnóstico GTM - Resultado | GTM BR</title>
          <meta
            name="description"
            content="Veja o resultado do seu diagnóstico de Go-to-Market e receba recomendações personalizadas para melhorar sua estratégia."
          />
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-brand-light to-purple-600/30 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center text-dark hover:text-brand-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao início
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              <div className="text-center mb-8">
                <CheckCircle2 className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                <h1 className="text-heading-hg text-dark mb-2">
                  Diagnóstico Completo
                </h1>
                <p className="text-gray-300">
                  Sua análise de prontidão para Go-to-Market
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-3xl font-bold mb-4">
                  {diagnosis.percentage}%
                </div>
                <h2 className="text-2xl font-semibold text-dark mb-2">
                  {diagnosis.level}
                </h2>
              </div>

              <div className="bg-brand-light rounded-xl p-6">
                <h3 className="text-lg font-semibold text-dark mb-4">
                  Recomendações Personalizadas:
                </h3>
                <ul className="space-y-3">
                  {diagnosis.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 text-center">
                <Button
                  onClick={resetWizard}
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white mr-4"
                >
                  Refazer Avaliação
                </Button>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-brand-primary text-brand-primary hover:bg-brand-primary/5"
                  >
                    Voltar ao Site
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </WizardLayout>
    );
  }

  const stage = stages[currentStage];
  const progress = ((currentStage + 1) / stages.length) * 100;

  return (
    <WizardLayout>
      <Head>
        <title>Diagnóstico GTM | GTM BR</title>
        <meta
          name="description"
          content="Faça uma avaliação completa da sua estratégia de Go-to-Market e descubra como melhorar seus resultados."
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-brand-light to-purple-600/30 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-dark hover:text-brand-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
            {/* Progress Bar */}
            <div className="h-2 bg-gray-100">
              <div
                className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-bold text-dark mb-2">
                  Avaliação Go-to-Market
                </h1>
                <p className="text-gray-300">
                  Etapa {currentStage + 1} de {stages.length}
                </p>
              </div>

              {/* Chat Interface */}
              <div className="max-w-2xl mx-auto">
                {/* Bot Message */}
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white text-sm font-semibold mr-3">
                    GTM
                  </div>
                  <div className="bg-brand-light rounded-2xl rounded-tl-none p-4 max-w-lg animate-scale-in">
                    <p className="text-dark">{stage.question}</p>
                  </div>
                </div>

                {/* Response Options */}
                <div className="space-y-3">
                  {stage.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleResponse(stage.id, option.value)}
                      className="w-full text-left p-4 rounded-2xl border-2 border-gray-200 hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-200 group animate-slide-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-dark group-hover:text-brand-primary transition-colors">
                          {option.text}
                        </span>
                        <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-brand-primary transition-colors"></div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Previous Responses */}
                {Object.keys(responses).length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-300 mb-3">
                      Respostas anteriores:
                    </p>
                    <div className="space-y-2">
                      {Object.entries(responses).map(([stageId, value]) => {
                        const prevStage = stages.find(
                          (s) => s.id === parseInt(stageId)
                        );
                        const selectedOption = prevStage?.options.find(
                          (o) => o.value === value
                        );
                        return (
                          <div
                            key={stageId}
                            className="flex items-center text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-primary mr-2" />
                            <span className="text-gray-300 truncate">
                              Etapa {stageId}:{' '}
                              {selectedOption?.text.substring(0, 50)}...
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WizardLayout>
  );
};

// Componente principal que usa o RandomizedWizard
function WizardGTM() {
  return (
    <WizardLayout>
      <Head>
        <title>Diagnóstico GTM | GTM BR</title>
        <meta
          name="description"
          content="Faça uma avaliação completa da sua estratégia de Go-to-Market e descubra como melhorar seus resultados."
        />
      </Head>
      <RandomizedWizard />
    </WizardLayout>
  );
}

// Definindo o layout personalizado para esta página
WizardGTM.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default WizardGTM;
