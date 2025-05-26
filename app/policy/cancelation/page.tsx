import Layout from "@/components/Layout"

const Home = () => {

    return (
        <>
            <Layout navColor="stone-800">
                <section className="grid xl:px-96 lg:px-64 md:px-48 place-items-center">
                    <div id="header-wrap" className="py-10 w-max grid place-items-center transition ease-in-out hover:scale-105">
                        <h1 className="md:text-4xl text-2xl font-bold">
                            Cancellation Policy
                        </h1>
                    </div>
                    <div id="policy-wrap" className="transition ease-in-out hover:scale-105 text-center">
                        <p className="font-semibold">
                            Out of respect for your coach, please note that cancellations made within twelve (12) hours of your scheduled coaching session will be subject to a $25 cancellation fee. Cancellations made within one (1) hour will be subject to the full session fee.
                        </p>
                    </div>

                </section>
            </Layout>
        </>
    )
}

export default Home