import FAQ from "@/components/FAQ"
import Layout from "@/components/Layout"
import Head from "next/head"

const Home = () => {

    return (
        <>
            <Layout navColor="stone-800">
                <>
                    <Head>
                        <link rel="canonical" href="https://nicolemcdonaldactingcoach.vercel.app/faq" />
                    </Head>
                    <FAQ />
                </>
            </Layout>
        </>
    )
}

export default Home