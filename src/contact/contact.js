import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createClient } from '@supabase/supabase-js';
import { Helmet } from 'react-helmet';
import styles from './Contact.module.css';

// Initialize Supabase client
const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_ANON_KEY
);

// Enhanced validation schema
const schema = yup.object({
    name: yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
    email: yup.string()
        .email('Please enter a valid email')
        .required('Email is required'),
    subject: yup.string()
        .required('Subject is required')
        .min(5, 'Subject must be at least 5 characters'),
    message: yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message must not exceed 1000 characters')
}).required();

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur' // Validate on blur for better UX
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' }); // Clear previous status

        try {
            const { error } = await supabase
                .from('contacts')
                .insert([{
                    name: data.name.trim(),
                    email: data.email.toLowerCase().trim(),
                    subject: data.subject.trim(),
                    message: data.message.trim(),
                    status: 'new',
                    created_at: new Date().toISOString()
                }]);

            if (error) throw error;

            setSubmitStatus({
                type: 'success',
                message: 'Thank you for your message. We will get back to you soon!'
            });
            reset();
            
            // Optional: Scroll to top to show success message
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (error) {
            console.error('Contact form error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.contactContainer}>
            <Helmet>
                <title>Contact Us | NoCorps</title>
                <meta name="description" content="Get in touch with NoCorps. We'd love to hear from you and discuss your project needs." />
            </Helmet>

            <div className={styles.formWrapper}>
                <h1>Contact Us</h1>
                <p className={styles.subtitle}>
                    Have a question or project in mind? We'd love to hear from you.
                </p>

                {submitStatus.message && (
                    <div className={`${styles.alert} ${styles[submitStatus.type]}`}>
                        {submitStatus.message}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            {...register('name')}
                            className={errors.name ? styles.error : ''}
                        />
                        {errors.name && (
                            <span className={styles.errorMessage}>{errors.name.message}</span>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email')}
                            className={errors.email ? styles.error : ''}
                        />
                        {errors.email && (
                            <span className={styles.errorMessage}>{errors.email.message}</span>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            {...register('subject')}
                            className={errors.subject ? styles.error : ''}
                        />
                        {errors.subject && (
                            <span className={styles.errorMessage}>{errors.subject.message}</span>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            {...register('message')}
                            className={errors.message ? styles.error : ''}
                        />
                        {errors.message && (
                            <span className={styles.errorMessage}>{errors.message.message}</span>
                        )}
                    </div>

                    <button 
                        type="submit" 
                        className={styles.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className={styles.loadingSpinner}>
                                <span className={styles.spinnerText}>Sending...</span>
                            </span>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;