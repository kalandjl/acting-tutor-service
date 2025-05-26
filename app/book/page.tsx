"use client"
import ActionArrow from '@/components/ActionArrow';
import Layout from '@/components/Layout';
import { functions } from '@/lib/firebase';
import { httpsCallable } from 'firebase/functions';
import Link from 'next/link';
import React, { useState } from 'react';

// Get a callable reference to your Cloud Function
const callablesubmitBooking = httpsCallable(functions, 'submitBooking');

// The main App component for the Booking page
// The main App component for the Booking page
const App = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    message: '',
    website: '', // Honeypot field
  });
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // onSubmit function
  const handleSubmit = async (e: any) => {
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
    // (Still good for immediate user feedback, but server-side is definitive)
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionMessage('Please fill in all required fields (Name, Email, Message).');
      setIsSubmitting(false);
      return;
    }

    try {
      // Call the Firebase Cloud Function
      // The `data` property of the response will contain what your Cloud Function returns
      const result = await callablesubmitBooking(formData);
      const responseData = result.data as { success: boolean; message: string; docId?: string }; // Cast to expected type

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
        });
      } else {
        // This part might be hit if the Cloud Function explicitly returns success: false
        setSubmissionMessage(responseData.message || 'Something went wrong. Please try again.');
      }

    } catch (error: any) { // Use 'any' or more specific type for error object
      console.error('Error calling Cloud Function:', error);
      // Firebase HTTPS callable functions return specific error codes and messages
      // This helps you differentiate between types of errors (e.g., 'invalid-argument', 'permission-denied')
      if (error.code && error.message) {
        setSubmissionMessage(`Submission failed: ${error.message}`);
      } else {
        setSubmissionMessage('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="font-sans text-gray-800">

        {/* Section 1: Hero - Book a Session Title */}
        <section className="min-h-screen bg-sky-800 text-white flex flex-col items-center justify-center p-4 pt-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900 to-sky-700 opacity-75"></div>
          <div className="text-center max-w-4xl relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
              Book a Session
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed">
              Ready to take the next step? Fill out the form below to schedule your personalized coaching session with Nicole.
            </p>
          </div>
        </section>

        {/* Section 2: Booking Form */}
        <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4 md:px-8">
          <div className="max-w-3xl w-full bg-white shadow-2xl rounded-xl p-8 md:p-12 lg:p-16 transform transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-sky-800 mb-10 leading-tight">
              Tell Us About Your Needs
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Submission Message Display */}
              {submissionMessage && (
                <div className={`p-4 rounded-lg text-center font-semibold ${
                  submissionMessage.includes('failed') || submissionMessage.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                }`}>
                  {submissionMessage}
                </div>
              )}

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
                  type="text" // Using text for flexibility, could be type="datetime-local" for specific browser support
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
                  tabIndex={-1} // Prevent focus via keyboard navigation
                  autoComplete="off" // Prevent browser autofill
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              {/* Policy */}
              <div className="text-center">
                <p>
                  Before submitting a booking request, please read our <Link href="/policy" className='text-blue-700'>
                  <span className='relative group'>
                    booking Policy
                    <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full`}></span>
                  </span>
                </Link>
                </p>
              </div>
              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-10 rounded-full shadow-lg text-xl
                            transition duration-300 ease-in-out transform hover:scale-105
                            focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-opacity-75
                            disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting} // Disable button while submitting
                >
                  {isSubmitting ? 'Sending...' : 'Send Booking Request'}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Section 3: Call to Action / Additional Info (Optional) */}
        <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
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
    </Layout>
  );
};


export default App;
