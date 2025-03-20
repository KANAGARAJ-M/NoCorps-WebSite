import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createClient } from '@supabase/supabase-js';
import { Helmet } from 'react-helmet';
import styles from './Contact.module.css';

// Initialize Supabase client with error handling
const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL || 'https://rbdztvpllskbzqxmmzpc.supabase.co',
    process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiZHp0dnBsbHNrYnpxeG1tenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MjY2NzksImV4cCI6MjA1NjUwMjY3OX0.XpmlVRQACGUnvkfSA_Kb2W96f7yFMSVhqX2mAiI2tG0',
    {
        auth: { 
            persistSession: false,
            autoRefreshToken: false
        },
        headers: {
            'Content-Type': 'application/json',
        }
    }
);

// Update the schema to match database fields
const schema = yup.object({
    name: yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
    email: yup.string()
        .email('Please enter a valid email')
        .required('Email is required'),
    appName: yup.string()
        .required('App name is required')
        .min(3, 'App name must be at least 3 characters'),
    reason: yup.string()
        .required('Reason is required')
        .min(50, 'Reason must be at least 50 characters')
        .max(1000, 'Reason must not exceed 1000 characters')
}).required();

const RetryButton = ({ onClick }) => (
    <button 
        onClick={onClick}
        className={styles.retryButton}
        type="button"
    >
        Try Again
    </button>
);

const RemoveAccountForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [retryCount, setRetryCount] = useState(0);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur' // Validate on blur for better UX
    });

    const handleRetry = () => {
        setRetryCount(prev => prev + 1);
        setSubmitStatus({ type: '', message: '' });
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            // Validate environment variables
            if (!process.env.REACT_APP_SUPABASE_URL || !process.env.REACT_APP_SUPABASE_ANON_KEY) {
                throw new Error('Missing Supabase configuration');
            }

            const { error } = await supabase
                .from('removeaccountform')
                .insert([{
                    name: data.name.trim(),
                    email: data.email.toLowerCase().trim(),
                    appname: data.appName.trim(),
                    reason: data.reason.trim(),
                    status: 'Open',
                    created_at: new Date().toISOString()
                }]);

            if (error) {
                console.error('Supabase error:', error);
                throw new Error(error.message);
            }

            setSubmitStatus({
                type: 'success',
                message: 'Your account removal request has been submitted successfully. We will process it within 24-48 hours.'
            });
            reset();
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (error) {
            console.error('Form submission error details:', {
                message: error.message,
                stack: error.stack
            });
            
            let errorMessage = 'An error occurred while submitting your request.';
            if (error.message === 'Failed to fetch') {
                errorMessage = 'Network error. Please check your connection and try again.';
            } else if (error.message === 'Server configuration error') {
                errorMessage = 'Server configuration error. Please contact support.';
            }
            
            setSubmitStatus({
                type: 'error',
                message: errorMessage,
                showRetry: true
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.contactContainer}>
            <Helmet>
                {/* Basic Meta Tags */}
                <title>Account Removal Request | NoCorps</title>
                <meta name="description" content="Submit a request to remove your account from NoCorps apps and services. Simple, secure process for account deletion." />
                <meta name="keywords" content="account removal, delete account, NoCorps account, privacy, data deletion" />
                <meta name="author" content="NoCorps" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />

                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nocorps.org/remove-account" />
                <meta property="og:title" content="Account Removal Request | NoCorps" />
                <meta property="og:description" content="Submit a request to remove your account from NoCorps apps and services. Simple, secure process for account deletion." />
                <meta property="og:image" content="https://nocorps.org/images/account-removal.jpg" />
                <meta property="og:site_name" content="NoCorps" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@nocorps_dev" />
                <meta name="twitter:title" content="Account Removal Request | NoCorps" />
                <meta name="twitter:description" content="Easy and secure way to request account removal from NoCorps services." />
                <meta name="twitter:image" content="https://nocorps.org/images/account-removal.jpg" />

                {/* Additional Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="format-detection" content="telephone=no" />
                <link rel="canonical" href="https://nocorps.org/remove-account" />

                {/* Schema.org Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Account Removal Request",
                        "description": "Submit a request to remove your account from NoCorps apps and services.",
                        "publisher": {
                            "@type": "Organization",
                            "name": "NoCorps",
                            "logo": "https://nocorps.org/images/logo.png"
                        },
                        "mainEntity": {
                            "@type": "WebForm",
                            "name": "Account Removal Form",
                            "description": "Form to request account deletion from NoCorps services"
                        }
                    })}
                </script>
            </Helmet>

            <div className={styles.formWrapper}>
                <div className={styles.contactInfo}>
                    <h2>Account Removal Form</h2>
                    <p>Request to remove or delete your account from our Apps or Games</p>
                    <div className={styles.contactDetails}>
                        <div className={styles.contactItem}>
                            <p>Email: kanagaraj.developer@gmail.com</p>
                            <p>Follow us on social media</p>
                        </div>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <h1>Remove your Account</h1>
                    <p className={styles.subtitle}>
                        Please provide your details below to request account removal.
                    </p>

                    {submitStatus.message && (
                        <div className={`${styles.alert} ${styles[submitStatus.type]}`}>
                            {submitStatus.message}
                            {submitStatus.showRetry && (
                                <RetryButton onClick={handleRetry} />
                            )}
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                {...register('name')}
                                className={errors.name ? styles.error : ''}
                                placeholder="Enter your full name"
                            />
                            {errors.name && (
                                <span className={styles.errorMessage}>{errors.name.message}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                {...register('email')}
                                className={errors.email ? styles.error : ''}
                                placeholder="Enter your email address"
                            />
                            {errors.email && (
                                <span className={styles.errorMessage}>{errors.email.message}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="appName">App Name</label>
                            <input
                                type="text"
                                id="appName"
                                {...register('appName')}
                                className={errors.appName ? styles.error : ''}
                                placeholder="Enter NoCorps app name"
                            />
                            {errors.appName && (
                                <span className={styles.errorMessage}>{errors.appName.message}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="reason">Reason for Removal</label>
                            <textarea
                                id="reason"
                                rows="5"
                                {...register('reason')}
                                className={errors.reason ? styles.error : ''}
                            />
                            {errors.reason && (
                                <span className={styles.errorMessage}>{errors.reason.message}</span>
                            )}
                        </div>

                        <button 
                            type="submit" 
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span className={styles.loadingSpinner}>
                                    <span className={styles.spinnerText}>Submitting...</span>
                                </span>
                            ) : (
                                'Request Removal'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RemoveAccountForm;