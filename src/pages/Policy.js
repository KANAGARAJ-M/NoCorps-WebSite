import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/PolicyButtons.css";
import { Helmet } from 'react-helmet';

function Policy() {
    const navigate = useNavigate();

    const policyGroups = [
        {
            name: "NoCorps Website",
            policies: [
                { title: "Privacy Policy", path: "/web/NoCorps/privacy-policy" },
                { title: "Terms & Conditions", path: "/web/NoCorps/t&c" },
                { title: "Cookie Policy", path: "/web/NoCorps/cookie-policy" }
            ]
        },
        {
            name: "AIC Coin",
            policies: [
                { title: "Privacy Policy", path: "/android/app/AICCoin/Privacy-Policy" },
                { title: "Terms & Conditions", path: "/android/app/AICCoin/Terms-and-Conditions" }
            ]
        },
        {
            name: "Wavora",
            policies: [
                { title: "Privacy Policy", path: "/android/app/Wavora/Privacy-Policy" },
                { title: "Terms & Conditions", path: "/android/app/Wavora/Terms-and-Condition" },
                { title: "Child Safety Standards", path: "/android/app/Wavora/Child-Safety-Standards-policy" }
            ]
        },
        {
            name: "Meme Media",
            policies: [
                { title: "Privacy Policy", path: "/android/app/Meme-Media/Privacy-Policy" },
                { title: "Terms & Conditions", path: "/android/app/Meme-Media/Terms-and-Condition" }
            ]
        },
        {
            name: "DuDe App Find you Friends",
            policies: [
                { title: "Privacy Policy", path: "/android/app/Dude/Privacy-Policy" },
                { title: "Terms & Conditions", path: "/android/app/Dude/Terms-and-Condition" }
            ]
        },
        {
            name: "ChatUp",
            policies: [
                { title: "Privacy Policy", path: "/android/app/Chat-Up/Privacy-Policy" },
                { title: "Terms & Conditions", path: "/android/app/Chat-Up/Terms-and-Condition" }
            ]
        }
    ];

    return (
        <div className="policy-page">
            <Helmet>
                {/* Primary Meta Tags */}
                <title>Legal Policies - NoCorps & Applications</title>
                <meta name="description" content="Access legal documents, privacy policies, terms & conditions, and cookie policies for NoCorps website and applications including AIC Coin, ShareMedia, Meme Media, and ChatUp." />
                <meta name="keywords" content="NoCorps policies, privacy policy, terms and conditions, cookie policy, AIC Coin legal, ShareMedia policies, Meme Media terms, ChatUp privacy" />
                <meta name="author" content="NoCorps Development Team" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nocorps.org/policies" />
                <meta property="og:title" content="Legal Policies - NoCorps & Applications" />
                <meta property="og:description" content="Access legal documents and policies for NoCorps and its applications." />
                <meta property="og:image" content="https://nocorps.org/NcLogo.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@nocorps_dev" />
                <meta name="twitter:title" content="Legal Policies - NoCorps & Applications" />
                <meta name="twitter:description" content="Access legal documents and policies for NoCorps and its applications." />
                <meta name="twitter:image" content="https://nocorps.org/NcLogo.png" />

                {/* Additional SEO Tags */}
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <link rel="canonical" href="https://nocorps.org/policies" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "NoCorps Legal Policies",
                            "description": "Legal documents and policies for NoCorps and its applications",
                            "publisher": {
                                "@type": "Organization",
                                "name": "NoCorps",
                                "url": "https://nocorps.org"
                            },
                            "mainEntity": {
                                "@type": "ItemList",
                                "itemListElement": [
                                    {
                                        "@type": "Thing",
                                        "name": "NoCorps Website Policies",
                                        "url": "https://nocorps.org/web/NoCorps/"
                                    },
                                    {
                                        "@type": "Thing",
                                        "name": "AIC Coin Policies",
                                        "url": "https://nocorps.org/android/app/AICCoin/"
                                    },
                                    {
                                        "@type": "Thing",
                                        "name": "ShareMedia Policies",
                                        "url": "https://nocorps.org/android/app/Share-Media/"
                                    }
                                ]
                            }
                        }
                    `}
                </script>
            </Helmet>

            <div className="policy-container">
                <h1 className="policy-main-title">Legal Policies & Documents</h1>
                
                <div className="policy-groups">
                    {policyGroups.map((group, index) => (
                        <div key={index} className="policy-group">
                            <h2 className="policy-group-title">{group.name}</h2>
                            <div className="button-group">
                                {group.policies.map((policy, pIndex) => (
                                    <button
                                        key={pIndex}
                                        onClick={() => navigate(policy.path)}
                                        className="policy-btn"
                                    >
                                        {policy.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Policy;