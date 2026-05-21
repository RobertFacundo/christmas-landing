"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const useHeroAnimation = (
    container: React.RefObject<HTMLElement | null>
) => {
    useGSAP(() => {
        if(!container.current)return;
        
        const q = gsap.utils.selector(container);
        const tl = gsap.timeline();

        tl.from(q(".section-tag"), {
            opacity: 0,
            x: -130,
            duration: 0.8,
            ease: "power3.out",
        })

            .from(q(".section-title"), {
                opacity: 0,
                x: -160,
                duration: 1.2,
                ease: "power3.out",
            }, "-=0.4")

            .from(q(".section-description"), {
                opacity: 0,
                x: -140,
                duration: 1,
                ease: "power3.out",
            }, "-=0.7")

            .from(q(".section-button-wrapper"), {
                opacity: 0,
                x: -120,
                duration: 0.8,
                ease: "power3.out",
            }, "-=0.6");
    })
};

export default useHeroAnimation;