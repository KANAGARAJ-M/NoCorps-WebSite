import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaServer, FaReact, FaCloud, FaCode, FaDatabase, FaCogs } from 'react-icons/fa';
import styles from '../css/Services.module.css';

function FullStackServices() {
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
                <title>Full-Stack Development Services | NoCorps</title>
                <meta name="description" content="Professional full-stack development services using modern technologies. Build scalable web applications with our expert team." />
                <meta name="keywords" content="full-stack development, web applications, backend development, frontend development, Node.js, React, database design" />
                
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Full-Stack Development Services | NoCorps" />
                <meta property="og:description" content="Build complete web applications with our expert full-stack development team." />
                <meta property="og:image" content="https://nocorps.org/fullstack-services.png" />
                
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Full-Stack Development",
                            "provider": {
                                "@type": "Organization",
                                "name": "NoCorps"
                            },
                            "description": "Professional full-stack development services for web applications",
                            "serviceType": "Software Development"
                        }
                    `}
                </script>
            </Helmet>

            <header className={`${styles.heroSection} ${styles.scrollAnimate}`}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <span className={styles.badge}>Expert Development</span>
                    <h1>Full-Stack Development Services</h1>
                    <p>Build complete, scalable web applications with modern technologies</p>
                    <div className={styles.heroCta}>
                        <Link to="/Contact/form" className={styles.primaryCta}>
                            Start Your Project
                        </Link>
                        <Link to="/services" className={styles.secondaryCta}>
                            Explore Services
                        </Link>
                    </div>
                </div>
            </header>

            <main>
                <section className={`${styles.featuresSection} ${styles.scrollAnimate}`}>
                    <h2>Comprehensive Full-Stack Solutions</h2>
                    <div className={styles.featuresGrid}>
                        <article className={styles.featureCard}>
                            <FaServer className={styles.featureIcon} />
                            <h3>Backend Development</h3>
                            <p>Robust server-side solutions with modern technologies.</p>
                            <ul>
                                <li>Node.js & Express</li>
                                <li>Python & Django</li>
                                <li>Database Design</li>
                                <li>API Development</li>
                            </ul>
                        </article>

                        <article className={styles.featureCard}>
                            <FaReact className={styles.featureIcon} />
                            <h3>Frontend Development</h3>
                            <p>Responsive and interactive user interfaces.</p>
                            <ul>
                                <li>React.js & Next.js</li>
                                <li>Vue.js & Nuxt.js</li>
                                <li>Modern UI/UX</li>
                                <li>Performance Optimization</li>
                            </ul>
                        </article>

                        <article className={styles.featureCard}>
                            <FaCloud className={styles.featureIcon} />
                            <h3>DevOps & Deployment</h3>
                            <p>Seamless deployment and maintenance.</p>
                            <ul>
                                <li>CI/CD Pipeline Setup</li>
                                <li>Cloud Deployment</li>
                                <li>Server Management</li>
                                <li>Performance Monitoring</li>
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
                            <p>Understanding your business needs and technical requirements</p>
                        </div>
                        <div className={styles.processStep}>
                            <span>02</span>
                            <h3>Architecture Design</h3>
                            <p>Planning scalable and maintainable application architecture</p>
                        </div>
                        <div className={styles.processStep}>
                            <span>03</span>
                            <h3>Development & Testing</h3>
                            <p>Agile development with continuous testing and integration</p>
                        </div>
                        <div className={styles.processStep}>
                            <span>04</span>
                            <h3>Deployment & Support</h3>
                            <p>Smooth deployment and ongoing maintenance</p>
                        </div>
                    </div>
                </section>

                <section className={`${styles.techStackSection} ${styles.scrollAnimate}`}>
                    <h2>Our Technology Stack</h2>
                    <div className={styles.techGrid}>
                        <article className={styles.techCard}>
                            <h3>Backend Technologies</h3>
                            <ul>
                                <li>Node.js & Express</li>
                                <li>Python & Django</li>
                                <li>Java Spring Boot</li>
                                <li>GraphQL</li>
                            </ul>
                        </article>
                        
                        <article className={styles.techCard}>
                            <h3>Frontend Technologies</h3>
                            <ul>
                                <li>React.js & Redux</li>
                                <li>Vue.js & Vuex</li>
                                <li>Angular</li>
                                <li>TypeScript</li>
                            </ul>
                        </article>

                        <article className={styles.techCard}>
                            <h3>Databases & Storage</h3>
                            <ul>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li>Redis</li>
                                <li>AWS S3</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section className={`${styles.ctaSection} ${styles.scrollAnimate}`}>
                    <h2>Ready to Build Your Application?</h2>
                    <p>Let's discuss your project requirements and create something amazing together.</p>
                    <Link to="/Contact/form" className={styles.ctaButton}>
                        Schedule Free Consultation
                    </Link>
                </section>
            </main>
        </div>
    );
}

export default FullStackServices;