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
          Seletor de Estrutura<br />
          <span className={styles.titleAccent}>Nutricional</span>
        </h1>

        <p className={styles.subtitle + ' animate-fade-up-delay-2'}>
          Identifique a estrutura calórica ideal<br className={styles.br} />
          para a sua fase atual do tratamento.
        </p>

        <button
          className={styles.button + ' animate-fade-up-delay-3'}
          onClick={onStart}
        >
          Começar
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
        <div className={styles.bgGrid} />
      </div>
    </div>
  );
}
