import { useState } from 'react';
import { FormData, Sex, TrainingFrequency, Goal } from '../types';
import styles from './FormScreen.module.css';

interface FormScreenProps {
  onSubmit: (data: FormData) => void;
}

const initialData: FormData = {
  sex: '',
  age: '',
  height: '',
  weight: '',
  trainingFrequency: '',
  goal: '',
};

export default function FormScreen({ onSubmit }: FormScreenProps) {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!data.sex) newErrors.sex = 'Selecione o sexo';
    if (!data.age || isNaN(Number(data.age)) || Number(data.age) < 10 || Number(data.age) > 100) {
      newErrors.age = 'Informe uma idade válida';
    }
    if (!data.height || isNaN(Number(data.height)) || Number(data.height) < 130 || Number(data.height) > 230) {
      newErrors.height = 'Informe uma altura válida (cm)';
    }
    if (!data.weight || isNaN(Number(data.weight)) || Number(data.weight) < 30 || Number(data.weight) > 300) {
      newErrors.weight = 'Informe um peso válido (kg)';
    }
    if (!data.trainingFrequency) newErrors.trainingFrequency = 'Selecione a frequência';
    if (!data.goal) newErrors.goal = 'Selecione seu objetivo';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(data);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header + ' animate-fade-up'}>
          <div className={styles.step}>Etapa 1 de 1</div>
          <h2 className={styles.title}>Seus dados clínicos</h2>
          <p className={styles.subtitle}>
            Preencha com precisão para uma recomendação calibrada ao seu perfil.
          </p>
        </div>

        <div className={styles.card + ' animate-fade-up-delay-1'}>

          {/* Sexo */}
          <div className={styles.field}>
            <label className={styles.label}>Sexo biológico</label>
            <div className={styles.segmented}>
              {(['feminino', 'masculino'] as Sex[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`${styles.segment} ${data.sex === s ? styles.segmentActive : ''}`}
                  onClick={() => setData({ ...data, sex: s })}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
            {errors.sex && <span className={styles.error}>{errors.sex}</span>}
          </div>

          {/* Idade / Altura / Peso */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Idade</label>
              <div className={styles.inputWrapper}>
                <input
                  className={`${styles.input} ${errors.age ? styles.inputError : ''}`}
                  type="number"
                  placeholder="Ex: 32"
                  value={data.age}
                  onChange={(e) => setData({ ...data, age: e.target.value })}
                />
                <span className={styles.inputUnit}>anos</span>
              </div>
              {errors.age && <span className={styles.error}>{errors.age}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Altura</label>
              <div className={styles.inputWrapper}>
                <input
                  className={`${styles.input} ${errors.height ? styles.inputError : ''}`}
                  type="number"
                  placeholder="Ex: 165"
                  value={data.height}
                  onChange={(e) => setData({ ...data, height: e.target.value })}
                />
                <span className={styles.inputUnit}>cm</span>
              </div>
              {errors.height && <span className={styles.error}>{errors.height}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Peso atual</label>
              <div className={styles.inputWrapper}>
                <input
                  className={`${styles.input} ${errors.weight ? styles.inputError : ''}`}
                  type="number"
                  placeholder="Ex: 72"
                  value={data.weight}
                  onChange={(e) => setData({ ...data, weight: e.target.value })}
                />
                <span className={styles.inputUnit}>kg</span>
              </div>
              {errors.weight && <span className={styles.error}>{errors.weight}</span>}
            </div>
          </div>

          {/* Frequência de treino */}
          <div className={styles.field}>
            <label className={styles.label}>Frequência de treino semanal</label>
            <div className={styles.segmented}>
              {([
                { value: '0-1', label: '0 – 1x' },
                { value: '2-3', label: '2 – 3x' },
                { value: '4+', label: '4x ou mais' },
              ] as { value: TrainingFrequency; label: string }[]).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`${styles.segment} ${data.trainingFrequency === opt.value ? styles.segmentActive : ''}`}
                  onClick={() => setData({ ...data, trainingFrequency: opt.value })}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {errors.trainingFrequency && <span className={styles.error}>{errors.trainingFrequency}</span>}
          </div>

          {/* Objetivo */}
          <div className={styles.field}>
            <label className={styles.label}>Fase atual</label>
            <div className={styles.goalGroup}>
              {([
                {
                  value: 'emagrecer',
                  label: 'Ainda quero emagrecer',
                  desc: 'Estou em processo ativo de redução de peso.',
                },
                {
                  value: 'manter',
                  label: 'Ja cheguei e quero manter',
                  desc: 'Atingi meu objetivo e busco consolidar os resultados.',
                },
              ] as { value: Goal; label: string; desc: string }[]).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`${styles.goalOption} ${data.goal === opt.value ? styles.goalOptionActive : ''}`}
                  onClick={() => setData({ ...data, goal: opt.value })}
                >
                  <div className={styles.goalRadio}>
                    <div className={styles.goalRadioInner} />
                  </div>
                  <div className={styles.goalText}>
                    <span className={styles.goalLabel}>{opt.label}</span>
                    <span className={styles.goalDesc}>{opt.desc}</span>
                  </div>
                </button>
              ))}
            </div>
            {errors.goal && <span className={styles.error}>{errors.goal}</span>}
          </div>

          <button className={styles.submit} onClick={handleSubmit}>
            Gerar recomendação
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
