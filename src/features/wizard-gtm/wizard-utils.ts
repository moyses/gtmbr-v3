export interface ResponseOption {
  text: string;
  value: number;
}

export interface WizardStage {
  id: number;
  question: string;
  options: ResponseOption[];
}

export interface DiagnosisResult {
  percentage: number;
  level: string;
  tips: string[];
}

export const wizardStages: WizardStage[] = [
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

export const getDiagnosis = (score: number): DiagnosisResult => {
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

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const shuffleStageOptions = (stage: WizardStage): WizardStage => {
  return {
    ...stage,
    options: shuffleArray([...stage.options]),
  };
};

export const shuffleWizard = (stages: WizardStage[]): WizardStage[] => {
  return shuffleArray(stages.map((stage) => shuffleStageOptions(stage)));
};
