"use client"
import { links } from "../constants/navigation";
import { TbChristmasTreeFilled } from "react-icons/tb";
import { useRef } from "react";
import useNavBarAnimation from "../hooks/useNavBarAnimation";
import { scrollToSection } from "../utils/scrollToSection";

const NavBar = () => {
    const container = useRef<HTMLElement>(null);

    useNavBarAnimation(container)
    return (
        <nav ref={container} className="fixed top-0 left-0 w-full z-50 flex flex-row justify-between md:p-6 px-4 py-4 font-[family-name:var(--font-body)]">
            <div className="flex flex-row gap-2 tracking-wide logo">
                <TbChristmasTreeFilled size={26} />
                XmasJoy
            </div>
            <div>
                <ul className="hidden md:flex gap-8 p-2 mr-10 ">
                    {links.map((link) => (
                        <li key={link.href} className="link">
                            <a 
                            href={link.href} 
                            className="tracking-widest md:text-[18px] "
                            onClick={(e)=>{
                                e.preventDefault();
                                scrollToSection(link.href)
                            }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;