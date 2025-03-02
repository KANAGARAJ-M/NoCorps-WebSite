import React from "react";
import styles from "../css/GoogleForm.module.css";
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  return (
    <div className={styles.pageContainer}>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact NoCorps - Get in Touch for Development Solutions</title>
        <meta name="description" content="Contact NoCorps for professional Flutter, full-stack, and web development services. Let's discuss your project requirements and create innovative solutions together." />
        <meta name="keywords" content="contact NoCorps, software development inquiry, Flutter development services, web development contact, hire developers, software consultation" />
        <meta name="author" content="NoCorps Development Team" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nocorps.org/contact" />
        <meta property="og:title" content="Contact NoCorps - Get in Touch for Development Solutions" />
        <meta property="og:description" content="Ready to start your project? Contact NoCorps for professional development services." />
        <meta property="og:image" content="https://nocorps.org/NcLogo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nocorps_dev" />
        <meta name="twitter:title" content="Contact NoCorps - Get in Touch for Development Solutions" />
        <meta name="twitter:description" content="Ready to start your project? Contact NoCorps for professional development services." />
        <meta name="twitter:image" content="https://nocorps.org/NcLogo.png" />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://nocorps.org/contact" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact NoCorps",
              "description": "Contact page for NoCorps development services",
              "mainEntity": {
                "@type": "Organization",
                "name": "NoCorps",
                "url": "https://nocorps.org",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": ["English"]
                }
              }
            }
          `}
        </script>
      </Helmet>

      <div className={styles.formWrapper}>
        <div className={styles.headerSection}>
          <h1>Get in Touch</h1>
          <p className={styles.subtitle}>
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>Let's Talk</h3>
              <p>Fill out the form and we'll get back to you within 24 hours.</p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <i className="fas fa-envelope"></i>
                  <span>contact@nocorps.org</span>
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
              src="https://docs.google.com/forms/d/e/1FAIpQLSc4PTLe7A6V0yOKv1mndFIF1MEkjMuDTIcBXyqN513R2nuWUg/viewform?embedded=true"
              width="100%"
              height="800px"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;