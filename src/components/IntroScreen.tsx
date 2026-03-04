import styles from './IntroScreen.module.css';

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.badge + ' animate-fade-up'}>
          Protocolo Anti-Rebote
        </div>

        <h1 className={styles.title + ' animate-fade-up-delay-1'}>
          Seletor de<br />
          <span className={styles.titleAccent}>Cardápio Smart</span>
        </h1>

        <p className={styles.subtitle + ' animate-fade-up-delay-2'}>
          Descubra qual estrutura calórica é ideal para<br className={styles.br} />
          sua fase atual do tratamento.
        </p>

        <div className={styles.divider + ' animate-fade-up-delay-2'} />

        <div className={styles.pillars + ' animate-fade-up-delay-3'}>
          <div className={styles.pillar}>
            <span className={styles.pillarDot} />
            <span>Avaliação individualizada</span>
          </div>
          <div className={styles.pillar}>
            <span className={styles.pillarDot} />
            <span>Baseada em dados clínicos</span>
          </div>
          <div className={styles.pillar}>
            <span className={styles.pillarDot} />
            <span>Protocolo estruturado</span>
          </div>
        </div>

        <button
          className={styles.button + ' animate-fade-up-delay-4'}
          onClick={onStart}
        >
          Começar
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <p className={styles.disclaimer + ' animate-fade-up-delay-4'}>
          Resultado gerado em menos de 60 segundos
        </p>
      </div>

      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
        <div className={styles.bgGrid} />
      </div>
    </div>
  );
}
