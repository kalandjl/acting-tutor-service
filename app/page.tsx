// This directive is necessary for Framer Motion components and other client-side hooks.
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { nunito, oswald } from "./fonts";
import Layout from "@/components/Layout";
import AboutSection from "@/components/PageSections/AboutSection";
import ActionArrow from "@/components/ActionArrow";
import ActionSection2 from "@/components/PageSections/ActionSection2";
import Link from "next/link";

const Home = () => {
    // Animation variants for Framer Motion remain the same
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
                {/* The Hero Section now uses a calculated height to fill the screen
                  h-[calc(100vh-6rem)] = 100% viewport height minus 6rem (the h-24 navbar)
                  Flexbox is used to perfectly center the content vertically and horizontally.
                */}
                <section 
                    id="hero"
                    className="relative w-full h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden"
                >
                    { /* Background Image & Overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1561264974-153c4dacddd2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Nicole McDonald Acting"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center 35%"
                            quality={90}
                            priority
                            className="opacity-70" // Adjusted opacity for better text readability
                        />
                        <div className="absolute inset-0 bg-black/75"></div> {/* Simplified overlay */}
                    </div>

                    {/* Centered Content */}
                    <motion.div
                        className="relative z-10 text-center text-stone-100 p-8 max-w-4xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className={`${oswald.className} text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight`}
                            variants={itemVariants}
                        >
                            NICOLE MCDONALD ACTING COACH
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
                            With a passion for compelling narratives and a dedication to craft, Nicole McDonald helps you deliver powerful and nuanced performances across stage and screen.
                        </motion.p>
                        <motion.div
                            className={`${nunito.className} text-base md:text-lg mt-6 max-w-3xl mx-auto  grid place-items-center`}
                            variants={itemVariants}
                        >
                            <span className="bg-stone-800 px-4 py-2 shadow-2xl relative overflow-hidden group hover:cursor-pointer">
                                <p>Book your online session now </p>
                                <div className="overflow-hidden">
                                    <div className="h-0.5 right-0 left-0 bg-white transition opacity-0 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100"></div>
                                </div>
                            </span>
                        </motion.div>

                    </motion.div>
                    
                    {/* The Action Arrow is now positioned relative to the section */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                         <ActionArrow navAdjust={false} />
                    </div>
                </section>

                <AboutSection />

                <ActionSection2 />
            </>
        </Layout>
    );
};

export default Home;