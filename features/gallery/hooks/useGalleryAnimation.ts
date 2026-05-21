"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const useGalleryAnimation = (
    container: React.RefObject<HTMLElement | null>
) => {
    useGSAP(() => {
        const q = gsap.utils.selector(container);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 77%"
            }
        });

        tl.from(q(".section-title"), {
            opacity: 0,
            x: -150,
            duration: 1.2,
            ease: "power3.out"
        })
            .from(q(".gallery-image"), {
                willChange: "transform",
                opacity:0,
                scale: 0.8,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
            }, "-=0.8")
            .from(q(".section-description"), {
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.8")
            .from(q(".section-tag"), {
                x: -90,
                duration: 1.2,
                ease: "power3.out",
                opacity: 0,
            }, "-=0.4")
            .from(q(".section-button-wrapper"), {
                x: -110,
                duration: 0.9,
                ease: "power3.out",
                opacity: 0
            }, "-=0.8")
    }, { scope: container })
};

export default useGalleryAnimation;