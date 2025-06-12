"use client"; // REQUIRED for Framer Motion components

import Image from "next/image";
import HeadshotImage from "@/public/headshot.jpg";
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { nunito } from "@/app/fonts"; // Assuming oswald is not needed here or is imported if used.

interface Props {}

const AboutSection: FC<Props> = (props) => {
    // Animation variants for Framer Motion
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2, // Animate children with a delay
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            id="about-section"
            className="min-h-screen py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center bg-stone-900 text-stone-200 gap-12"
            initial="hidden"
            whileInView="visible" // Animate when the section comes into view
            viewport={{ once: true, amount: 0.3 }} // Only animate once, when 30% of section is visible
            variants={sectionVariants}
        >
            {/* Image Section */}
            <motion.div
                id="image"
                className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center"
                variants={itemVariants}
            >
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-2xl border-4 border-stone-600 transition-all duration-500 hover:scale-105 hover:border-stone-400">
                    <Image
                        src={HeadshotImage}
                        alt="Nicole McDonald's Headshot"
                        layout="fill" // Fill the parent div
                        objectFit="cover" // Cover the area, crop if needed
                        quality={90} // High quality image
                        className="rounded-full" // Ensure image itself is rounded inside overflow hidden
                    />
                </div>
            </motion.div>

            {/* Text and Button Section */}
            <motion.div
                id="text"
                className="flex-grow max-w-2xl text-center md:text-left"
                variants={itemVariants} // This will also animate as part of the staggerChildren
            >
                <motion.h2
                    className={`${nunito.className} text-4xl md:text-5xl font-bold mb-6 text-sky-400`}
                    variants={itemVariants}
                >
                    About Nicole
                </motion.h2>
                <motion.p
                    className={`${nunito.className} text-lg md:text-xl leading-relaxed mb-6`}
                    variants={itemVariants}
                >
                    <strong className="text-xl">Nicole is a seasoned performer and dedicated educator</strong> with over 25 years of experience in theatre arts. A versatile actor, accomplished singer, and trained dancer, she brings a dynamic, well-rounded approach to her craft.
                </motion.p>
                <motion.p
                    className={`${nunito.className} text-lg md:text-xl leading-relaxed mb-8`}
                    variants={itemVariants}
                >
                    After earning her Master’s degree in Theatre, Nicole established herself in Vancouver’s vibrant arts education scene, teaching at a number of prestigious private schools. She currently serves as the Head of Theatrical Arts at a leading independent school in Vancouver, where she oversees the drama curriculum, directs mainstage productions, and mentors aspiring young performers.
                </motion.p>

                {/* Call to Action Button */}
                <motion.div
                    id="action-btn"
                    className="mt-8 flex justify-center md:justify-start" // Center on small screens, left-align on md+
                    variants={itemVariants}
                >
                    <Link href="/about" passHref>
                        <motion.button
                            className="bg-sky-500 text-stone-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-sky-400 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-300 hover:cursor-pointer"
                            whileHover={{ scale: 1.05 }} // Subtle hover animation
                            whileTap={{ scale: 0.95 }} // Click animation
                        >
                            Learn More About Nicole
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default AboutSection;