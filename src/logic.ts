import { FormData, Recommendation } from './types';

export function calculateRecommendation(data: FormData): Recommendation {
  const { sex, height, goal } = data;
  const heightM = parseFloat(height) / 100;

  if (goal === 'manter') {
    return {
      calories: null,
      isMaintenance: true,
      maintenanceAdditions: [
        '+1 porção de carboidrato complexo',
        '+2 porções de fruta',
      ],
    };
  }

  if (sex === 'feminino') {
    if (heightM < 1.60) {
      return { calories: 1250, isMaintenance: false };
    } else if (heightM <= 1.70) {
      return { calories: 1500, isMaintenance: false };
    } else {
      return { calories: 1750, isMaintenance: false };
    }
  } else {
    // masculino
    if (heightM < 1.70) {
      return { calories: 1500, isMaintenance: false };
    } else if (heightM <= 1.85) {
      return { calories: 1750, isMaintenance: false };
    } else {
      return { calories: 2000, isMaintenance: false };
    }
  }
}
