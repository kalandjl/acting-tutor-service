import { nunito } from "@/app/fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface Props {

}

const FAQ: FC<Props> = (props) => {

    return (
        <>
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
        </>
    )
}

export default FAQ