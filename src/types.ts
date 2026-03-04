export type Step = 'intro' | 'form' | 'result';

export type Sex = 'feminino' | 'masculino';

export type TrainingFrequency = '0-1' | '2-3' | '4+';

export type Goal = 'emagrecer' | 'manter';

export interface FormData {
  sex: Sex | '';
  age: string;
  height: string;
  weight: string;
  trainingFrequency: TrainingFrequency | '';
  goal: Goal | '';
}

export interface Recommendation {
  calories: 1250 | 1500 | 1750 | 2000 | null;
  isMaintenance: boolean;
  maintenanceAdditions?: string[];
}
