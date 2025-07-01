import { FC } from "react"

interface Props {}

const PricingSection: FC<Props> = (props) => {

    return (
        <>
            <section className="bg-stone-900 text-white py-16 px-6 md:px-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-sky-800 mb-4">Private Coaching Rates</h2>
                <p className="text-lg text-stone-300 mb-10">
                Nicole’s sessions are deeply personalized, grounded in craft, and designed to elevate your performance journey.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-stone-800 p-8 rounded-2xl shadow-lg border border-sky-800">
                    <h3 className="text-2xl font-semibold text-white mb-2">First Session</h3>
                    <p className="text-4xl font-bold text-sky-800 mb-4">$80<span className="text-base text-white">/hr</span></p>
                    <p className="text-stone-300">Introductory rate to tailor your goals, style, and performance approach.</p>
                </div>

                <div className="bg-stone-800 p-8 rounded-2xl shadow-lg border border-sky-800">
                    <h3 className="text-2xl font-semibold text-white mb-2">Standard Rate</h3>
                    <p className="text-4xl font-bold text-sky-800 mb-4">$100<span className="text-base text-white">/hr</span></p>
                    <p className="text-stone-300">Custom, one-on-one coaching in areas like audition prep, voice, movement, and character work.</p>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default PricingSection