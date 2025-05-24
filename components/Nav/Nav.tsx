import pages from "@/res/links";
import Link from "next/link";
import { FC } from "react";

 
interface Props {
    color?: string
}

const Nav: FC<Props> = (props) => {

    return (
        <>
            <nav id="nav" className={`${props.color ? `bg-${props.color}` : ""} lg:px-32 md:px-20 sm:px-10`}>
                <div id="nav-inner" className="flex justify-between min-h-24 h-24">
                    <div id="logo" className="h-full p-4 w-24">
                        <Link href="/" className="">
                            <div id="mock-logo" className="bg-red-500 opacity-20 rounded-md h-full w-full transition ease-in-out hover:scale-105 hover:cursor-pointer"></div>
                        </Link>
                    </div>
                    <div id="links" className="grid gap-16 grid-flow-col h-full">
                        {pages.map((page, i) => (
                            <div key={i} className={`text-stone-100 font-bold h-full grid place-items-center hover:cursor-pointer`}>
                                <div className="py-3 group">
                                    <div className={`
                                        ${page.title === 
                                        "Book" 
                                        ? 
                                        "border-2 border-stone-100 hover:bg-stone-200 hover:text-stone-800 transition ease-in-out hover:scale-105"
                                        : 
                                        ""}
                                        px-3 py-1 rounded-sm`}>
                                        <Link href={page.href}>
                                            <div id="link-text-inner" className="grid relative transition ease-in-out group-hover:scale-105">
                                                <p className="text-md">
                                                    {page.title}
                                                </p>
                                                <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-stone-200 transition-all duration-300 group-hover:w-full
                                                ${page.title === "Book" ? "hidden" : ""}`}></span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav