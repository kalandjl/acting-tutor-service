"use client"
import { Bars3 } from "@/app/icons";
import pages from "@/res/links";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import Logo from "@/public/icon.png"
import { lato } from "@/app/fonts";
import { XIcon } from "lucide-react";

 
interface Props {
    color?: string
}

const Nav: FC<Props> = (props) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <nav id="nav" className={`${props.color ? `bg-${props.color}` : ""} lg:px-32 md:px-20 sm:px-10`}>
                <div id="nav-inner" className="flex justify-between min-h-24 h-24">
                    <div id="logo" className="h-full p-4 w-24">
                        <Link href="/" className="">
                            <div className="relative h-full">
                                <Image src={Logo} layout="fill" alt="" className="absolute inset-0 brightness-0 invert" />
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div id="sidebar-btn" className="grid md:hidden w-32 h-full hover:cursor-pointer place-items-center" 
                        onClick={() => setSidebarOpen(true)}>
                            {Bars3}
                        </div>
                        <div id="links" className="gap-16 grid-flow-col h-full hidden md:grid">
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
                </div>
            </nav>
            {/* MOBILE SIDEBAR */}
            <div
            id="sidebar"
            className={`${sidebarOpen ? "z-20" : "hidden"} px-10 -z-10 py-5 fixed inset-0 bg-stone-800 scroll`}
            >

            <div className="absolute top-0 -bottom-10 right-0 left-0 bg-black opacity-80 z-40"></div>

            {/* Inner Content */}
            <div id="inner" className="h-full relative z-50">
                <p className="text-white hover:scale-105 hover:cursor-pointer" onClick={() => setSidebarOpen(false)}>
                    <XIcon stroke="#ffffff" />
                </p>

                <div id="links" className="grid gap-3 pt-10">
                {pages.map((link, i) => (
                    <Link key={i} href={link.href} className={`text-white ${lato.className} text-lg`}>
                        {link.title}
                    </Link>
                ))}
                </div>
            </div>
            </div>
        </>
    )
}

export default Nav