import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styles from '../css/About.module.css';
import Img from '../assets/NcLogo.png';

function About() {
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

        const elements = document.querySelectorAll(`
            .${styles.scrollAnimate},
            .${styles.teamMember},
            .${styles.valueCard},
            .${styles.milestone}
        `);

        elements.forEach(el => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                elements.forEach(el => observerRef.current.unobserve(el));
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className={styles.aboutContainer}>
            <Helmet>
                {/* Primary Meta Tags */}
                <title>About NoCorps - Leading Software Development Company</title>
                <meta name="description" content="Learn about NoCorps - a leading software development company specializing in Flutter, full-stack, and web development. Discover our mission, expertise, and commitment to excellence." />
                <meta name="keywords" content="NoCorps about, software development company, Flutter experts, full-stack development, web development team, mobile app developers, custom software solutions" />
                <meta name="author" content="NoCorps Development Team" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nocorps.org/about" />
                <meta property="og:title" content="About NoCorps - Leading Software Development Company" />
                <meta property="og:description" content="Discover NoCorps - Your trusted partner for Flutter, full-stack, and web development solutions." />
                <meta property="og:image" content="https://nocorps.org/NcLogo.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@nocorps_dev" />
                <meta name="twitter:title" content="About NoCorps - Leading Software Development Company" />
                <meta name="twitter:description" content="Discover NoCorps - Your trusted partner for Flutter, full-stack, and web development solutions." />
                <meta name="twitter:image" content="https://nocorps.org/NcLogo.png" />

                {/* Additional SEO Tags */}
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <link rel="canonical" href="https://nocorps.org/about" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            "mainEntity": {
                                "@type": "Organization",
                                "name": "NoCorps",
                                "description": "Professional software development company specializing in Flutter, Full-stack, and Web development.",
                                "url": "https://nocorps.org",
                                "logo": "https://nocorps.org/NcLogo.png",
                                "sameAs": [
                                    "https://twitter.com/nocorps_dev",
                                    "https://github.com/nocorps"
                                ]
                            }
                        }
                    `}
                </script>
            </Helmet>

            <header className={`${styles.heroSection} ${styles.scrollAnimate}`}>
                <h1>About NoCorps</h1>
                <p>Transforming Ideas into Digital Reality Since 2024</p>
            </header>

            <main>
                <section className={`${styles.missionSection} ${styles.scrollAnimate}`}>
                    <div className={styles.missionContent}>
                        {/* <div className={styles.imageWrapper}>
                            <img src={Img} alt="NoCorps Team" className={styles.teamImage} />
                        </div> */}
                        <div className={styles.missionText}>
                            <h2>Our Mission</h2>
                            <p>At NoCorps, we are passionate about crafting high-quality digital solutions that empower businesses to grow. Our expertise spans Flutter development, full-stack solutions, and innovative web applications.</p>
                        </div>
                    </div>
                </section>

                <section className={`${styles.valuesSection} ${styles.scrollAnimate}`}>
                    <h2>Our Core Values</h2>
                    <div className={styles.valuesGrid}>
                        {[
                            {
                                icon: "🎯",
                                title: "Excellence",
                                description: "Delivering exceptional quality in every project"
                            },
                            {
                                icon: "🤝",
                                title: "Collaboration",
                                description: "Working closely with clients for optimal results"
                            },
                            {
                                icon: "💡",
                                title: "Innovation",
                                description: "Embracing new technologies and creative solutions"
                            },
                            {
                                icon: "⚡",
                                title: "Efficiency",
                                description: "Optimizing processes for faster delivery"
                            }
                        ].map((value, index) => (
                            <article key={index} className={`${styles.valueCard} ${styles.scrollAnimate}`}>
                                <span className={styles.valueIcon}>{value.icon}</span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className={`${styles.expertiseSection} ${styles.scrollAnimate}`}>
                    <h2>Our Expertise</h2>
                    <div className={styles.expertiseGrid}>
                        <div className={styles.expertiseItem}>
                            <h3>🔹 Flutter Development</h3>
                            <p>Build cross-platform apps with a single codebase</p>
                        </div>
                        <div className={styles.expertiseItem}>
                            <h3>🔹 Full-Stack Development</h3>
                            <p>Backend & frontend solutions for seamless user experiences</p>
                        </div>
                        <div className={styles.expertiseItem}>
                            <h3>🔹 Web Development</h3>
                            <p>Responsive websites & web applications for businesses</p>
                        </div>
                        <div className={styles.expertiseItem}>
                            <h3>🔹 Mobile App Development</h3>
                            <p>Custom Android & iOS applications optimized for performance</p>
                        </div>
                    </div>
                </section>

                <section className={`${styles.achievementsSection} ${styles.scrollAnimate}`}>
                    <h2>Our Achievements</h2>
                    <div className={styles.achievementsGrid}>
                        {[
                            { number: "10+", label: "Projects Completed" },
                            { number: "10+", label: "Happy Clients" },
                            { number: "1+", label: "Years Experience" },
                            { number: "24/7", label: "Support" }
                        ].map((achievement, index) => (
                            <article key={index} className={`${styles.milestone} ${styles.scrollAnimate}`}>
                                <span className={styles.milestoneNumber}>{achievement.number}</span>
                                <p>{achievement.label}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className={`${styles.ctaSection} ${styles.scrollAnimate}`}>
                    <h2>Ready to Transform Your Ideas?</h2>
                    <p>Let's create something amazing together</p>
                    <Link to="/contact-form" className={styles.ctaButton}>
                        Start Your Project
                    </Link>
                </section>
            </main>
        </div>
    );
}

export default About;