import Image from "next/image";
import HeadshotImage from "@/public/headshot.jpg"
import { FC } from "react";
import Link from "next/link";

interface Props {

}

const AboutSection: FC<Props> = (props) => {

    return (
        <>
            <section id="about-section" className="h-128 grid grid-flow-col grid-cols-7 bg-sky-500">
                <div id="image" className="col-span-3 grid place-items-center h-full">
                    <div className="flex justify-center md:justify-center">
                        <Image
                        src={HeadshotImage}
                        alt="Nicole's Headshot"
                        className="w-96 h-96 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-2 border-stone-300 transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
                <div id="text" className="col-span-4 bg-sky-500 px-10 pb-5 pt-20 text-white grid text-lg font-semibold h-full place-items-center">
                    <p>
                        Nicole is a seasoned performer and dedicated educator with over 25 years of experience in theatre arts. A versatile actor, accomplished singer, and trained dancer, she brings a dynamic, well-rounded approach to her teaching. After earning her Master’s degree in Theatre, Nicole established herself in Vancouver’s vibrant arts education scene, teaching at a number of prestigious private schools. She currently serves as the Head of Theatrical Arts at a leading independent school in Vancouver, where she oversees the drama curriculum, directs mainstage productions, and mentors aspiring young performers.
                    </p>
                    <div id="action-btn" className="w-full">
                        <Link href="/about">
                            <button className="w-30 border-2 border-white rounded-md px-5 py-3 transition ease-in-out hover:scale-105 hover:cursor-pointer grid place-items-center">
                                About
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </> 
    )
}

export default AboutSection