import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from '../css/NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <Helmet>
        <title>404 - Page Not Found | NoCorps</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className={styles.content}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className={styles.homeButton}>
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;