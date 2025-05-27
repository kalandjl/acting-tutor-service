"use client"; // This directive is essential for Framer Motion

import { motion } from "framer-motion";
import { FC } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { nunito, oswald } from "@/app/fonts"; // Assuming these are your primary fonts

interface Props {}

const ContactPage: FC<Props> = () => {
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
            {/* Ensure navColor uses full Tailwind class */}
            <>
                <motion.section
                    className="min-h-screen bg-stone-900 text-stone-100 py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center"
                    variants={pageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className={`${oswald.className} text-5xl md:text-6xl font-bold mb-8 text-center text-sky-400`}
                        variants={itemVariants}
                    >
                        Get In Touch
                    </motion.h1>

                    <motion.p
                        className={`${nunito.className} text-lg md:text-xl text-center max-w-3xl mb-12 leading-relaxed`}
                        variants={itemVariants}
                    >
                        For all professional inquiries, please refer to the contact details below. Nicole looks forward to connecting with you.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
                        {/* Agent/Management Section */}
                        <motion.div
                            className="bg-stone-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center"
                            variants={itemVariants}
                        >
                            <h2 className={`${oswald.className} text-3xl font-bold mb-4 text-sky-300`}>
                                Agent & Management
                            </h2>
                            <p className={`${nunito.className} text-lg mb-2`}>
                                [Agent Name/Agency Name]
                            </p>
                            <p className={`${nunito.className} text-lg mb-4`}>
                                <Link href="mailto:agent@example.com" className="text-sky-200 hover:text-sky-400 transition-colors duration-200">
                                    agent@example.com
                                </Link>
                            </p>
                            <p className={`${nunito.className} text-md text-stone-400`}>
                                (For casting, bookings, and professional inquiries only)
                            </p>
                        </motion.div>

                        {/* General Inquiries Section */}
                        <motion.div
                            className="bg-stone-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center"
                            variants={itemVariants}
                        >
                            <h2 className={`${oswald.className} text-3xl font-bold mb-4 text-sky-300`}>
                                General Inquiries
                            </h2>
                            <p className={`${nunito.className} text-lg mb-4`}>
                                <a href="mailto:nicole.mcdonald.acting@example.com" className="text-sky-200 hover:text-sky-400 transition-colors duration-200">
                                    nicole.mcdonald.acting@example.com
                                </a>
                            </p>
                            <p className={`${nunito.className} text-md text-stone-400`}>
                                (For collaborations, press, and other non-agent related matters)
                            </p>
                        </motion.div>

                        {/* Social Media Section */}
                        <motion.div
                            className="md:col-span-2 bg-stone-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center"
                            variants={itemVariants}
                        >
                            <h2 className={`${oswald.className} text-3xl font-bold mb-4 text-sky-300`}>
                                Connect Online
                            </h2>
                            <div className="flex space-x-6 text-4xl">
                                {/* Replace with actual icons/links as needed */}
                                <Link href="https://www.imdb.com/name/nmXXXXXXX/" target="_blank" rel="noopener noreferrer" passHref>
                                    <motion.p
                                        className="text-stone-300 hover:text-sky-400 transition-colors duration-200"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="IMDb Profile"
                                    >
                                        <i className="fab fa-imdb"></i> {/* Font Awesome IMDb icon */}
                                    </motion.p>
                                </Link>
                                <Link href="https://www.instagram.com/nicolemcdonald_acting/" target="_blank" rel="noopener noreferrer" passHref>
                                    <motion.p
                                        className="text-stone-300 hover:text-sky-400 transition-colors duration-200"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="Instagram Profile"
                                    >
                                        <i className="fab fa-instagram"></i> {/* Font Awesome Instagram icon */}
                                    </motion.p>
                                </Link>
                                <Link href="https://www.linkedin.com/in/nicolemcdonald/" target="_blank" rel="noopener noreferrer" passHref>
                                    <motion.p
                                        className="text-stone-300 hover:text-sky-400 transition-colors duration-200"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="LinkedIn Profile"
                                    >
                                        <i className="fab fa-linkedin-in"></i> {/* Font Awesome LinkedIn icon */}
                                    </motion.p>
                                </Link>
                            </div>
                            <p className={`${nunito.className} text-md text-stone-400 mt-4`}>
                                Follow Nicole's journey and updates on social media.
                            </p>
                        </motion.div>

                        {/* Location/Base Section */}
                        <motion.div
                            className="md:col-span-2 bg-stone-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center"
                            variants={itemVariants}
                        >
                            <h2 className={`${oswald.className} text-3xl font-bold mb-4 text-sky-300`}>
                                Based In
                            </h2>
                            <p className={`${nunito.className} text-lg mb-2`}>
                                Vancouver, British Columbia, Canada
                            </p>
                            <p className={`${nunito.className} text-md text-stone-400`}>
                            </p>
                        </motion.div>
                    </div>
                </motion.section>
            </>
        </Layout>
    );
};

export default ContactPage;
