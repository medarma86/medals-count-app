import styles from './Loader.module.css';

export const Loader = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.spinner} />
    <p>Loading medal data...</p>
  </div>
);