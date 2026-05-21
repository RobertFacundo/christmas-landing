"use client"
import ContactContent from "./ContactContent";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import backgroundImage from '@/shared/assets/9.png'
import useContactAnimation from "./hooks/useContactAnimation";
import { useRef } from "react";

const Contact = () => {
    const container = useRef<HTMLDivElement>(null)
    useContactAnimation(container);

    return (
        <section
            ref={container}
            id="contact"
            className="relative min-h-screen overflow-visible bg-gradient-to-br from-[#471212] via-[#481313] to-[#471212]"
        >
            <Image
                src={backgroundImage}
                alt="paper texture"
                width={1400}
                height={1400}
                className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        h-[100%]
        w-auto
        max-w-none
        pointer-events-none
        overflow-visible
    "
            />
            <div className="contact-container relative z-10 flex flex-col items-center justify-center min-h-screen gap-16">
                <ContactContent />
                <SocialLinks />
            </div>
        </section>
    )
};

export default Contact;