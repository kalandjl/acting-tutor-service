"use client"
import ActionArrow from '@/components/ActionArrow';
import Layout from '@/components/Layout';
import React, { useState } from 'react';

// The main App component for the Booking page
const App = () => {
  // State to manage form input values (optional, but good practice for controlled components)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Empty onSubmit function as requested
  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to a backend or an API
    // For now, it just logs to the console.
    alert('Thank you for your booking inquiry! We will get back to you soon.'); // Using alert for demonstration as per instructions
    // Optionally, clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDateTime: '',
      message: '',
    });
  };

  return (
    <Layout>
        <div className="font-sans text-gray-800">

        {/* Section 1: Hero - Book a Session Title */}
        {/* Designed to sit below a sky-800 navigation bar. */}
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
            <ActionArrow />
        </section>

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

                {/* Submit Button */}
                <div className="text-center pt-4">
                <button
                    type="submit"
                    className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-10 rounded-full shadow-lg text-xl
                            transition duration-300 ease-in-out transform hover:scale-105
                            focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-opacity-75"
                >
                    Send Booking Request
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
