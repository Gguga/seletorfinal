import { Recommendation } from '../types';
import styles from './ResultScreen.module.css';

interface ResultScreenProps {
  recommendation: Recommendation;
  onRestart: () => void;
}

export default function ResultScreen({ recommendation, onRestart }: ResultScreenProps) {
  const { calories, isMaintenance, maintenanceAdditions } = recommendation;

  const calorieLine = isMaintenance
    ? 'Manutenção estruturada'
    : `${calories} kcal estratégicas`;

  const explanationText = isMaintenance
    ? 'Você está na fase de consolidação metabólica. Sua estrutura atual deve ser mantida, com adições calibradas para estabilizar o peso sem gerar acúmulo. O objetivo é preservar o resultado conquistado com inteligência metabólica.'
    : 'Essa faixa foi definida com base nos seus dados e na sua fase atual do tratamento. O objetivo é preservar massa muscular, reduzir vulnerabilidade metabólica e estruturar a progressão com segurança clínica.';

  return (
    <div className={styles.container}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header + ' animate-fade-up'}>
          <div className={styles.badge}>Protocolo Anti-Rebote</div>
          <p className={styles.headerSubtitle}>Avaliação concluída</p>
        </div>

        {/* Main card */}
        <div className={styles.card + ' animate-scale-in'}>
          <div className={styles.cardTop}>
            <div className={styles.iconWrap}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2L13.5 8.5L20 9.27L15.5 13.64L16.82 20L11 16.9L5.18 20L6.5 13.64L2 9.27L8.5 8.5L11 2Z"
                  stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <span className={styles.cardLabel}>Sua Estrutura Recomendada</span>
          </div>

          <div className={styles.resultDisplay}>
            <span className={styles.resultValue}>{calorieLine}</span>
          </div>

          {isMaintenance && maintenanceAdditions && (
            <div className={styles.additions}>
              <p className={styles.additionsTitle}>Inclua progressivamente:</p>
              {maintenanceAdditions.map((item, i) => (
                <div key={i} className={styles.additionItem}>
                  <span className={styles.additionDot} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          <p className={styles.explanation}>{explanationText}</p>

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

        {/* Actions */}
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

        {/* Disclaimer */}
        <p className={styles.disclaimer + ' animate-fade-up-delay-3'}>
          Esta recomendacao e gerada com base em parametros clinicos estruturados.
          Para um plano completo e individualizado, consulte um profissional habilitado.
        </p>

      </div>
    </div>
  );
}
