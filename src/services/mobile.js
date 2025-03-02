import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styles from '../css/Services.module.css';

function MobileServices() {
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
        <div className={styles.serviceContainer}>
            <Helmet>
                <title>Mobile App Development Services | NoCorps</title>
                <meta name="description" content="Expert Flutter mobile app development services for iOS and Android. Build powerful, cross-platform applications with our experienced team." />
                <meta name="keywords" content="Flutter development, mobile app development, iOS apps, Android apps, cross-platform development, NoCorps mobile services" />
                
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Mobile App Development Services | NoCorps" />
                <meta property="og:description" content="Build powerful mobile applications with our expert Flutter development team." />
                <meta property="og:image" content="https://nocorps.org/mobile-services.png" />
                
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Mobile App Development",
                            "provider": {
                                "@type": "Organization",
                                "name": "NoCorps"
                            },
                            "description": "Professional Flutter mobile app development services for iOS and Android platforms",
                            "serviceType": "Mobile Application Development"
                        }
                    `}
                </script>
            </Helmet>

            <header className={`${styles.heroSection} ${styles.scrollAnimate}`}>
                <h1>Mobile App Development Services</h1>
                <p>Transform your ideas into powerful mobile applications with Flutter</p>
                <Link to="/Contact/form" className={styles.primaryCta}>Start Your Project</Link>
            </header>

            <main>
                <section className={`${styles.featuresSection} ${styles.scrollAnimate}`}>
                    <h2>Why Choose Flutter Development?</h2>
                    <div className={styles.featuresGrid}>
                        <article className={styles.featureCard}>
                            <h3>Cross-Platform Development</h3>
                            <p>Build once, deploy everywhere with Flutter's cross-platform capabilities.</p>
                            <ul>
                                <li>Single codebase for iOS and Android</li>
                                <li>Native performance on all platforms</li>
                                <li>Consistent user experience</li>
                            </ul>
                        </article>

                        <article className={styles.featureCard}>
                            <h3>Cost-Effective Solutions</h3>
                            <p>Reduce development costs and time-to-market significantly.</p>
                            <ul>
                                <li>Faster development cycle</li>
                                <li>Reduced maintenance costs</li>
                                <li>Efficient resource utilization</li>
                            </ul>
                        </article>

                        <article className={styles.featureCard}>
                            <h3>Beautiful UI/UX Design</h3>
                            <p>Create stunning user interfaces with Flutter's widget system.</p>
                            <ul>
                                <li>Custom animations</li>
                                <li>Material Design support</li>
                                <li>Platform-specific styling</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section className={`${styles.processSection} ${styles.scrollAnimate}`}>
                    <h2>Our Development Process</h2>
                    <div className={styles.processList}>
                        <div className={styles.processStep}>
                            <span>01</span>
                            <h3>Requirements Analysis</h3>
                            <p>Detailed analysis of your app requirements and target audience</p>
                        </div>
                        <div className={styles.processStep}>
                            <span>02</span>
                            <h3>UI/UX Design</h3>
                            <p>Creation of intuitive and engaging user interfaces</p>
                        </div>
                        <div className={styles.processStep}>
                            <span>03</span>
                            <h3>Development</h3>
                            <p>Agile development with regular updates and testing</p>
                        </div>
                        <div className={styles.processStep}>
                            <span>04</span>
                            <h3>Testing & Deployment</h3>
                            <p>Comprehensive testing and app store submission</p>
                        </div>
                    </div>
                </section>

                <section className={`${styles.portfolioSection} ${styles.scrollAnimate}`}>
                    <h2>Featured Mobile Apps</h2>
                    <div className={styles.portfolioGrid}>
                        <article className={styles.portfolioItem}>
                            <h3>ShareMedia</h3>
                            <p>Social media platform with advanced content management</p>
                            <Link to="/products/share-media" className={styles.portfolioLink}>
                                View Case Study →
                            </Link>
                        </article>
                        
                        <article className={styles.portfolioItem}>
                            <h3>VShare</h3>
                            <p>Video sharing platform with social features</p>
                            <Link to="/products/vshare" className={styles.portfolioLink}>
                                View Case Study →
                            </Link>
                        </article>
                    </div>
                </section>

                <section className={`${styles.ctaSection} ${styles.scrollAnimate}`}>
                    <h2>Ready to Build Your Mobile App?</h2>
                    <p>Let's discuss your project requirements and create something amazing together.</p>
                    <Link to="/Contact/form" className={styles.ctaButton}>
                        Schedule Free Consultation
                    </Link>
                </section>
            </main>
        </div>
    );
}

export default MobileServices;