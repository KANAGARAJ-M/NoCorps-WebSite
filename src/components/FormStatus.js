import React from 'react';
import styles from './FormStatus.module.css';

const FormStatus = ({ status, message, retry }) => {
    if (!message) return null;

    return (
        <div className={`${styles.alert} ${styles[status]}`} role="alert">
            <div className={styles.alertContent}>
                {status === 'success' && <span className={styles.successIcon}>✓</span>}
                {status === 'error' && <span className={styles.errorIcon}>!</span>}
                <p>{message}</p>
                {status === 'error' && retry && (
                    <button 
                        onClick={retry} 
                        className={styles.retryButton}
                        aria-label="Retry submission"
                    >
                        Retry
                    </button>
                )}
            </div>
        </div>
    );
};

export default FormStatus;