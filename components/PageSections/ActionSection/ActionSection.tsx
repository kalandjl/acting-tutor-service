import Link from 'next/link';
import { oswald, nunito } from '@/app/fonts'; // Assuming you have a fonts file
import { FC } from 'react';

// A simple checkmark icon component to be used in the list
const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-sky-500 flex-shrink-0 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


interface Props {}

const ActionSection: FC<Props> = (props) => {

    return (
        <section id="action-section" className="bg-slate-100 dark:bg-sky-700 py-20 sm:py-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Main Headline */}
                <h2 className={`${oswald.className} text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white`}>
                    Ready to Elevate Your Craft?
                </h2>

                {/* Subheading */}
                <p className={`${nunito.className} mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto`}>
                    Your journey to a more confident, authentic, and powerful performance starts now. Each one-on-one session is tailored exclusively to your personal goals and artistic needs.
                </p>

                {/* Checklist of Benefits - uses a grid for a nice two-column layout on medium screens and up */}
                <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-left">
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className={`${nunito.className} text-slate-700 dark:text-slate-200`}>
                            <strong>Audition & Camera Technique:</strong> Master the skills to book the role.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className={`${nunito.className} text-slate-700 dark:text-slate-200`}>
                           <strong>Scene Study & Text Analysis:</strong> Uncover the truth and intention in any script.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className={`${nunito.className} text-slate-700 dark:text-slate-200`}>
                            <strong>Character Development:</strong> Build nuanced and memorable characters.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className={`${nunito.className} text-slate-700 dark:text-slate-200`}>
                            <strong>Voice & Physicality:</strong> Connect your body and voice to your performance.
                        </span>
                    </li>
                </ul>

                {/* Pricing Callout */}
                <p className={`${oswald.className} mt-12 text-2xl font-semibold text-sky-400 dark:text-sky-200 tracking-wide`}>
                    Your first session is only $80.
                </p>
                <p className={`${nunito.className} text-sm text-slate-500 dark:text-slate-300 mt-3`}>
                    This is a limited-time introductory offer to begin your development with personalized, expert guidance.
                </p>

                {/* Main Call-to-Action Button */}
                <div className="mt-8">
                    <Link href="/book">
                        <p className="inline-block bg-sky-400 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-sky-500 transition-transform transform hover:scale-105 duration-300">
                            Book My Introductory Session
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ActionSection