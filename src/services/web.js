import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styles from '../css/Services.module.css';

function WebServices() {
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
                <title>Web Development Services | NoCorps</title>
                <meta name="description" content="Professional web development services focusing on responsive design, performance, and user experience. Build modern web applications with our expert team." />
                <meta name="keywords" content="web development, responsive design, React development, Next.js, SEO optimization, web applications" />
                
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Web Development Services | NoCorps" />
                <meta property="og:description" content="Create modern, responsive web applications with our expert development team." />
                <meta property="og:image" content="https://nocorps.org/web-services.png" />
                
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Web Development",
                            "provider": {
                                "@type": "Organization",
                                "name": "NoCorps"
                            },
                            "description": "Professional web development services with modern technologies",
                            "serviceType": "Web Development"
                        }
                    `}
                </script>
            </Helmet>

            <header className={`${styles.heroSection} ${styles.scrollAnimate}`}>
                <h1>Web Development Services</h1>
                <p>Create modern, responsive, and high-performance web applications</p>
                <Link to="/Contact/form" className={styles.primaryCta}>Start Your Project</Link>
            </header>

            <main>
                <section className={`${styles.featuresSection} ${styles.scrollAnimate}`}>
                    <h2>Our Web Development Solutions</h2>
                    <div className={styles.featuresGrid}>
                        <article className={styles.featureCard}>
                            <h3>Modern Web Applications</h3>
                            <p>Build fast and responsive web applications using cutting-edge technologies.</p>
                            <ul>
                                <li>React.js Development</li>
                                <li>Next.js Applications</li>
                                <li>Progressive Web Apps</li>
                                <li>Single Page Applications</li>
                            </ul>
                        </article>

                        <article className={styles.featureCard}>
                            <h3>Performance & SEO</h3>
                            <p>Optimize your web presence for better visibility and user experience.</p>
                            <ul>
                                <li>Performance Optimization</li>
                                <li>SEO Best Practices</li>
                                <li>Core Web Vitals</li>
                                <li>Analytics Integration</li>
                            </ul>
                        </article>

                        <article className={styles.featureCard}>
                            <h3>E-commerce Solutions</h3>
                            <p>Create powerful online stores and e-commerce platforms.</p>
                            <ul>
                                <li>Custom E-commerce Sites</li>
                                <li>Payment Integration</li>
                                <li>Inventory Management</li>
                                <li>Shopping Cart Systems</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section className={`${styles.processSection} ${styles.scrollAnimate}`}>
                    <h2>Development Process</h2>
                    <div className={styles.processList}>
                        <div className={styles.processStep}>
                            <span>01</span>
                            <h3>Planning</h3>
                            <p>Project scoping and requirements analysis</p>
                        </div>
                        <div className={styles.processStep}>
                            <span>02</span>
                            <h3>Design</h3>
                            <p>UI/UX design and prototyping</p>
                        </div>
                        <div className={styles.processStep}>
                            <span>03</span>
                            <h3>Development</h3>
                            <p>Agile development with regular updates</p>
                        </div>
                        <div className={styles.processStep}>
                            <span>04</span>
                            <h3>Launch</h3>
                            <p>Testing, deployment, and maintenance</p>
                        </div>
                    </div>
                </section>

                <section className={`${styles.techStackSection} ${styles.scrollAnimate}`}>
                    <h2>Technologies We Use</h2>
                    <div className={styles.techGrid}>
                        <article className={styles.techCard}>
                            <h3>Frontend</h3>
                            <ul>
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </article>
                        
                        <article className={styles.techCard}>
                            <h3>Tools & Testing</h3>
                            <ul>
                                <li>Jest & React Testing Library</li>
                                <li>Webpack</li>
                                <li>Git & GitHub</li>
                                <li>CI/CD Pipeline</li>
                            </ul>
                        </article>

                        <article className={styles.techCard}>
                            <h3>Performance</h3>
                            <ul>
                                <li>Lighthouse</li>
                                <li>Google Analytics</li>
                                <li>Web Vitals</li>
                                <li>Performance Monitoring</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section className={`${styles.ctaSection} ${styles.scrollAnimate}`}>
                    <h2>Ready to Build Your Web Application?</h2>
                    <p>Let's discuss your project requirements and create something amazing together.</p>
                    <Link to="/Contact/form" className={styles.ctaButton}>
                        Schedule Free Consultation
                    </Link>
                </section>
            </main>
        </div>
    );
}

export default WebServices;