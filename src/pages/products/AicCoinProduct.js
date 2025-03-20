import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaChartLine, FaWallet, FaUsers, FaCoins, FaLock } from 'react-icons/fa';
import styles from '../../css/Products.module.css';

function AicCoinProduct() {
    const observerRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.isVisible);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(`.${styles.scrollAnimate}`);
        elements.forEach(el => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                elements.forEach(el => observerRef.current.unobserve(el));
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className={styles.productContainer}>
            <Helmet>
                <title>AIC Coin - Cryptocurrency Platform | NoCorps</title>
                <meta name="description" content="AIC Coin - A secure cryptocurrency platform with advanced trading features, wallet management, and real-time market data." />
                <meta name="keywords" content="AIC Coin, cryptocurrency, crypto trading, digital wallet, blockchain, NoCorps" />
                
                <meta property="og:type" content="website" />
                <meta property="og:title" content="AIC Coin - Advanced Cryptocurrency Platform" />
                <meta property="og:description" content="Secure cryptocurrency platform with advanced trading features and wallet management." />
                <meta property="og:image" content="https://nocorps.org/aic-coin.png" />
                
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "AIC Coin",
                            "applicationCategory": "FinanceApplication",
                            "operatingSystem": "Android",
                            "description": "Cryptocurrency trading and wallet management platform",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            }
                        }
                    `}
                </script>
            </Helmet>

            <header className={`${styles.productHero} ${styles.scrollAnimate}`}>
                <div className={styles.heroContent}>
                    <span className={styles.badge}>Featured Product</span>
                    <h1>AIC Coin Platform</h1>
                    <p className={styles.heroDescription}>
                        Experience secure cryptocurrency trading and wallet management with our state-of-the-art platform
                    </p>
                    <div className={styles.heroCta}>
                        <a href="https://play.google.com/store/apps/details?id=com.nocorps.aiccoin" 
                           className={styles.downloadButton}
                           target="_blank"
                           rel="noopener noreferrer">
                            <FaCoins className={styles.buttonIcon} />
                            Download Now
                        </a>
                        <Link to="/contact-form" className={styles.contactButton}>
                            Get Support
                        </Link>
                    </div>
                    <div className={styles.heroStats}>
                        <div className={styles.statItem}>
                            <strong>100K+</strong>
                            <span>Active Users</span>
                        </div>
                        <div className={styles.statItem}>
                            <strong>$10M+</strong>
                            <span>Trading Volume</span>
                        </div>
                        <div className={styles.statItem}>
                            <strong>20+</strong>
                            <span>Currencies</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className={styles.mainContent}>
                <section className={`${styles.featuresSection} ${styles.scrollAnimate}`}>
                    <h2>Key Features</h2>
                    <div className={styles.featuresGrid}>
                        <article className={styles.featureCard}>
                            <FaShieldAlt className={styles.featureIcon} />
                            <h3>Secure Trading</h3>
                            <ul>
                                <li>Advanced encryption protocols</li>
                                <li>Multi-factor authentication</li>
                                <li>Secure wallet storage</li>
                                <li>Real-time transaction monitoring</li>
                            </ul>
                        </article>

                        <article className={styles.featureCard}>
                            <FaChartLine className={styles.featureIcon} />
                            <h3>Market Analysis</h3>
                            <ul>
                                <li>Real-time market data</li>
                                <li>Customizable price alerts</li>
                                <li>Advanced trading charts</li>
                                <li>Technical indicators</li>
                            </ul>
                        </article>

                        <article className={styles.featureCard}>
                            <FaWallet className={styles.featureIcon} />
                            <h3>Wallet Management</h3>
                            <ul>
                                <li>Multi-currency support</li>
                                <li>Detailed transaction history</li>
                                <li>Portfolio tracking & analytics</li>
                                <li>Instant transfers</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section className={`${styles.statsSection} ${styles.scrollAnimate}`}>
                    <h2>Platform Statistics</h2>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>100K+</span>
                            <span className={styles.statLabel}>Active Users</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>$10M+</span>
                            <span className={styles.statLabel}>Trading Volume</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>20+</span>
                            <span className={styles.statLabel}>Supported Currencies</span>
                        </div>
                    </div>
                </section>

                <section className={`${styles.securitySection} ${styles.scrollAnimate}`}>
                    <h2>Security First</h2>
                    <div className={styles.securityFeatures}>
                        <ul>
                            <li>256-bit AES encryption</li>
                            <li>Biometric authentication</li>
                            <li>Cold storage support</li>
                            <li>Regular security audits</li>
                            <li>24/7 fraud monitoring</li>
                        </ul>
                    </div>
                </section>

                <section className={`${styles.downloadSection} ${styles.scrollAnimate}`}>
                    <h2>Get Started Today</h2>
                    <p>Download AIC Coin and start trading securely</p>
                    <div className={styles.downloadOptions}>
                        <a href="https://play.google.com/store/apps/details?id=com.nocorps.aiccoin" 
                           className={styles.storeButton}
                           target="_blank"
                           rel="noopener noreferrer">
                            <img 
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                                alt="Get it on Google Play" 
                            />
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AicCoinProduct;