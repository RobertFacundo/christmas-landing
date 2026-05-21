"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const useProductsAnimation = (
    container: React.RefObject<HTMLElement | null>
) => {
    useGSAP(() => {
        const q = gsap.utils.selector(container);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%"
            }
        });

        tl.from(q(".section-title"), {
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        })

            .from(q(".section-span"), {
                y: 50,
                duration: 1,
                opacity: 0,
                ease: "power3.out"
            }, "-=0.5")
            .from(q(".product-card"), {
                y: 60,
                opacity: 0,
                scale: 0.96,
                stagger: 2.55,
                duration: 0.9,
                ease: "power3.out"
            }, "-=0.9");
    }, { scope: container })
};

export default useProductsAnimation;