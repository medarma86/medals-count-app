
import styles from './ErrorPage.module.css';

// const ErrorPage = ({ error }: { error: Error }) => (
export const ErrorPage = () => (
  <div className={styles.errorContainer}>
    <h2>Data Loading Failed</h2>
    {/* <p>{error.message}</p> if needed we can get the error message from api to show but not a good practice*/}
    <button 
      className={styles.retryButton}
      onClick={() => window.location.reload()}
    >
      Retry
    </button>
  </div>
);