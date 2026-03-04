import { Recommendation } from '../types';
import styles from './ResultScreen.module.css';

interface ResultScreenProps {
  recommendation: Recommendation;
  onRestart: () => void;
}

export default function ResultScreen({ recommendation, onRestart }: ResultScreenProps) {
  const { calories, isMaintenance, maintenanceAdditions } = recommendation;
  const maintenanceTotal = (calories ?? 0) + 250;

  return (
    <div className={styles.container}>
      <div className={styles.inner}>

        <div className={styles.header + ' animate-fade-up'}>
          <div className={styles.badge}>Protocolo Anti-Rebote</div>
          <p className={styles.headerSubtitle}>Avaliação concluída</p>
        </div>

        <div className={styles.card + ' animate-scale-in'}>
          <div className={styles.cardTop}>
            <div className={styles.iconWrap}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L12.5 7.5L18 8.27L14 12.14L15.09 18L10 15.27L4.91 18L6 12.14L2 8.27L7.5 7.5L10 2Z"
                  stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={styles.cardLabel}>Sua Estrutura Recomendada</span>
          </div>

          <div className={styles.resultDisplay}>
            <span className={styles.resultValue}>{calories} kcal</span>
            {isMaintenance && (
              <span className={styles.resultSub}>estrutura base</span>
            )}
          </div>

          {/* Déficit — instrução clara */}
          {!isMaintenance && (
            <div className={styles.actionInstruction}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5A6.5 6.5 0 1 1 8 14.5A6.5 6.5 0 0 1 8 1.5Z" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M8 7v4M8 5h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Selecione o plano de <strong>{calories} kcal</strong> na sua área de membros.
            </div>
          )}

          {/* Manutenção */}
          {isMaintenance && maintenanceAdditions && (
            <div className={styles.maintenanceBlock}>
              <p className={styles.maintenanceTitle}>Fase de consolidação metabólica</p>
              <p className={styles.maintenanceInstruction}>
                Selecione o plano de <strong>{calories} kcal</strong> e adicione, usando a tabela de equivalências, nas refeições da sua preferência:
              </p>
              <div className={styles.additions}>
                {maintenanceAdditions.map((item, i) => (
                  <div key={i} className={styles.additionItem}>
                    <span className={styles.additionDot} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Total diário recomendado</span>
                <span className={styles.totalValue}>{maintenanceTotal} kcal</span>
              </div>
              <p className={styles.maintenanceObs}>
                Essa combinação garante uma manutenção equilibrada, fornecendo energia suficiente para o dia a dia sem gerar superávit calórico — protegendo o resultado conquistado e evitando o reganho de peso.
              </p>
            </div>
          )}

          <p className={styles.explanation}>
            {isMaintenance
              ? 'Essa estrutura foi calibrada para preservar os resultados conquistados, estabilizar o metabolismo e evitar o efeito rebote na fase de transição.'
              : 'Essa faixa foi definida com base no seu perfil para garantir perda de peso preservando sua energia e massa muscular.'}
          </p>

          <div className={styles.separator} />

          <div className={styles.infoRow}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Protocolo</span>
              <span className={styles.infoValue}>Anti-Rebote</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Fase</span>
              <span className={styles.infoValue}>{isMaintenance ? 'Consolidação' : 'Redução ativa'}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Calibragem</span>
              <span className={styles.infoValue}>Individualizada</span>
            </div>
          </div>
        </div>

        <div className={styles.actions + ' animate-fade-up-delay-2'}>
          <button className={styles.primaryBtn}>
            Acessar meu plano
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.secondaryBtn}>
            Quero acompanhamento personalizado
          </button>
          <button className={styles.restartBtn} onClick={onRestart}>
            Refazer avaliação
          </button>
        </div>

        <p className={styles.disclaimer + ' animate-fade-up-delay-3'}>
          Esta recomendacao e gerada com base em parametros clinicos estruturados.
          Para um plano completo e individualizado, consulte um profissional habilitado.
        </p>

      </div>
    </div>
  );
}
