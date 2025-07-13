import Layout from "@/components/Layout"
import Head from "next/head"
import Link from "next/link"

const Home = () => {

    return (
        <>  
            <Head>
                <link rel="canonical" href="https://nicolemcdonaldactingcoach.vercel.app/policy" />
            </Head>
            <Layout navColor="stone-800">
                <section className="grid xl:px-96 lg:px-64 md:px-48 place-items-center min-h-screen mt-10">
                    <div className="h-screen mt-10">
                        <div id="header-wrap" className="pt-10 pb-5 grid place-items-center transition ease-in-out hover:scale-105">
                            <h1 className="md:text-4xl text-2xl font-bold text-center ">
                                Booking Policy
                            </h1>
                        </div>
           
                        <div id="booking-policy">
                            <div id="text-wrap" className="text-center">
                                <div>
                                    <h1 className="font-bold text-lg">Can a parent attend a youth coaching session?</h1>
                                    <p>
                                        For underage actors, a student can be accompanied with their parent for the entire duration of the coaching session.
                                    </p>
                                </div>
                            </div>
                        </div>
                            <div className="h-screen mt-20">
                                <div id="header-wrap" className="py-5 grid place-items-center">
                                    <h1 className="md:text-4xl text-2xl font-bold text-center w-max">
                                        Cancellation Policy
                                    </h1>
                                </div> 
                                <div id="policy-wrap" className="text-center">
                                    <p className="font">
                                        Out of respect for your coach, please note that cancellations made within twelve (12) hours of your scheduled coaching session will be subject to a $25 cancellation fee. Cancellations made within one (1) hour will be subject to the full session fee.
                                    </p>
                                </div>
                            </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Home