import React from 'react';
import CountdownCard from "../components/CountdownCard";
import Img13 from '../assets/13.png';
import Img14 from '../assets/bonus.png';
import { Helmet } from 'react-helmet';
import styles from '../css/Products.module.css';

function Products() {
    const targetDate = "2025-03-28T00:00:00";

    const projects = [
        {
            id: 1,
            name: "AIC Coin",
            description: "AIC Coin is a revolutionary digital asset platform offering daily rewards and referral bonuses. Join our growing community and earn rewards through our innovative staking and referral program.",
            features: [
                "Daily Rewards System",
                "Referral Program",
                "Staking Opportunities",
                "Early Access Benefits",
                "Community Rewards"
            ],
            stats: {
                users: "50K+",
                rewards: "$5M+",
                transactions: "500K+"
            },
            image: Img14,
            link: "https://aiccoin.nocorps.org/register",
            type: "platform"
        },
        {
            id: 2,
            name: "ShareMedia",
            description: "A revolutionary social media platform that empowers content creators and communities. Share, connect, and grow with our advanced features and intuitive interface.",
            features: [
                "Advanced Content Creation Tools",
                "Real-time Community Engagement",
                "Multi-format Media Support",
                "Creator Analytics Dashboard",
                "Automated Content Scheduling"
            ],
            stats: {
                users: "25K+",
                posts: "250K+",
                communities: "5K+"
            },
            image: Img13,
            link: "https://play.google.com/store/apps/details?id=mskp.tamilanproject.sharemediapro.xyz",
            badges: {
                playStore: true,
                appStore: false
            },
            type: "app"
        },
        {
            id: 3,
            name: "VShare",
            description: "VShare is a dynamic video sharing social media platform that connects creators and viewers. Share, discover, and engage with video content in a vibrant community.",
            features: [
                "Video Content Creation Tools",
                "Social Sharing & Engagement",
                "Multi-Resolution Support (144p to 4K)",
                "Creator Analytics Dashboard",
                "Smart Content Discovery"
            ],
            stats: {
                users: "100K+",
                views: "5M+",
                rating: "4.6★"
            },
            image: Img13,
            link: "https://play.google.com/store/apps/details?id=vshare.mkrcreation.com",
            badges: {
                playStore: true,
                appStore: false
            },
            type: "social"
        },
        {
            id: 4,
            name: "ChatUp",
            description: "A secure and feature-rich messaging app that brings people closer. Experience real-time messaging, multimedia sharing, and group conversations with enhanced privacy features.",
            features: [
                "End-to-End Encryption",
                "Real-time Messaging",
                "Group Chat Support",
                "Media & File Sharing",
                "Voice & Video Calls"
            ],
            stats: {
                users: "10K+",
                messages: "1M+",
                rating: "4.5★"
            },
            image: Img13,
            link: "#", // This will be updated with Play Store link later
            badges: {
                playStore: true,
                appStore: false
            },
            type: "messenger"
        }
    ];

    return (
        <div className={styles.container}>
            <Helmet>
                {/* Primary Meta Tags */}
                <title>NoCorps Products - Innovative Digital Solutions</title>
                <meta name="description" content="Discover NoCorps' innovative products including AIC Coin and other upcoming releases. Join us for exclusive product launches and early access opportunities." />
                <meta name="keywords" content="NoCorps products, AIC Coin, digital solutions, software products, upcoming launches, tech innovations" />
                <meta name="author" content="NoCorps Development Team" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nocorps.org/products" />
                <meta property="og:title" content="NoCorps Products - Innovative Digital Solutions" />
                <meta property="og:description" content="Discover our innovative products and upcoming launches. Join the waitlist for early access." />
                <meta property="og:image" content="https://nocorps.org/NcLogo.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@nocorps_dev" />
                <meta name="twitter:title" content="NoCorps Products - Innovative Digital Solutions" />
                <meta name="twitter:description" content="Discover our innovative products and upcoming launches. Join the waitlist for early access." />
                <meta name="twitter:image" content="https://nocorps.org/NcLogo.png" />

                {/* Additional SEO Tags */}
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://nocorps.org/products" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "itemListElement": [
                                {
                                    "@type": "Product",
                                    "name": "AIC Coin",
                                    "description": "Revolutionary digital asset platform with daily rewards",
                                    "url": "https://aiccoin.nocorps.org/register",
                                    "image": "https://nocorps.org/images/aiccoin.png",
                                    "releaseDate": "${targetDate}",
                                    "offers": {
                                        "@type": "Offer",
                                        "availability": "PreOrder",
                                        "availabilityStarts": "${targetDate}"
                                    },
                                    "aggregateRating": {
                                        "@type": "AggregateRating",
                                        "ratingValue": "4.8",
                                        "ratingCount": "50000"
                                    }
                                },
                                {
                                    "@type": "SoftwareApplication",
                                    "name": "ShareMedia",
                                    "description": "Advanced social media platform for content creators",
                                    "operatingSystem": "Android",
                                    "applicationCategory": "SocialNetworkingApplication",
                                    "url": "https://play.google.com/store/apps/details?id=mskp.tamilanproject.sharemediapro.xyz",
                                    "aggregateRating": {
                                        "@type": "AggregateRating",
                                        "ratingValue": "4.4",
                                        "ratingCount": "25000"
                                    },
                                    "offers": {
                                        "@type": "Offer",
                                        "price": "0",
                                        "priceCurrency": "USD"
                                    }
                                },
                                {
                                    "@type": "SoftwareApplication",
                                    "name": "VShare",
                                    "description": "Social video sharing platform for creators and viewers",
                                    "operatingSystem": "Android",
                                    "applicationCategory": "SocialNetworkingApplication",
                                    "url": "https://play.google.com/store/apps/details?id=vshare.mkrcreation.com",
                                    "aggregateRating": {
                                        "@type": "AggregateRating",
                                        "ratingValue": "4.6",
                                        "ratingCount": "100000"
                                    },
                                    "offers": {
                                        "@type": "Offer",
                                        "price": "0",
                                        "priceCurrency": "USD"
                                    }
                                },
                                {
                                    "@type": "SoftwareApplication",
                                    "name": "NoChat",
                                    "description": "Secure messaging app with real-time communication features",
                                    "operatingSystem": "Android",
                                    "applicationCategory": "CommunicationApplication",
                                    "url": "#", // Will be updated with Play Store link
                                    "aggregateRating": {
                                        "@type": "AggregateRating",
                                        "ratingValue": "4.5",
                                        "ratingCount": "10000"
                                    },
                                    "offers": {
                                        "@type": "Offer",
                                        "price": "0",
                                        "priceCurrency": "USD"
                                    }
                                }
                            ],
                            "numberOfItems": 3
                        }
                    `}
                </script>
            </Helmet>

            <CountdownCard
                imageUrl={Img14}
                title={"Countdown For End of Higher Bonus"}
                alt={"AIC"}
                description={"Invite more friends and keep your rank in top position."}
                externalLink={"https://aiccoin.nocorps.org/register"}
                targetDate={targetDate}
            />

            <section className={styles.projectsSection}>
                <h2>Featured Project</h2>
                {projects.map(project => (
                    <div key={project.id} className={styles.featuredProject}>
                        <div className={styles.projectInfo}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className={styles.features}>
                                <h4>Key Features:</h4>
                                <ul>
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.stats}>
                                {project.name === "AIC Coin" ? (
                                    // AIC Coin Stats
                                    <>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.users}</span>
                                            <span className={styles.statLabel}>Active Users</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.rewards}</span>
                                            <span className={styles.statLabel}>Total Rewards</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.transactions}</span>
                                            <span className={styles.statLabel}>Transactions</span>
                                        </div>
                                    </>
                                ) : project.name === "ShareMedia" ? (
                                    // ShareMedia Stats
                                    <>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.users}</span>
                                            <span className={styles.statLabel}>Active Users</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.posts}</span>
                                            <span className={styles.statLabel}>Total Posts</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.communities}</span>
                                            <span className={styles.statLabel}>Communities</span>
                                        </div>
                                    </>
                                ) : project.name === "VShare" ? (
                                    // VShare Stats
                                    <>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.users}</span>
                                            <span className={styles.statLabel}>Active Users</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.views}</span>
                                            <span className={styles.statLabel}>Total Views</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.rating}</span>
                                            <span className={styles.statLabel}>User Rating</span>
                                        </div>
                                    </>
                                ) : project.name === "NoChat" ? (
                                    // NoChat Stats
                                    <>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.users}</span>
                                            <span className={styles.statLabel}>Active Users</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.messages}</span>
                                            <span className={styles.statLabel}>Messages Sent</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.rating}</span>
                                            <span className={styles.statLabel}>User Rating</span>
                                        </div>
                                    </>
                                ) : (
                                    // NoChat Stats
                                    <>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.users}</span>
                                            <span className={styles.statLabel}>Active Users</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.messages}</span>
                                            <span className={styles.statLabel}>Total Messages</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>{project.stats.rating}</span>
                                            <span className={styles.statLabel}>User Rating</span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className={styles.projectActions}>
                                <a href={project.link} className={styles.projectButton} target="_blank" rel="noopener noreferrer">
                                    {project.name === "AIC Coin" ? "Join Now" : "Download App"}
                                </a>
                                {project.badges && project.badges.playStore && (
                                    <div className={styles.platformBadges}>
                                        <a 
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.storeBadge}
                                        >
                                            <img 
                                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                                alt="Get it on Google Play"
                                                height="40"
                                            />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.projectImage}>
                            <img src={project.image} alt={project.name} />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Products;