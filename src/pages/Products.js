import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
    FaFilePdf, 
    FaDownload, 
    FaCreditCard, 
    FaExternalLinkAlt, 
    FaCoins, 
    FaShareAlt,
    FaArrowRight
} from 'react-icons/fa';

import styles from '../css/Products.module.css';

function Products() {
    const { productId } = useParams(); // Get product ID from URL
    const navigate = useNavigate();    // For navigation
    const observerRef = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    // Intersection Observer for scroll animations
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
    }, [selectedProduct]);

    // Company products data
    const products = [
        {
            id: 'pdf-tools',
            name: 'PDF Tools',
            description: 'Professional PDF editing and management tools for all document needs',
            icon: <FaFilePdf />,
            url: 'https://pdftools.nocorps.org/',
            badge: 'Featured'
        },
        // {
        //     id: 'aic-coin',
        //     name: 'AIC Coin Platform',
        //     description: 'Cryptocurrency platform with trading features and secure wallet management',
        //     icon: <FaCoins />,
        //     url: 'https://play.google.com/store/apps/details?id=com.nocorps.aiccoin',
        //     badge: 'Popular'
        // },
        // {
        //     id: 'wavora',
        //     name: 'Wavora Solution',
        //     description: 'Advanced social media management platform for content creators and businesses',
        //     icon: <FaShareAlt />,
        //     url: 'https://play.google.com/store/apps/details?id=mskp.tamilanproject.sharemediapro.xyz',
        //     badge: null
        // }
    ];

    const handleProductSelect = (productId) => {
        // Update URL instead of just setting state
        navigate(`/products/${productId}`);
        // Scroll to top
        window.scrollTo(0, 0);
    };
    
    const handleBackButton = () => {
        navigate('/products');
    };

    const renderProductsList = () => (
        <>
            <header className={`${styles.productHero} ${styles.scrollAnimate}`}>
                <div className={styles.heroContent}>
                    <span className={styles.badge}>NoCorps Products</span>
                    <h1>Our Software Solutions</h1>
                    <p className={styles.heroDescription}>
                        Discover our range of professional tools and applications designed to enhance productivity and streamline your workflow
                    </p>
                </div>
            </header>

            <section className={`${styles.productsListSection} ${styles.scrollAnimate}`}>
                <h2>Featured Products</h2>
                <div className={styles.productsGrid}>
                    {products.map(product => (
                        <div 
                            key={product.id} 
                            className={`${styles.productListCard} ${styles.scrollAnimate}`} 
                            onClick={() => handleProductSelect(product.id)}
                        >
                            {product.badge && 
                                <span className={`${styles.productBadge} ${styles[product.badge.toLowerCase()]}`}>
                                    {product.badge}
                                </span>
                            }
                            <div className={styles.productIcon}>{product.icon}</div>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <button className={styles.viewDetailsButton}>
                                View Details <FaArrowRight />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );

    const renderPdfToolsDetails = () => (
        <>
            <header className={`${styles.productHero} ${styles.scrollAnimate}`}>
                <div className={styles.heroContentWrapper}>
                    <div className={styles.heroContent}>
                        <button 
                            className={styles.backButton} 
                            onClick={handleBackButton}
                        >
                            <span className={styles.backArrow}>←</span> Back to Products
                        </button>
                        <span className={styles.badge}>Featured Product</span>
                        <h1>PDF Tools</h1>
                        <p className={styles.heroDescription}>
                            Powerful document management solutions to streamline your workflow
                        </p>
                        <div className={styles.heroCta}>
                            <a href="https://pdftools.nocorps.org/" 
                               className={styles.downloadButton}
                               target="_blank"
                               rel="noopener noreferrer">
                                <FaFilePdf className={styles.buttonIcon} />
                                <span>Try Free Tools</span>
                            </a>
                            <Link to="/contact-form" className={styles.contactButton}>
                                <FaExternalLinkAlt className={styles.buttonIcon} />
                                <span>Get Support</span>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroImageContainer}>
                        {/* <div className={styles.heroImage}></div> */}
                    </div>
                </div>
            </header>

            <main className={styles.mainContent}>
                <section className={`${styles.featuresSection} ${styles.scrollAnimate}`}>
                    <div className={styles.sectionHeader}>
                        <h2>Key Features</h2>
                        <div className={styles.sectionDivider}></div>
                    </div>
                    <div className={styles.featuresGrid}>
                        <article className={`${styles.featureCard} ${styles.scrollAnimate} ${styles.delay1}`}>
                            <div className={styles.featureIconWrapper}>
                                <div className={styles.featureIcon}><FaFilePdf /></div>
                            </div>
                            <h3>PDF Editing</h3>
                            <ul>
                                <li>Text editing and annotation</li>
                                <li>Add or remove pages</li>
                                <li>Form filling and creation</li>
                                <li>Image insertion and editing</li>
                            </ul>
                        </article>

                        <article className={`${styles.featureCard} ${styles.scrollAnimate} ${styles.delay2}`}>
                            <div className={styles.featureIconWrapper}>
                                <div className={styles.featureIcon}><FaDownload /></div>
                            </div>
                            <h3>PDF Conversion</h3>
                            <ul>
                                <li>Convert to/from Word, Excel, PowerPoint</li>
                                <li>Convert to/from images (PNG, JPG)</li>
                                <li>HTML to PDF conversion</li>
                                <li>Batch conversion support</li>
                            </ul>
                        </article>

                        <article className={`${styles.featureCard} ${styles.scrollAnimate} ${styles.delay3}`}>
                            <div className={styles.featureIconWrapper}>
                                <div className={styles.featureIcon}><FaFilePdf /></div>
                            </div>
                            <h3>PDF Management</h3>
                            <ul>
                                <li>Merge multiple PDFs</li>
                                <li>Split large documents</li>
                                <li>Compress file size</li>
                                <li>Password protection</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* <section className={`${styles.pricingSection} ${styles.scrollAnimate}`}>
                    <div className={styles.sectionHeader}>
                        <h2>Plans & Pricing</h2>
                        <div className={styles.sectionDivider}></div>
                    </div>
                    <div className={styles.pricingGrid}>
                        <div className={`${styles.pricingCard} ${styles.scrollAnimate} ${styles.delay1}`}>
                            <h3>Free</h3>
                            <div className={styles.pricingAmount}>$0</div>
                            <p className={styles.pricingPeriod}>Forever</p>
                            <ul className={styles.pricingFeatures}>
                                <li>Basic PDF viewing</li>
                                <li>Limited conversions (2 per day)</li>
                                <li>Standard file size limit (10MB)</li>
                                <li>Web access only</li>
                            </ul>
                            <a 
                                href="https://pdftools.nocorps.org/" 
                                className={`${styles.pricingButton} ${styles.freeButton}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Start Free
                            </a>
                        </div>

                        <div className={`${styles.pricingCard} ${styles.popularPricing} ${styles.scrollAnimate} ${styles.delay2}`}>
                            <div className={styles.popularBadge}>Most Popular</div>
                            <h3>Premium</h3>
                            <div className={styles.pricingAmount}>$9.99</div>
                            <p className={styles.pricingPeriod}>per month</p>
                            <ul className={styles.pricingFeatures}>
                                <li>Advanced editing capabilities</li>
                                <li>Unlimited conversions</li>
                                <li>50MB file size limit</li>
                                <li>Priority support</li>
                                <li>No watermarks</li>
                            </ul>
                            <button 
                                onClick={() => window.open('https://pdftools.nocorps.org/premium', '_blank')}
                                className={styles.pricingButton}
                            >
                                <FaCreditCard className={styles.buttonIcon} />
                                <span>Subscribe Now</span>
                            </button>
                        </div>

                        <div className={`${styles.pricingCard} ${styles.scrollAnimate} ${styles.delay3}`}>
                            <h3>Enterprise</h3>
                            <div className={styles.pricingAmount}>$199.99</div>
                            <p className={styles.pricingPeriod}>per year</p>
                            <ul className={styles.pricingFeatures}>
                                <li>All Premium features</li>
                                <li>Bulk operations</li>
                                <li>100MB file size limit</li>
                                <li>API access</li>
                                <li>Dedicated support</li>
                                <li>Custom branding options</li>
                            </ul>
                            <Link to="/contact-form" className={styles.pricingButtonOutline}>
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </section> */}

                <section className={`${styles.useCasesSection} ${styles.scrollAnimate}`}>
                    <div className={styles.sectionHeader}>
                        <h2>Use Cases</h2>
                        <div className={styles.sectionDivider}></div>
                    </div>
                    <div className={styles.useCasesGrid}>
                        <div className={`${styles.useCaseCard} ${styles.scrollAnimate} ${styles.delay1}`}>
                            <div className={styles.useCaseIcon}>
                                <FaFilePdf />
                            </div>
                            <h3>Business & Legal</h3>
                            <p>Create, edit, and manage contracts, agreements, and legal documents with advanced security features.</p>
                        </div>
                        <div className={`${styles.useCaseCard} ${styles.scrollAnimate} ${styles.delay2}`}>
                            <div className={styles.useCaseIcon}>
                                <FaFilePdf />
                            </div>
                            <h3>Education</h3>
                            <p>Generate student reports, create educational materials, and convert lecture notes to shareable formats.</p>
                        </div>
                        <div className={`${styles.useCaseCard} ${styles.scrollAnimate} ${styles.delay3}`}>
                            <div className={styles.useCaseIcon}>
                                <FaFilePdf />
                            </div>
                            <h3>Personal Use</h3>
                            <p>Manage bills, receipts, and personal documents with easy organization and storage solutions.</p>
                        </div>
                    </div>
                </section>

                {/* <section className={`${styles.ctaSection} ${styles.scrollAnimate}`}>
                    <h2>Ready to Transform Your Document Workflow?</h2>
                    <p>Get started today with our powerful PDF Tools</p>
                    <a 
                        href="https://pdftools.nocorps.org/" 
                        className={styles.ctaButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Try PDF Tools Now</span>
                        <FaArrowRight className={styles.ctaArrow} />
                    </a>
                </section> */}
            </main>
        </>
    );

    // Render AIC Coin Platform details
    // const renderAicCoinDetails = () => (
    //     <>
    //         <header className={`${styles.productHero} ${styles.scrollAnimate}`}>
    //             <div className={styles.heroContent}>
    //                 <button 
    //                     className={styles.backButton} 
    //                     onClick={() => setSelectedProduct(null)}
    //                 >
    //                     ← Back to Products
    //                 </button>
    //                 <span className={styles.badge}>Popular Product</span>
    //                 <h1>AIC Coin Platform</h1>
    //                 <p className={styles.heroDescription}>
    //                     Experience secure cryptocurrency trading and wallet management with our state-of-the-art platform
    //                 </p>
    //                 <div className={styles.heroCta}>
    //                     <a href="https://play.google.com/store/apps/details?id=com.nocorps.aiccoin" 
    //                        className={styles.downloadButton}
    //                        target="_blank"
    //                        rel="noopener noreferrer">
    //                         <FaCoins className={styles.buttonIcon} />
    //                         Download Now
    //                     </a>
    //                     <Link to="/contact-form" className={styles.contactButton}>
    //                         <FaExternalLinkAlt className={styles.buttonIcon} />
    //                         Get Support
    //                     </Link>
    //                 </div>
    //             </div>
    //         </header>

    //         <main className={styles.mainContent}>
    //             <section className={`${styles.featuresSection} ${styles.scrollAnimate}`}>
    //                 <h2>Key Features</h2>
    //                 <div className={styles.featuresGrid}>
    //                     <article className={`${styles.featureCard} ${styles.scrollAnimate}`}>
    //                         <h3>Secure Trading</h3>
    //                         <ul>
    //                             <li>Advanced encryption protocols</li>
    //                             <li>Multi-factor authentication</li>
    //                             <li>Secure wallet storage</li>
    //                             <li>Real-time transaction monitoring</li>
    //                         </ul>
    //                     </article>

    //                     <article className={`${styles.featureCard} ${styles.scrollAnimate}`}>
    //                         <h3>Market Analysis</h3>
    //                         <ul>
    //                             <li>Real-time market data</li>
    //                             <li>Customizable price alerts</li>
    //                             <li>Advanced trading charts</li>
    //                             <li>Technical indicators</li>
    //                         </ul>
    //                     </article>

    //                     <article className={`${styles.featureCard} ${styles.scrollAnimate}`}>
    //                         <h3>Wallet Management</h3>
    //                         <ul>
    //                             <li>Multi-currency support</li>
    //                             <li>Detailed transaction history</li>
    //                             <li>Portfolio tracking & analytics</li>
    //                             <li>Instant transfers</li>
    //                         </ul>
    //                     </article>
    //                 </div>
    //             </section>

    //             <section className={`${styles.ctaSection} ${styles.scrollAnimate}`}>
    //                 <h2>Experience the Future of Cryptocurrency</h2>
    //                 <p>Download AIC Coin Platform today and start trading securely</p>
    //                 <a 
    //                     href="https://play.google.com/store/apps/details?id=com.nocorps.aiccoin" 
    //                     className={styles.ctaButton}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                 >
    //                     Get AIC Coin Now
    //                 </a>
    //             </section>
    //         </main>
    //     </>
    // );

    // Render Wavora Solution details
    // const renderWavoraDetails = () => (
    //     <>
    //         <header className={`${styles.productHero} ${styles.scrollAnimate}`}>
    //             <div className={styles.heroContent}>
    //                 <button 
    //                     className={styles.backButton} 
    //                     onClick={() => setSelectedProduct(null)}
    //                 >
    //                     ← Back to Products
    //                 </button>
    //                 <span className={styles.badge}>Social Media</span>
    //                 <h1>Wavora Solution</h1>
    //                 <p className={styles.heroDescription}>
    //                     Advanced social media management platform for content creators and businesses
    //                 </p>
    //                 <div className={styles.heroCta}>
    //                     <a href="https://play.google.com/store/apps/details?id=mskp.tamilanproject.sharemediapro.xyz" 
    //                        className={styles.downloadButton}
    //                        target="_blank"
    //                        rel="noopener noreferrer">
    //                         <FaShareAlt className={styles.buttonIcon} />
    //                         Download App
    //                     </a>
    //                     <Link to="/contact-form" className={styles.contactButton}>
    //                         <FaExternalLinkAlt className={styles.buttonIcon} />
    //                         Contact Us
    //                     </Link>
    //                 </div>
    //             </div>
    //         </header>

    //         <main className={styles.mainContent}>
    //             <section className={`${styles.featuresSection} ${styles.scrollAnimate}`}>
    //                 <h2>Key Features</h2>
    //                 <div className={styles.featuresGrid}>
    //                     <article className={`${styles.featureCard} ${styles.scrollAnimate}`}>
    //                         <h3>Content Management</h3>
    //                         <ul>
    //                             <li>Content scheduling</li>
    //                             <li>Multi-platform posting</li>
    //                             <li>Media library organization</li>
    //                             <li>Template management</li>
    //                         </ul>
    //                     </article>

    //                     <article className={`${styles.featureCard} ${styles.scrollAnimate}`}>
    //                         <h3>Analytics Dashboard</h3>
    //                         <ul>
    //                             <li>Engagement metrics</li>
    //                             <li>Audience insights</li>
    //                             <li>Performance reports</li>
    //                             <li>Growth tracking</li>
    //                         </ul>
    //                     </article>

    //                     <article className={`${styles.featureCard} ${styles.scrollAnimate}`}>
    //                         <h3>Community Building</h3>
    //                         <ul>
    //                             <li>Audience segmentation</li>
    //                             <li>Automated responses</li>
    //                             <li>Comment management</li>
    //                             <li>Lead generation tools</li>
    //                         </ul>
    //                     </article>
    //                 </div>
    //             </section>

    //             <section className={`${styles.ctaSection} ${styles.scrollAnimate}`}>
    //                 <h2>Power Your Social Media Strategy</h2>
    //                 <p>Download Wavora and take your social media presence to the next level</p>
    //                 <a 
    //                     href="https://play.google.com/store/apps/details?id=mskp.tamilanproject.sharemediapro.xyz" 
    //                     className={styles.ctaButton}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                 >
    //                     Download Wavora
    //                 </a>
    //             </section>
    //         </main>
    //     </>
    // );

    // Render content based on URL parameter
    const renderProductContent = () => {
        if (!productId) {
            return renderProductsList();
        }
        
        switch (productId) {
            case 'pdf-tools':
                return renderPdfToolsDetails();
            // case 'aic-coin':
            //     return renderAicCoinDetails();
            // case 'wavora':
            //     return renderWavoraDetails();
            default:
                return renderProductsList();
        }
    };

    return (
        <div className={styles.productContainer}>
            <Helmet>
                <title>{selectedProduct ? `${products.find(p => p.id === selectedProduct)?.name} | NoCorps` : 'NoCorps Products - Software Solutions'}</title>
                <meta name="description" content="Professional software solutions from NoCorps, including PDF tools, cryptocurrency platforms, and social media management tools." />
                <meta name="keywords" content="PDF editor, cryptocurrency, social media management, software solutions, NoCorps products" />
                
                <meta property="og:type" content="website" />
                <meta property="og:title" content="NoCorps Products - Software Solutions" />
                <meta property="og:description" content="Discover our range of professional software products." />
                <meta property="og:image" content="https://nocorps.org/NcLogo.png" />
            </Helmet>

            {renderProductContent()}
        </div>
    );
}

export default Products;