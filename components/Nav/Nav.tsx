import pages from "@/res/links";
import { FC } from "react";

 
interface Props {

}

const Nav: FC<Props> = (props) => {

    return (
        <>
            <nav id="nav" className=" bg-stone-800 lg:px-32 md:px-20 sm:px-10">
                <div id="nav-inner" className="flex justify-between min-h-24 h-24">
                    <div id="logo" className="h-full p-4 w-24">
                        <div id="mock-logo" className="bg-red-500 opacity-20 rounded-md h-full w-full"></div>
                    </div>
                    <div id="links" className="grid gap-16 grid-flow-col h-full">
                        {pages.map((page, i) => (
                            <div key={i} className="text-stone-100 font-bold h-full grid place-items-center hover:cursor-pointer">
                                <div id="link-text-inner" className="grid relative group">
                                    {page}
                                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-stone-200 transition-all duration-300 group-hover:w-full"></span>
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