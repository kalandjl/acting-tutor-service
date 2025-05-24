import { motion } from "framer-motion";
import Image from "next/image";
import { nunito, oswald, oswaldBold } from "./fonts";
import Layout from "@/components/Layout";

const Home = () => {
    return (
        <>
            <Layout navColor="stone-800">
                <section id="hero">
                    <div id="hero-inner" className="grid grid-cols-7 grid-flow-col h-screen">
                        {/* Name and description */}
                        <div id="hero-section-1" className="bg-stone-300 h-full col-span-4 pt-32 pr-20">
                            <div id="text-section" className="grid gap-10 place-items-center">
                                <div className="w-full pl-10">
                                    <h1 className={`text-6xl ${oswaldBold.className} text-sky-950`}>NICOLE MCDONALD ACTING</h1>
                                </div>
                                <div className="w-full pl-10">
                                    <p className={`${nunito.className} h-max text-sky-950`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>

                            </div>
                        </div>
                        {/* Hero Image */}
                        <div id="hero-section-3" className="col-span-3 overflow-hidden">
                            <div className="relative" style={{ width: 800, height: 450 }}>
                                <Image
                                src="https://images.unsplash.com/photo-1561264974-153c4dacddd2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Hero Image"
                                width={800}
                                height={450}
                                className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Home