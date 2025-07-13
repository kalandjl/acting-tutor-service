"use client"
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Head from 'next/head';

// Simulate font classes as they are external imports in the original code
const oswald = { className: 'font-extrabold' }; // Using Tailwind's font-extrabold for Oswald effect
const nunito = { className: 'font-normal' };   // Using Tailwind's font-normal for Nunito effect

// Main ContactPage component
const ContactPage = () => {
    // Animation variants for Framer Motion
    const pageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.15, // Animate sections with a slight delay
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Layout navColor="stone-800">
            <>
                <Head>
                    <link rel="canonical" href="https://nicolemcdonaldactingcoach.vercel.app/contact" />
                </Head>
                {/* Main content section for the contact page */}
                <motion.section
                    className="min-h-screen bg-stone-900 text-stone-100 py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center font-inter" // Added font-inter for default
                    variants={pageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Page Title */}
                    <motion.h1
                        className={`${oswald.className} text-5xl md:text-6xl font-bold mb-8 text-center text-sky-400`}
                        variants={itemVariants}
                    >
                        Get In Touch
                    </motion.h1>

                    {/* Introductory Paragraph */}
                    <motion.p
                        className={`${nunito.className} text-lg md:text-xl text-center max-w-3xl mb-12 leading-relaxed`}
                        variants={itemVariants}
                    >
                        For all professional inquiries, please refer to the contact details below.
                    </motion.p>

                    {/* Grid container for contact sections */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-5xl w-full"> {/* Changed to md:grid-cols-1 */}

                        {/* General Inquiries Section */}
                        <motion.div
                            className="bg-stone-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center"
                            variants={itemVariants}
                        >
                            <h2 className={`${oswald.className} text-3xl font-bold mb-4 text-sky-300`}>
                                General Inquiries
                            </h2>
                            <p className={`${nunito.className} text-lg mb-4`}>
                                <a href="mailto:nicolemcdonald77@gmail.com" className="text-sky-200 hover:text-sky-400 transition-colors duration-200">
                                    nicolemcdonald77@gmail.com
                                </a>
                            </p>
                            <p className={`${nunito.className} text-md text-stone-300`}>
                                (Any general questions relating to Nicole's services)
                            </p>
                        </motion.div>

    

                        {/* Location/Base Section */}
                        <motion.div
                            className="md:col-span-1 bg-stone-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center" // Changed to md:col-span-1
                            variants={itemVariants}
                        >
                            <h2 className={`${oswald.className} text-3xl font-bold mb-4 text-sky-300`}>
                                Based In
                            </h2>
                            <p className={`${nunito.className} text-lg mb-2 text-stone-300`}>
                                Vancouver, British Columbia, Canada
                            </p>
                            <p className={`${nunito.className} text-md text-stone-400`}>
                                {/* Additional location details can go here if needed */}
                            </p>
                        </motion.div>
                    </div>
                </motion.section>
                {/* Include Font Awesome for icons */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </>
        </Layout>
    );
};

export default ContactPage;
