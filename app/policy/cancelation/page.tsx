import Layout from "@/components/Layout"

const Home = () => {

    return (
        <>
            <Layout navColor="stone-800">
                <section className="grid xl:px-96 lg:px-64 md:px-48 place-items-center min-h-screen">
                    <div className="h-screen mt-10">
                        <div id="header-wrap" className="py-10 grid place-items-center text-center">
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
                </section>
            </Layout>
        </>
    )
}

export default Home