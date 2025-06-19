"use client"
import { ArrowDown } from "lucide-react";
import { FC, useEffect, useState } from "react";

interface Props {
    navAdjust: boolean
}

const ActionArrow: FC<Props> = (props) => {
    
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleArrowClick = () => {

        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHasScrolled(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div id="arrow" className={`absolute bottom-0 h-${props.navAdjust ? "32" : "20"} grid place-items-center`}>
                <ArrowDown 
                    onClick={handleArrowClick}
                    stroke="#ffffff" 
                    className={`h-12 w-8 hover:cursor-pointer hover:scale-110 ease-in-out transition ${!hasScrolled ? "animate-bounce" : "opacity-0"}`} 
                />
            </div>
        </>
    )
}

export default ActionArrow