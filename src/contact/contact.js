// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { createClient } from '@supabase/supabase-js';
// import { Helmet } from 'react-helmet';
// import styles from './Contact.module.css';

// // Update the Supabase client initialization with error checking
// const supabase = createClient(
//     process.env.REACT_APP_SUPABASE_URL,
//     process.env.REACT_APP_SUPABASE_ANON_KEY,
//     {
//         auth: { persistSession: false },
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
// );

// // Enhanced validation schema
// const schema = yup.object({
//     name: yup.string()
//         .required('Name is required')
//         .min(2, 'Name must be at least 2 characters'),
//     email: yup.string()
//         .email('Please enter a valid email')
//         .required('Email is required'),
//     subject: yup.string()
//         .required('Subject is required')
//         .min(5, 'Subject must be at least 5 characters'),
//     message: yup.string()
//         .required('Message is required')
//         .min(10, 'Message must be at least 10 characters')
//         .max(1000, 'Message must not exceed 1000 characters')
// }).required();

// const ContactForm = () => {
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

//     const { register, handleSubmit, reset, formState: { errors } } = useForm({
//         resolver: yupResolver(schema),
//         mode: 'onBlur' // Validate on blur for better UX
//     });

//     const onSubmit = async (data) => {
//         setIsSubmitting(true);
//         setSubmitStatus({ type: '', message: '' });

//         try {
//             // Validate Supabase configuration
//             if (!process.env.REACT_APP_SUPABASE_URL || !process.env.REACT_APP_SUPABASE_ANON_KEY) {
//                 console.error('Missing Supabase environment variables');
//                 throw new Error('Server configuration error');
//             }

//             const { error, data: responseData } = await supabase
//                 .from('contacts')
//                 .insert([{
//                     name: data.name.trim(),
//                     email: data.email.toLowerCase().trim(),
//                     subject: data.subject.trim(),
//                     message: data.message.trim(),
//                     status: 'new',
//                     created_at: new Date().toISOString()
//                 }])
//                 .select();

//             if (error) {
//                 console.error('Supabase error:', error);
//                 throw new Error(error.message || 'Failed to submit form');
//             }

//             setSubmitStatus({
//                 type: 'success',
//                 message: 'Thank you for your message. We will get back to you soon!'
//             });
//             reset();
//             window.scrollTo({ top: 0, behavior: 'smooth' });

//         } catch (error) {
//             console.error('Contact form error details:', {
//                 message: error.message,
//                 stack: error.stack
//             });
            
//             let errorMessage = 'An error occurred. Please try again later.';
//             if (error.message.includes('Failed to fetch')) {
//                 errorMessage = 'Network error. Please check your connection and try again.';
//             } else if (error.message.includes('Missing Supabase')) {
//                 errorMessage = 'Server configuration error. Please contact support.';
//             }
            
//             setSubmitStatus({
//                 type: 'error',
//                 message: errorMessage
//             });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className={styles.contactContainer}>
//             <Helmet>
//                 <title>Contact Us | NoCorps</title>
//                 <meta name="description" content="Get in touch with NoCorps. We'd love to hear from you and discuss your project needs." />
//             </Helmet>

//             <div className={styles.formWrapper}>
//                 <div className={styles.contactInfo}>
//                     <h2>Let's Connect</h2>
//                     <p>We're here to help with your development needs. Fill out the form and we'll get back to you soon.</p>
//                     <div className={styles.contactDetails}>
//                         <div className={styles.contactItem}>
//                             <p>Email: kanagaraj.developer@gmail.com</p>
//                             <p>Follow us on social media</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={styles.formSection}>
//                     <h1>Send Us a Message</h1>
//                     <p className={styles.subtitle}>
//                         Have a question or project in mind? We'd love to hear from you.
//                     </p>

//                     {submitStatus.message && (
//                         <div className={`${styles.alert} ${styles[submitStatus.type]}`}>
//                             {submitStatus.message}
//                         </div>
//                     )}

//                     <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
//                         <div className={styles.formGroup}>
//                             <label htmlFor="name">Name</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 {...register('name')}
//                                 className={errors.name ? styles.error : ''}
//                             />
//                             {errors.name && (
//                                 <span className={styles.errorMessage}>{errors.name.message}</span>
//                             )}
//                         </div>

//                         <div className={styles.formGroup}>
//                             <label htmlFor="email">Email</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 {...register('email')}
//                                 className={errors.email ? styles.error : ''}
//                             />
//                             {errors.email && (
//                                 <span className={styles.errorMessage}>{errors.email.message}</span>
//                             )}
//                         </div>

//                         <div className={styles.formGroup}>
//                             <label htmlFor="subject">Subject</label>
//                             <input
//                                 type="text"
//                                 id="subject"
//                                 {...register('subject')}
//                                 className={errors.subject ? styles.error : ''}
//                             />
//                             {errors.subject && (
//                                 <span className={styles.errorMessage}>{errors.subject.message}</span>
//                             )}
//                         </div>

//                         <div className={styles.formGroup}>
//                             <label htmlFor="message">Message</label>
//                             <textarea
//                                 id="message"
//                                 rows="5"
//                                 {...register('message')}
//                                 className={errors.message ? styles.error : ''}
//                             />
//                             {errors.message && (
//                                 <span className={styles.errorMessage}>{errors.message.message}</span>
//                             )}
//                         </div>

//                         <button 
//                             type="submit" 
//                             className={styles.submitButton}
//                             disabled={isSubmitting}
//                         >
//                             {isSubmitting ? (
//                                 <span className={styles.loadingSpinner}>
//                                     <span className={styles.spinnerText}>Sending...</span>
//                                 </span>
//                             ) : (
//                                 'Send Message'
//                             )}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactForm;



import React from "react";
import styles from "../css/GoogleForm.module.css";
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  return (
    <div className={styles.pageContainer}>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact NoCorps - Get in Touch for Development Solutions</title>
        <meta name="description" content="Contact NoCorps for professional Flutter, full-stack, and web development services. Let's discuss your project requirements and create innovative solutions together." />
        <meta name="keywords" content="contact NoCorps, software development inquiry, Flutter development services, web development contact, hire developers, software consultation" />
        <meta name="author" content="NoCorps Development Team" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nocorps.org/contact" />
        <meta property="og:title" content="Contact NoCorps - Get in Touch for Development Solutions" />
        <meta property="og:description" content="Ready to start your project? Contact NoCorps for professional development services." />
        <meta property="og:image" content="https://nocorps.org/NcLogo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nocorps_dev" />
        <meta name="twitter:title" content="Contact NoCorps - Get in Touch for Development Solutions" />
        <meta name="twitter:description" content="Ready to start your project? Contact NoCorps for professional development services." />
        <meta name="twitter:image" content="https://nocorps.org/NcLogo.png" />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://nocorps.org/contact" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact NoCorps",
              "description": "Contact page for NoCorps development services",
              "mainEntity": {
                "@type": "Organization",
                "name": "NoCorps",
                "url": "https://nocorps.org",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": ["English"]
                }
              }
            }
          `}
        </script>
      </Helmet>

      <div className={styles.formWrapper}>
        <div className={styles.headerSection}>
          <h1>Get in Touch</h1>
          <p className={styles.subtitle}>
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>Let's Talk</h3>
              <p>Fill out the form and we'll get back to you within 24 hours.</p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <i className="fas fa-envelope"></i>
                  <span>kanagaraj.developer@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <i className="fas fa-globe"></i>
                  <span>www.nocorps.org</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <iframe
              className={styles.embeddedForm}
              
              src="https://docs.google.com/forms/d/e/1FAIpQLSeVLi6yvX-6d4cK1w-kOpKGLsawTJd7UBuMBUSN54Kkv-X7bw/viewform?usp=sharing"
              width="100%"
              height="800px"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;