import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styles from '../css/Services.module.css';
import Img from '../assets/NcLogo.png';

function Services() {
    return (
        <div className={styles.container}>
            <Helmet>
                {/* Primary Meta Tags */}
                <title>NoCorps Services - Professional Development Solutions</title>
                <meta name="description" content="Expert Flutter, Full-stack, Web, and Windows application development services. We create high-performance, scalable solutions for businesses of all sizes." />
                <meta name="keywords" content="Flutter development, full-stack development, web development, Windows apps, mobile applications, custom software solutions, NoCorps services" />
                <meta name="author" content="NoCorps Development Team" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nocorps.org/services" />
                <meta property="og:title" content="NoCorps Services - Professional Development Solutions" />
                <meta property="og:description" content="Expert development services for mobile, web, and desktop applications. Build your next project with NoCorps." />
                <meta property="og:image" content="c:\Users\Kanagaraj\Downloads\bonus.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@nocorps_dev" />
                <meta name="twitter:title" content="NoCorps Services - Professional Development Solutions" />
                <meta name="twitter:description" content="Expert development services for mobile, web, and desktop applications. Build your next project with NoCorps." />
                <meta name="twitter:image" content="c:\Users\Kanagaraj\Downloads\bonus.png" />

                {/* Additional SEO Tags */}
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://nocorps.org/services" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Software Development",
                            "provider": {
                                "@type": "Organization",
                                "name": "NoCorps",
                                "url": "https://nocorps.org"
                            },
                            "areaServed": {
                                "@type": "Country",
                                "name": "Worldwide"
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Flutter App Development",
                                            "description": "Cross-platform mobile applications with native-like performance"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Web Development",
                                            "description": "Custom websites and web applications"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Full-Stack Development",
                                            "description": "Complete frontend and backend solutions"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Windows Application Development",
                                            "description": "Custom desktop applications"
                                        }
                                    }
                                ]
                            }
                        }
                    `}
                </script>
            </Helmet>

            <header className={styles.hero}>
                <h1>Our Services</h1>
                <p>Expert software development solutions for your business needs</p>
                <img src={Img} alt="NoCorps Services" className={styles.heroImage} />
            </header>

            <main>
                <section className={styles.serviceSection}>
                    <h2>What We Offer</h2>
                    <p className={styles.introText}>
                        At NoCorps, we provide expert Flutter development, full-stack development, and web development services, 
                        creating high-performance applications for Android, iOS, Web, and Windows.
                    </p>

                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceItem}>
                            <h3>📱 Flutter App Development</h3>
                            <p>Build cross-platform mobile applications with a single codebase.</p>
                            <ul>
                                <li>✅ Faster development & reduced costs</li>
                                <li>✅ Native-like performance</li>
                                <li>✅ Scalable & maintainable apps</li>
                            </ul>
                        </div>

                        <div className={styles.serviceItem}>
                            <h3>🌐 Web Development</h3>
                            <p>Modern, responsive, and SEO-friendly websites and web applications.</p>
                            <ul>
                                <li>✅ Custom websites & web apps</li>
                                <li>✅ Interactive & user-friendly UI/UX</li>
                                <li>✅ High-performance & secure solutions</li>
                            </ul>
                        </div>

                        <div className={styles.serviceItem}>
                            <h3>💻 Full-Stack Development</h3>
                            <p>Complete frontend & backend solutions for scalable applications.</p>
                            <ul>
                                <li>✅ Backend: Node.js, Express, Firebase</li>
                                <li>✅ Frontend: React.js, Next.js, Vue.js</li>
                                <li>✅ API Development & Integrations</li>
                            </ul>
                        </div>

                        <div className={styles.serviceItem}>
                            <h3>🖥 Windows Application Development</h3>
                            <p>Custom desktop solutions for enhanced productivity.</p>
                            <ul>
                                <li>✅ Enterprise software solutions</li>
                                <li>✅ Business management tools</li>
                                <li>✅ Secure & scalable desktop apps</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.processSection}>
                    <h2>Our Development Process</h2>
                    <div className={styles.processGrid}>
                        {[
                            {
                                icon: "🔍",
                                step: "1",
                                title: "Discovery",
                                description: "Understanding your requirements and project goals"
                            },
                            {
                                icon: "📋",
                                step: "2",
                                title: "Planning",
                                description: "Creating detailed project roadmap and architecture"
                            },
                            {
                                icon: "⚙️",
                                step: "3",
                                title: "Development",
                                description: "Building your solution with clean, efficient code"
                            },
                            {
                                icon: "🔄",
                                step: "4",
                                title: "Testing",
                                description: "Ensuring quality and performance"
                            },
                            {
                                icon: "🚀",
                                step: "5",
                                title: "Deployment",
                                description: "Launching your project successfully"
                            }
                        ].map((process, index) => (
                            <div key={index} className={styles.processItem}>
                                <div className={styles.processIcon}>{process.icon}</div>
                                <div className={styles.processStep}>Step {process.step}</div>
                                <h3>{process.title}</h3>
                                <p>{process.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.techSection}>
                    <h2>Technologies We Use</h2>
                    <div className={styles.techGrid}>
                        <div className={styles.techCategory}>
                            <h3>Frontend</h3>
                            <ul>
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>Vue.js</li>
                                <li>Flutter</li>
                            </ul>
                        </div>
                        <div className={styles.techCategory}>
                            <h3>Backend</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Firebase</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className={styles.techCategory}>
                            <h3>Mobile</h3>
                            <ul>
                                <li>Flutter</li>
                                <li>React Native</li>
                                <li>iOS</li>
                                <li>Android</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.whyUsSection}>
                    <h2>Why Choose Us?</h2>
                    <div className={styles.reasonsGrid}>
                        {[
                            "👨‍💻 Experienced Developers",
                            "🎯 Custom Solutions",
                            "⚡ High-Quality Code",
                            "⏱ Timely Delivery",
                            "🛠 Post-Launch Support"
                        ].map((reason, index) => (
                            <div key={index} className={styles.reasonItem}>
                                {reason}
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.faqSection}>
                    <h2>Frequently Asked Questions</h2>
                    <div className={styles.faqGrid}>
                        {[
                            {
                                question: "How long does a typical project take?",
                                answer: "Project timelines vary based on complexity. Most projects take 2-4 months from concept to launch."
                            },
                            {
                                question: "Do you provide ongoing support?",
                                answer: "Yes, we offer comprehensive post-launch support and maintenance services."
                            },
                            {
                                question: "What is your development process?",
                                answer: "We follow an agile methodology with regular updates and client collaboration throughout the project."
                            }
                        ].map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.ctaSection}>
                    <h2>Ready to Start Your Project?</h2>
                    <p>Let's discuss how we can help bring your ideas to life.</p>
                    <div className={styles.ctaButtons}>
                        <Link to="/contact" className={styles.ctaButton}>Contact Us</Link>
                        <Link to="/portfolio" className={styles.ctaButtonOutline}>View Our Work</Link>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Services;