"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { nunito, oswald } from "./fonts"; // Assuming oswaldBold is included in oswald or not needed separately
import Layout from "@/components/Layout";
import AboutSection from "@/components/PageSections/AboutSection";

const Home = () => {
    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Layout navColor="sky-800">
            <>
                <div className="bg-sky-800"></div>
                {/* Ensure navColor uses full Tailwind class */}
                <section
                    id="hero"
                    className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900"
                >
                    {/* Hero Image - Full width and height, covering the section */}
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1561264974-153c4dacddd2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Nicole McDonald Acting"
                            layout="fill" // Makes the image fill its parent
                            objectFit="cover" // Ensures the image covers the area, cropping if necessary
                            quality={90} // Improve image quality
                            priority // Load this image with high priority
                            className="opacity-60" // Subtle transparency to help text stand out
                        />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    {/* Content Overlay */}
                    <motion.div
                        className="relative z-10 text-center text-stone-100 p-8 max-w-4xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className={`${oswald.className} text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight`}
                            variants={itemVariants}
                        >
                            NICOLE MCDONALD ACTING
                        </motion.h1>
                        <motion.p
                            className={`${nunito.className} text-lg md:text-xl lg:text-2xl mt-4 max-w-2xl mx-auto`}
                            variants={itemVariants}
                        >
                            Bringing Stories to Life: Authentic Performances, Unforgettable Characters.
                        </motion.p>
                        <motion.p
                            className={`${nunito.className} text-base md:text-lg mt-6 max-w-3xl mx-auto`}
                            variants={itemVariants}
                        >
                            With a passion for compelling narratives and a dedication to craft, Nicole McDonald delivers powerful and nuanced performances across stage and screen.
                        </motion.p>
                    </motion.div>
                </section>

                <AboutSection /> {/* This section will likely have its own styling */}
            </> 
        </Layout>
    );
};

export default Home;