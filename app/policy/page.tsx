import Layout from "@/components/Layout"
import Link from "next/link"

const Home = () => {

    return (
        <>  
            <Layout navColor="stone-800">
                <section className="grid xl:px-96 lg:px-64 md:px-48 place-items-center">
                    <div id="header-wrap" className="py-10 w-max grid place-items-center transition ease-in-out hover:scale-105">
                        <h1 className="md:text-4xl text-2xl font-bold">
                            Booking Policy
                        </h1>
                    </div>
                    <div id="booking-policy">
                        <div id="subheader-wrap">
                            <h1 className="text-2xl font-semibold">
                                Booking
                            </h1>
                        </div>
                        <div id="text-wrap">
                            <p>
                                Can a parent attend a youth coaching session?
For underage actors, a student can be accompanied with their parent for the entire duration of the coaching session.
                            </p>
                        </div>
                    </div>
                    <div id="cancelation-policy" className="w-full mt-10">
                        <div id="subheader-wrap" className="w-max">
                            <h1 className="text-2xl font-semibold">
                                Cancellation
                            </h1>
                        </div>
                        <div id="text-wrap">
                            <Link href="/policy/cancelation">
                                <span className='relative group text-blue-700'>
                                    Cancelation Policy
                                    <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full`}></span>
                                </span>                            
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Home