import { useState, useEffect } from 'react';
import { Step, FormData, Recommendation } from './types';
import { calculateRecommendation } from './logic';
import IntroScreen from './components/IntroScreen';
import FormScreen from './components/FormScreen';
import ResultScreen from './components/ResultScreen';
import './App.css';

export default function App() {
  const [step, setStep] = useState<Step>('intro');
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, [step]);

  const handleStart = () => {
    setStep('form');
  };

  const handleFormSubmit = (data: FormData) => {
    const result = calculateRecommendation(data);
    setRecommendation(result);
    setStep('result');
  };

  const handleRestart = () => {
    setRecommendation(null);
    setStep('intro');
  };

  return (
    <div className="app">
      {step === 'intro' && <IntroScreen onStart={handleStart} />}
      {step === 'form' && <FormScreen onSubmit={handleFormSubmit} />}
      {step === 'result' && recommendation && (
        <ResultScreen recommendation={recommendation} onRestart={handleRestart} />
      )}
    </div>
  );
}
