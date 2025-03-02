import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styles from '../css/Home.module.css';
import ImgCard from "../components/ImgCard";
import Img from '../assets/NcLogo.png';
import TextCard from "../components/TextCard";
import NormalTextCard from "../components/NormalTextCard";

function Home() {
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
                    // Optional: Unobserve after animation
                    // observerRef.current.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animated elements
        const elements = document.querySelectorAll(`
            .${styles.scrollAnimate},
            .${styles.serviceCard},
            .${styles.projectCard},
            .${styles.benefitCard},
            .${styles.techCard},
            .${styles.industryCard}
        `);

        elements.forEach(el => observerRef.current.observe(el));

        // Cleanup
        return () => {
            if (observerRef.current) {
                elements.forEach(el => observerRef.current.unobserve(el));
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className={styles.homeContainer}>
            <Helmet>
                {/* Primary Meta Tags */}
                <title>Flutter & Full-Stack Development Services | NoCorps</title>
                <meta name="description" content="Expert Flutter and full-stack development services for mobile, web, and desktop applications. Build scalable solutions with NoCorps development team." />
                <meta name="keywords" content="Flutter development, full-stack development, web development, mobile apps, Android, iOS, Windows applications, custom software, app development, NoCorps" />
                <meta name="author" content="NoCorps Development Team" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nocorps.org" />
                <meta property="og:title" content="NoCorps - Innovative Development Solutions" />
                <meta property="og:description" content="Expert developers delivering cross-platform solutions for your business needs." />
                <meta property="og:image" content="https://nocorps.org/NcLogo.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="NoCorps" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@nocorps_dev" />
                <meta name="twitter:title" content="NoCorps - Innovative Development Solutions" />
                <meta name="twitter:description" content="Expert developers delivering cross-platform solutions for your business needs." />
                <meta name="twitter:image" content="https://nocorps.org/NcLogo.png" />

                {/* Additional SEO Tags */}
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                <meta name="googlebot" content="index, follow" />
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://nocorps.org" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "NoCorps",
                            "url": "https://nocorps.org",
                            "logo": "https://nocorps.org/NcLogo.png",
                            "description": "Professional software development services specializing in Flutter, Full-stack, and Web development.",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "US"
                            },
                            "sameAs": [
                                "https://twitter.com/nocorps_dev",
                                "https://github.com/nocorps"
                            ]
                        }
                    `}
                </script>
            </Helmet>

            <header className={`${styles.heroSection} ${styles.scrollAnimate}`}>
                <h1>Expert Flutter & Full-Stack Development Services</h1>
                <p>Transform your ideas into powerful digital solutions with our professional development team</p>
                <Link to="/Contact/form" className={styles.primaryCta}>Get Started Today</Link>
            </header>

            <main>
                <section className={`${styles.servicesSection} ${styles.scrollAnimate}`}>
                    <h2>Professional Development Services</h2>
                    <div className={styles.servicesGrid}>
                        <article className={`${styles.serviceCard} ${styles.scrollAnimate} ${styles.delay1}`}>
                            <h3>Flutter Development</h3>
                            <p>Build cross-platform mobile applications with native performance using Flutter's powerful framework.</p>
                            <ul>
                                <li>Single codebase for iOS and Android</li>
                                <li>Native-like performance</li>
                                <li>Custom UI/UX design</li>
                            </ul>
                            {/* <Link to="/services/mobile-development" className={styles.learnMore}>Explore Mobile Development →</Link> */}
                        </article>

                        <article className={`${styles.serviceCard} ${styles.scrollAnimate} ${styles.delay2}`}>
                            <h3>Full-Stack Development</h3>
                            <p>End-to-end web application development with modern technologies and scalable architecture.</p>
                            <ul>
                                <li>Robust backend systems</li>
                                <li>Interactive frontend solutions</li>
                                <li>API development & integration</li>
                            </ul>
                            {/* <Link to="/services/full-stack-development" className={styles.learnMore}>Discover Full-Stack Solutions →</Link> */}
                        </article>

                        <article className={`${styles.serviceCard} ${styles.scrollAnimate} ${styles.delay3}`}>
                            <h3>Web Development</h3>
                            <p>Create responsive and dynamic web applications optimized for performance and user experience.</p>
                            <ul>
                                <li>Responsive design</li>
                                <li>SEO optimization</li>
                                <li>Performance-driven development</li>
                            </ul>
                            {/* <Link to="/services/web-development" className={styles.learnMore}>View Web Services →</Link> */}
                        </article>
                    </div>
                </section>

                <section className={styles.whyChooseUs}>
                    <h2>Why Choose NoCorps?</h2>
                    <div className={styles.benefitsGrid}>
                        <article className={styles.benefitCard}>
                            <h3>Technical Excellence</h3>
                            <p>Our team brings years of expertise in Flutter, React, Node.js, and modern development frameworks.</p>
                            <ul>
                                <li>Certified developers</li>
                                <li>Best practices implementation</li>
                                <li>Performance optimization</li>
                            </ul>
                        </article>

                        <article className={styles.benefitCard}>
                            <h3>Proven Track Record</h3>
                            <p>Successfully delivered 50+ projects across various industries with 95% client satisfaction.</p>
                            <ul>
                                <li>On-time delivery</li>
                                <li>Quality assurance</li>
                                <li>Client testimonials</li>
                            </ul>
                        </article>

                        <article className={styles.benefitCard}>
                            <h3>Comprehensive Support</h3>
                            <p>End-to-end development support from planning to post-launch maintenance.</p>
                            <ul>
                                <li>24/7 technical support</li>
                                <li>Regular updates</li>
                                <li>Maintenance services</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section className={`${styles.featuredProjects} ${styles.scrollAnimate}`}>
                    <h2>Featured Projects</h2>
                    <div className={styles.projectsGrid}>
                        <article className={`${styles.projectCard} ${styles.scrollAnimate} ${styles.animateLeft}`}>
                            <h3>AIC Coin Platform</h3>
                            <p>A comprehensive cryptocurrency platform with advanced trading features and secure wallet management.</p>
                            <ul>
                                <li>Secure transactions</li>
                                <li>Real-time market data</li>
                                <li>Multi-currency support</li>
                            </ul>
                            {/* <Link to="/products/aic-coin" className={styles.projectLink}>Learn More About AIC Coin →</Link> */}
                        </article>

                        <article className={`${styles.projectCard} ${styles.scrollAnimate} ${styles.animateRight}`}>
                            <h3>ShareMedia Solution</h3>
                            <p>Advanced social media management platform for content creators and businesses.</p>
                            <ul>
                                <li>Content scheduling</li>
                                <li>Analytics dashboard</li>
                                <li>Multi-platform support</li>
                            </ul>
                            {/* <Link to="/products/share-media" className={styles.projectLink}>Explore ShareMedia →</Link> */}
                        </article>
                    </div>
                </section>

                <section className={styles.developmentProcess}>
                    <h2>Our Development Process</h2>
                    <div className={styles.processSteps}>
                        <article className={styles.processStep}>
                            <span className={styles.stepNumber}>1</span>
                            <h3>Requirements Analysis</h3>
                            <p>In-depth understanding of your project needs and business goals</p>
                        </article>

                        <article className={styles.processStep}>
                            <span className={styles.stepNumber}>2</span>
                            <h3>Planning & Design</h3>
                            <p>Detailed project roadmap and user-centric design planning</p>
                        </article>

                        <article className={styles.processStep}>
                            <span className={styles.stepNumber}>3</span>
                            <h3>Development</h3>
                            <p>Agile development with regular updates and feedback integration</p>
                        </article>

                        <article className={styles.processStep}>
                            <span className={styles.stepNumber}>4</span>
                            <h3>Testing & Deployment</h3>
                            <p>Comprehensive testing and smooth deployment process</p>
                        </article>
                    </div>
                </section>

                <section className={styles.testimonials}>
                    <h2>Client Success Stories</h2>
                    <div className={styles.testimonialsGrid}>
                        <blockquote className={styles.testimonialCard}>
                            <p>"NoCorps delivered our Flutter app on time and exceeded our expectations in terms of quality and performance."</p>
                            <footer>
                                <cite>- John Doe, CEO at TechStart</cite>
                            </footer>
                        </blockquote>

                        <blockquote className={styles.testimonialCard}>
                            <p>"Their full-stack development expertise helped us launch our platform successfully with zero downtime."</p>
                            <footer>
                                <cite>- Jane Smith, CTO at DataFlow</cite>
                            </footer>
                        </blockquote>
                    </div>
                </section>

                <section className={styles.ctaSection}>
                    <h2>Start Your Development Project</h2>
                    <p>Let's collaborate to build your next digital solution with cutting-edge technology and expert execution.</p>
                    <div className={styles.ctaFeatures}>
                        <ul>
                            <li>✓ Free Initial Consultation</li>
                            <li>✓ Custom Development Strategy</li>
                            <li>✓ Flexible Engagement Models</li>
                            <li>✓ Dedicated Support Team</li>
                        </ul>
                    </div>
                    <Link to="/Contact/form" className={styles.ctaButton}>Schedule Free Consultation</Link>
                </section>

                <section className={styles.faq}>
                    <h2>Frequently Asked Questions</h2>
                    <div className={styles.faqGrid}>
                        <article className={styles.faqItem}>
                            <h3>How long does it take to develop a Flutter app?</h3>
                            <p>Development time varies based on complexity, but typical projects range from 8-12 weeks for MVP launch.</p>
                        </article>

                        <article className={styles.faqItem}>
                            <h3>Do you provide ongoing maintenance?</h3>
                            <p>Yes, we offer flexible maintenance packages to ensure your application stays up-to-date and performs optimally.</p>
                        </article>

                        <article className={styles.faqItem}>
                            <h3>What's your development methodology?</h3>
                            <p>We follow Agile methodology with two-week sprints and regular client updates throughout the development process.</p>
                        </article>
                    </div>
                </section>

                <section className={styles.technologies}>
                    <h2>Technologies We Excel In</h2>
                    <div className={styles.techGrid}>
                        <article className={styles.techCard}>
                            <h3>Mobile Development</h3>
                            <ul>
                                <li>Flutter & Dart</li>
                                <li>React Native</li>
                                <li>Native Android (Kotlin)</li>
                                <li>Native iOS (Swift)</li>
                            </ul>
                        </article>

                        <article className={styles.techCard}>
                            <h3>Frontend Technologies</h3>
                            <ul>
                                <li>React.js & Next.js</li>
                                <li>Vue.js & Nuxt.js</li>
                                <li>Angular</li>
                                <li>TypeScript</li>
                            </ul>
                        </article>

                        <article className={styles.techCard}>
                            <h3>Backend Technologies</h3>
                            <ul>
                                <li>Node.js & Express</li>
                                <li>Python & Django</li>
                                <li>Java Spring Boot</li>
                                <li>PHP Laravel</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section className={styles.industries}>
                    <h2>Industries We Serve</h2>
                    <div className={styles.industryGrid}>
                        <article className={styles.industryCard}>
                            <h3>Fintech</h3>
                            <p>Secure payment solutions and financial management applications</p>
                            {/* <Link to="/industries/fintech" className={styles.industryLink}>
                                Explore Fintech Solutions →
                            </Link> */}
                        </article>

                        <article className={styles.industryCard}>
                            <h3>Healthcare</h3>
                            <p>HIPAA-compliant medical software and healthcare management systems</p>
                            {/* <Link to="/industries/healthcare" className={styles.industryLink}>
                                View Healthcare Solutions →
                            </Link> */}
                        </article>

                        <article className={styles.industryCard}>
                            <h3>E-commerce</h3>
                            <p>Scalable online shopping platforms and inventory management systems</p>
                            {/* <Link to="/industries/ecommerce" className={styles.industryLink}>
                                Discover E-commerce Solutions →
                            </Link> */}
                        </article>
                    </div>
                </section>
            </main>

            <aside className={styles.contactInfo}>
                <h2>Ready to Start Your Project?</h2>
                <p>Contact us today for a free consultation and project estimate.</p>
                <address>
                    <p>Email: <a href="mailto:kanagaraj.developer@gmail.com">kanagaraj.developer@gmail.com</a></p>
                    <p>Follow us on: 
                        <a href="https://twitter.com/nocorps_dev" className={styles.socialLink}>Twitter</a> | 
                        <a href="https://github.com/nocorps" className={styles.socialLink}>GitHub</a>
                    </p>
                </address>
            </aside>
        </div>
    );
}

export default Home;