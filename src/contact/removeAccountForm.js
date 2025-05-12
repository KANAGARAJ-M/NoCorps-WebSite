import React from "react";
import styles from "../css/GoogleForm.module.css";
import { Helmet } from 'react-helmet';

const RemoveAccountForm = () => {
  return (
    <div className={styles.pageContainer}>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Remove Account - NoCorps</title>
        <meta name="description" content="Request account removal from NoCorps services. Complete this form to initiate the account deletion process." />
        <meta name="keywords" content="account removal, delete account, NoCorps account" />
        <meta name="author" content="NoCorps Development Team" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nocorps.org/remove-account" />
        <meta property="og:title" content="Account Removal Request - NoCorps" />
        <meta property="og:description" content="Complete this form to request removal of your account from NoCorps services." />
        <meta property="og:image" content="https://nocorps.org/NcLogo.png" />
        
        {/* Rest of meta tags... */}
      </Helmet>

      <div className={styles.formWrapper}>
        <div className={styles.headerSection}>
          <h1>Account Removal Request</h1>
          <p className={styles.subtitle}>
            Complete this form to request the removal of your account from our services
          </p>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>Important Information</h3>
              <p>Please note that account removal is permanent and cannot be undone.</p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <i className="fas fa-envelope"></i>
                  <span>kanagaraj.developer@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <i className="fas fa-globe"></i>
                  <span>www.nocorps.org</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <iframe
              className={styles.embeddedForm}
              src="https://docs.google.com/forms/d/e/1FAIpQLScyejLUOlKxfZIFTNH94UsQc6uBlI6RPLN-MINFyOcfbuLHSw/viewform?usp=dialog"
              width="100%"
              height="800px"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Account Removal Form"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveAccountForm;