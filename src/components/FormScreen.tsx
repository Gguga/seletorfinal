import { useState } from 'react';
import { FormData, Sex, TrainingFrequency, Goal } from '../types';
import styles from './FormScreen.module.css';

interface FormScreenProps {
  onSubmit: (data: FormData) => void;
}

const TOTAL_STEPS = 6;

export default function FormScreen({ onSubmit }: FormScreenProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({
    sex: '',
    age: '',
    height: '',
    weight: '',
    trainingFrequency: '',
    goal: '',
  });
  const [error, setError] = useState('');

  const progress = (step / TOTAL_STEPS) * 100;

  const validate = (): boolean => {
    setError('');
    if (step === 1 && !data.sex) { setError('Selecione uma opção para continuar.'); return false; }
    if (step === 2) {
      const v = Number(data.age);
      if (!data.age || v < 10 || v > 100) { setError('Informe uma idade válida.'); return false; }
    }
    if (step === 3) {
      const v = Number(data.height);
      if (!data.height || v < 130 || v > 230) { setError('Informe uma altura válida.'); return false; }
    }
    if (step === 4) {
      const v = Number(data.weight);
      if (!data.weight || v < 30 || v > 300) { setError('Informe um peso válido.'); return false; }
    }
    if (step === 5 && !data.trainingFrequency) { setError('Selecione uma opção para continuar.'); return false; }
    if (step === 6 && !data.goal) { setError('Selecione uma opção para continuar.'); return false; }
    return true;
  };

  const next = () => {
    if (!validate()) return;
    if (step === TOTAL_STEPS) {
      onSubmit(data);
    } else {
      setStep(step + 1);
    }
  };

  const back = () => {
    setError('');
    setStep(step - 1);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') next();
  };

  return (
    <div className={styles.container}>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      {step > 1 && (
        <button className={styles.backBtn} onClick={back}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Voltar
        </button>
      )}

      <div className={styles.inner}>
        <div className={styles.stepCount}>
          {step} <span>/ {TOTAL_STEPS}</span>
        </div>

        {step === 1 && (
          <div className={styles.slide + ' animate-fade-up'}>
            <h2 className={styles.question}>Qual é o seu sexo biológico?</h2>
            <div className={styles.optionGroup}>
              {([
                { value: 'feminino', label: 'Feminino' },
                { value: 'masculino', label: 'Masculino' },
              ] as { value: Sex; label: string }[]).map((opt) => (
                <button
                  key={opt.value}
                  className={`${styles.optionCard} ${data.sex === opt.value ? styles.optionCardActive : ''}`}
                  onClick={() => { setData({ ...data, sex: opt.value }); setError(''); }}
                >
                  <span className={styles.optionLabel}>{opt.label}</span>
                  <span className={styles.optionCheck}>
                    {data.sex === opt.value && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8L6.5 11.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.slide + ' animate-fade-up'}>
            <h2 className={styles.question}>Qual é a sua idade?</h2>
            <div className={styles.numericInput}>
              <input
                className={styles.bigInput}
                type="number"
                placeholder="00"
                value={data.age}
                onChange={(e) => { setData({ ...data, age: e.target.value }); setError(''); }}
                onKeyDown={handleKey}
                autoFocus
              />
              <span className={styles.bigUnit}>anos</span>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.slide + ' animate-fade-up'}>
            <h2 className={styles.question}>Qual é a sua altura?</h2>
            <div className={styles.numericInput}>
              <input
                className={styles.bigInput}
                type="number"
                placeholder="000"
                value={data.height}
                onChange={(e) => { setData({ ...data, height: e.target.value }); setError(''); }}
                onKeyDown={handleKey}
                autoFocus
              />
              <span className={styles.bigUnit}>cm</span>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className={styles.slide + ' animate-fade-up'}>
            <h2 className={styles.question}>Qual é o seu peso atual?</h2>
            <div className={styles.numericInput}>
              <input
                className={styles.bigInput}
                type="number"
                placeholder="00"
                value={data.weight}
                onChange={(e) => { setData({ ...data, weight: e.target.value }); setError(''); }}
                onKeyDown={handleKey}
                autoFocus
              />
              <span className={styles.bigUnit}>kg</span>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className={styles.slide + ' animate-fade-up'}>
            <h2 className={styles.question}>Com que frequência você treina?</h2>
            <div className={styles.optionGroup}>
              {([
                { value: '0-1', label: '0 a 1x por semana', desc: 'Sedentário ou muito leve' },
                { value: '2-3', label: '2 a 3x por semana', desc: 'Atividade moderada' },
                { value: '4+', label: '4x ou mais', desc: 'Atividade intensa' },
              ] as { value: TrainingFrequency; label: string; desc: string }[]).map((opt) => (
                <button
                  key={opt.value}
                  className={`${styles.optionCard} ${data.trainingFrequency === opt.value ? styles.optionCardActive : ''}`}
                  onClick={() => { setData({ ...data, trainingFrequency: opt.value }); setError(''); }}
                >
                  <span className={styles.optionLabel}>{opt.label}</span>
                  <span className={styles.optionDesc}>{opt.desc}</span>
                  <span className={styles.optionCheck}>
                    {data.trainingFrequency === opt.value && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8L6.5 11.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className={styles.slide + ' animate-fade-up'}>
            <h2 className={styles.question}>Qual é a sua fase atual?</h2>
            <div className={styles.optionGroup}>
              {([
                { value: 'emagrecer', label: 'Ainda quero emagrecer', desc: 'Estou em processo ativo de redução de peso.' },
                { value: 'manter', label: 'Já cheguei e quero manter', desc: 'Atingi meu objetivo e busco consolidar os resultados.' },
              ] as { value: Goal; label: string; desc: string }[]).map((opt) => (
                <button
                  key={opt.value}
                  className={`${styles.optionCard} ${data.goal === opt.value ? styles.optionCardActive : ''}`}
                  onClick={() => { setData({ ...data, goal: opt.value }); setError(''); }}
                >
                  <span className={styles.optionLabel}>{opt.label}</span>
                  <span className={styles.optionDesc}>{opt.desc}</span>
                  <span className={styles.optionCheck}>
                    {data.goal === opt.value && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8L6.5 11.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.nextBtn} onClick={next}>
          {step === TOTAL_STEPS ? 'Ver minha recomendação' : 'Continuar'}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
