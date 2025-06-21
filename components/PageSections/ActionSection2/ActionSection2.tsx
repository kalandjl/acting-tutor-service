import Link from "next/link";
import { FC } from "react";

interface Props {}

const ActionSection2: FC<Props> = (props) => {

    return (
        <>
            {/* Section 3: Call to Action */}
            <section className="min-h-screen bg-sky-800 text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
                <div className="text-center max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg leading-tight">
                    Ready to Elevate Your Craft?
                </h2>
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
        </>
    )
}

export default ActionSection2