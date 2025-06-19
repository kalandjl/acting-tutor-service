import ActionArrow from '@/components/ActionArrow';
import Layout from '@/components/Layout';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { nunito, oswald } from '../fonts';
import HeadshotImage from "@/public/headshot.jpg"
import Image from 'next/image';

// The main App component for the About Us page
const Home = () => {


  return (
    <>
    <Layout navColor='stone-800'>
        <div className="font-sans text-gray-800">

  

        {/* Section 1: Meet Nicole - Bio with Headshot */}
        <section className="min-h-screen bg-gray-50 h-screen py-16 px-4 md:px-8">

            <div className="h-full pt-20 pb-50 grid place-items-center">
                <div className="max-w-6xl w-full h-full grid bg-white shadow-2xl rounded-xl p-8 md:p-12 lg:p-16 transform transition-all duration-500 hover:scale-[1.01]">
                
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                        {/* Headshot Placeholder */}
                        <div className="flex justify-center md:justify-center">
                            <Image
                            src={HeadshotImage}
                            alt="Nicole's Headshot"
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-stone-300 transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        {/* Nicole's Bio Text */}
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold text-sky-800 mb-6 leading-tight">
                            Meet Nicole
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                Nicole’s teaching philosophy is rooted in deep respect for the craft and the individual journey of each student. She has a particular passion for specificity in performance, detailed text analysis, and encouraging students to see their work from the audience’s perspective. Known for her ability to cultivate nuanced, authentic character portrayals, Nicole emphasizes emotional truth and technical precision. Her classrooms are safe, inclusive spaces where students are challenged artistically and supported holistically. She is deeply committed to providing tailored mentorship, practical career guidance, and fostering the confidence and resilience necessary for success in the performing arts.
                            </p>
                        </div>    

                    </div>
                </div>
            </div>
 
        </section>

        {/* Section 2: Coaching Sessions */}
        <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
            <div className="max-w-5xl w-full text-center bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-700 transform transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Coaching Sessions
            </h2>
            <p className="text-gray-300 leading-relaxed text-xl mb-8">
                My coaching sessions are tailored exclusively to your needs.
            </p>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">Areas of focus include:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-200 leading-relaxed text-left max-w-4xl mx-auto mb-10">
                {/* List items with improved styling and hover effect */}
                {[
                "Audition Technique", "Camera Technique", "Speech Arts", "Scene Study",
                "Story Comprehension", "Character Development", "Voice", "Physicality/Movement",
                "Emotional Range", "Authenticity and Confidence"
                ].map((item, index) => (
                <li key={index} className="bg-gray-700 bg-opacity-60 p-4 rounded-lg shadow-md flex items-center
                                            transform transition-transform duration-200 hover:scale-105 hover:bg-gray-600 hover:bg-opacity-70">
                    <span className="text-sky-400 mr-3 text-2xl">✓</span> {item}
                </li>
                ))}
            </ul>
            <p className="text-gray-300 leading-relaxed text-lg">

Nicole will either work with your audition side/speech/monologue or she will personally select materials for what the actor would be auditioning for or wanting to work on. If you have a specific upcoming audition, bring your material.

            </p>
            </div>
        </section>



        {/* Section 3: Call to Action */}
        <section className="min-h-screen bg-sky-800 text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
            <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg leading-tight">
                Ready to Elevate Your Craft?
            </h2>
            <p className="text-sky-100 leading-relaxed text-xl md:text-2xl mb-12">
                Have questions or want to book a session with Nicole? We'd love to hear from you!
            </p>
            <Link
                href="/book" // Assuming you have a contact page route
                className="inline-block bg-white text-sky-800 font-bold py-5 px-12 rounded-full shadow-2xl text-xl md:text-2xl
                        transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100
                        focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-opacity-75"
            >
                Book a Session
            </Link>
            </div>
        </section>
        </div>
    </Layout>
    </>
  );
};

export default Home;
