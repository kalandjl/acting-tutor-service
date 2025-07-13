"use client"
import ActionArrow from '@/components/ActionArrow';
import Layout from '@/components/Layout';
import PricingSection from '@/components/PricingSection';
import { functions } from '@/lib/firebase';
import { httpsCallable } from 'firebase/functions';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'; // Import useEffect

// Declare `grecaptcha` globally for TypeScript
declare global {
  interface Window {
    grecaptcha: any;
  }
}

// Get a callable reference to your Cloud Function
const callablesubmitBooking = httpsCallable(functions, 'submitBooking');

// Replace with your actual reCAPTCHA Site Key
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'YOUR_RECAPTCHA_SITE_KEY';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    message: '',
    website: '', // Honeypot field
    recaptchaToken: '', // New state for reCAPTCHA token
  });
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load the reCAPTCHA script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {console.log(isSubmitting)}, [isSubmitting])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmissionMessage(''); // Clear previous messages

    // --- Client-side Honeypot Check ---
    if (formData.website) {
      console.warn('Honeypot field filled, likely a bot submission.');
      setSubmissionMessage('Thank you for your inquiry. Your submission has been received.');
      setIsSubmitting(false);
      return;
    }

    // --- Client-side Basic Validation ---
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionMessage('Please fill in all required fields (Name, Email, Message).');
      setIsSubmitting(false);
      return;
    }

    // Check if grecaptcha is available
    if (!window.grecaptcha) {
      setSubmissionMessage('reCAPTCHA not loaded. Please try again or refresh the page.');
      console.error('grecaptcha object not found.');
      setIsSubmitting(false);
      return;
    }

    // Execute reCAPTCHA to get a token
    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit_booking_form' });
        
        // Use the token directly instead of storing it in state
        const dataToSubmit = { ...formData, recaptchaToken: token };
        
        // Now call the Cloud Function with the data including the token
        const result = await callablesubmitBooking(dataToSubmit);
        const responseData = result.data as { success: boolean; message: string; docId?: string };

        if (responseData.success) {
          setSubmissionMessage(responseData.message);
          // Clear form after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            preferredDateTime: '',
            message: '',
            website: '',
            recaptchaToken: '',
          });
        } else {
          setSubmissionMessage(responseData.message || 'Something went wrong. Please try again.');
        }
      } catch (error: any) {
        console.error('Error calling Cloud Function:', error);
        if (error.code && error.message) {
          setSubmissionMessage(`Submission failed: ${error.message}`);
        } else {
          setSubmissionMessage('An unexpected error occurred. Please try again later.');
        }
      } finally {
        // This finally block now runs after the Firebase call completes
        setIsSubmitting(false);
      }
    });
  };

  return (
    <Layout>
      <>
        <Head>
          <link rel="canonical" href="https://nicolemcdonaldactingcoach.vercel.app/book" />
        </Head>
        <div className="font-sans text-gray-800">

          {/* Section 1: Hero - Book a Session Title */}
          <section className="min-h-screen bg-sky-800 text-white p-4 pt-5 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-900 to-sky-700 opacity-75"></div>
            <div className="text-center max-w-4xl relative z-10">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
                Book a Session
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed">
                Ready to take the next step? Fill out the form below to schedule your personalized coaching session with Nicole.
              </p>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <ActionArrow />
            </div>
          </section>
          
          <PricingSection />

          {/* Section 2: Booking Form */}
          <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4 md:px-8">
            <div className="max-w-3xl w-full bg-white shadow-2xl rounded-xl p-8 md:p-12 lg:p-16 transform transition-all duration-500 hover:scale-[1.01]">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-sky-800 mb-10 leading-tight">
                Tell Us About Your Needs
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">


                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm
                              focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500
                              text-lg transition duration-200 ease-in-out"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm
                              focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500
                              text-lg transition duration-200 ease-in-out"
                  />
                </div>

                {/* Phone Number Field (Optional) */}
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm
                              focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500
                              text-lg transition duration-200 ease-in-out"
                  />
                </div>

                {/* Preferred Date/Time Field */}
                <div>
                  <label htmlFor="preferredDateTime" className="block text-lg font-medium text-gray-700 mb-2">
                    Preferred Date & Time (e.g., MM/DD/YYYY HH:MM AM/PM)
                  </label>
                  <input
                    type="text"
                    id="preferredDateTime"
                    name="preferredDateTime"
                    value={formData.preferredDateTime}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm
                              focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500
                              text-lg transition duration-200 ease-in-out"
                    placeholder="e.g., 12/25/2025 3:00 PM"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                    Your Message / Specific Needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm
                              focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500
                              text-lg transition duration-200 ease-in-out resize-y"
                  ></textarea>
                </div>

                {/* Honeypot Field (Hidden from users, visible to bots) */}
                <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, width: 0, overflow: 'hidden' }}>
                  <label htmlFor="website">Don't fill this out if you're human:</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                {/* reCAPTCHA Branding (Required if you hide the badge) */}
                <div className="text-center text-gray-500 text-sm">
                  This site is protected by reCAPTCHA and the Google&nbsp;
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a> and&nbsp;
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Terms of Service</a> apply.
                </div>

                {/* Policy */}
                <div className="text-center">
                  <p>
                    Before submitting a booking request, please read our <Link href="/policy" className='text-blue-700'>
                    <span className='relative group'>
                      booking policy
                      <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full`}></span>
                    </span>
                  </Link>
                  </p>
                </div>
                  {/* Submission Message Display */}
                {submissionMessage ? (
                  <div className={`p-4 rounded-lg text-center font-semibold ${
                    submissionMessage.includes('failed') || submissionMessage.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {submissionMessage}
                  </div>
                ) :
                <>
                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-10 rounded-full shadow-lg text-xl
                              transition duration-300 ease-in-out transform hover:scale-105
                              focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-opacity-75
                              disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Book your Online Session'}
                  </button>
                </div>
                </>
                } 
              </form>
            </div>
          </section>

          {/* Section 3: Call to Action / Additional Info (Optional) */}
          <section className="md:min-h-screen py-32 md:py-16 bg-gray-900 text-white flex flex-col items-center justify-center px-4 md:px-8">
            <div className="text-center max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                What Happens Next?
              </h2>
              <p className="text-gray-300 leading-relaxed text-xl md:text-2xl mb-8">
                Once you submit your request, Nicole will review your details and get back to you within 24-48 hours to confirm your session or discuss further details.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                For urgent inquiries, please refer to the contact information on our <a href="/contact" className="text-sky-400 hover:text-sky-300 underline">Contact Page</a>.
              </p>
            </div>
          </section>
        </div>
      </>
    </Layout>
  );
};

export default App;