import { lato, latoLite, nunito, oswald, shoulders } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import pages from "@/res/links"

interface Props {
    
}


const Footer: FC<Props> = (props) => {

    return (
        <>
            <footer id="footer" className="px-4 sm:px-10 grid py-5 gap-5">
                <div id="links" className="sm:flex hidden gap-3">
                    {pages.map((page, i) => (
                        <Link href={page.href} key={i} className="hover:scale-105 hover:bg-gray-100 transition ease-in-out">
                            <p className={`text-black font-semibold px-4 py-2 rounded-lg transition ${lato.className}`}>
                                {page.title}
                            </p>
                        </Link>
                    ))}
                </div>
                <div id="copyright" className="px-10 w-full text-center">
                <p className={`${latoLite.className} text-sm text-gray-700`}>
                    © {new Date().getFullYear()} Nicole McDonald.{" "}
                </p>
            </div>
            </footer>
        </>
    )
}

export default Footer