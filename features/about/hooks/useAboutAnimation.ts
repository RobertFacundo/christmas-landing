"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const useAboutAnimation = (
    container: React.RefObject<HTMLElement | null>
) => {
    useGSAP(() => {
        if (!container.current) return;

        const q = gsap.utils.selector(container);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                once: true,
            }
        })

        tl.from(q(".section-tag"), {
            x: -80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        })
            .from(q(".section-title"), {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }, "-=0.5")
            .from(q(".about-image-content"), {
                scale: 1.1,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
            }, "-=0.9")
            .from(q(".section-description"), {
                x: -60,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.6")
            .from(q(".section-button-wrapper"), {
                x: -30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }, "-=0.7")
            
    }, { scope: container })
};

export default useAboutAnimation;