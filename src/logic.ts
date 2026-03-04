import { FormData, Recommendation } from './types';

function getBaseCalories(sex: string, heightM: number): 1250 | 1500 | 1750 | 2000 {
  if (sex === 'feminino') {
    if (heightM < 1.60) return 1250;
    if (heightM <= 1.70) return 1500;
    return 1750;
  } else {
    if (heightM < 1.70) return 1500;
    if (heightM <= 1.85) return 1750;
    return 2000;
  }
}

export function calculateRecommendation(data: FormData): Recommendation {
  const { sex, height, goal } = data;
  const heightM = parseFloat(height) / 100;
  const baseCalories = getBaseCalories(sex, heightM);

  if (goal === 'manter') {
    return {
      calories: baseCalories,
      isMaintenance: true,
      maintenanceAdditions: [
        '+1 porção de carboidrato complexo (~100 kcal)',
        '+2 porções de fruta (~150 kcal)',
      ],
    };
  }

  return { calories: baseCalories, isMaintenance: false };
}
