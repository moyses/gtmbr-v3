'use client';

import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import WizardLayout from './layout';
import { WizardQuestion } from '../../components/wizard-gtm/wizard-question';
import { WizardResult } from '../../components/wizard-gtm/wizard-result';
import {
  wizardStages,
  shuffleWizard,
  getDiagnosis,
  type WizardStage,
} from '../../components/wizard-gtm/wizard-utils';

const RandomizedWizard: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [stages, setStages] = useState<WizardStage[]>([]);
  const [currentStage, setCurrentStage] = useState(0);
  const [responses, setResponses] = useState<{ [key: number]: number }>({});
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStages(shuffleWizard(wizardStages));
  }, []);

  const handleResponse = (value: number) => {
    const newResponses = { ...responses, [stages[currentStage].id]: value };
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

  if (!mounted || stages.length === 0) {
    return null;
  }

  if (showResult) {
    const diagnosis = getDiagnosis(
      Object.values(responses).reduce((a, b) => a + b, 0)
    );
    return <WizardResult diagnosis={diagnosis} onReset={resetWizard} />;
  }

  return (
    <WizardQuestion
      currentStage={currentStage}
      totalStages={stages.length}
      question={stages[currentStage].question}
      options={stages[currentStage].options}
      onAnswer={handleResponse}
    />
  );
};

export default function WizardGTM() {
  return <RandomizedWizard />;
}

WizardGTM.getLayout = function getLayout(page: ReactElement) {
  return <WizardLayout>{page}</WizardLayout>;
};
