"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const useContactAnimation = (
    container: React.RefObject<HTMLElement | null>
) => {
    useGSAP(() => {
        const q = gsap.utils.selector(container);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 57%"
            }
        });

        tl.from(q(".contact-tag"), {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
        })

            .from(q(".contact-title"), {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: "power3.out",
            }, "-=0.5")

            .from(q(".contact-description"), {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
            }, "-=0.7")

            .from(q(".social-link"), {
                opacity: 0,
                y: 30,
                stagger: 0.12,
                duration: 0.7,
                ease: "power3.out",
            }, "-=0.5");
    }, { scope: container })
};

export default useContactAnimation;
