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

        {/* Section 3: FAQ */}
        <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-16 px-4 md:px-8">
            <div className="max-w-5xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-sky-800 mb-12 leading-tight">
                Frequently Asked Questions
            </h2>

            <div className="space-y-8">
                {/* FAQ Item 1 */}
                <div className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-sky-600 transform transition-all duration-300 hover:scale-[1.005] hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What should I expect on the day?</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-2">
                    Expect a brief discussion about the material before diving in, and perhaps one
                    grounding/warm-up exercise. We'll spend time breaking down the material if needed.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                    I encourage you to arrive as prepared as possible to maximize your session. If you have
                    specific warm-ups, tricks, or preferences that help you connect to the material, please
                    mention so when filling out the booking form.
                </p>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-sky-600 transform transition-all duration-300 hover:scale-[1.005] hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What is your cancellation policy?</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Out of respect for your coach, please note that cancellations made within twelve (12)
                    hours of your scheduled coaching session will be subject to a $25 cancellation fee.
                    Cancellations made within one (1) hour will be subject to the full session fee.
                </p>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-sky-600 transform transition-all duration-300 hover:scale-[1.005] hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Can a parent attend a youth coaching session?</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                    For underage actors, a student can be accompanied by their parent for the entire
                    duration of the coaching session.
                </p>
                </div>
            </div>

            <div id="action-faq" className='grid place-items-center py-10'>
                <Link href="/faq">
                    <button className='grid place-items-center bg-stone-200 px-10 py-5 rounded-md border-2 border-gray-900
                    transition ease-in-out hover:scale-105 hover:cursor-pointer'>
                        <div className='grid gap-5 grid-flow-col'>
                            <span className={`${nunito.className} text-stone-900 text-lg`}>
                                More Frequently Asked Questions
                            </span>
                            <ArrowRight stroke='#000000' />
                        </div>
                    </button>
                </Link>
            </div>
            </div>
        </section>

        {/* Section 4: Call to Action */}
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
