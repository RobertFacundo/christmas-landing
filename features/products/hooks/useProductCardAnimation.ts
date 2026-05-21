"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const useProductCardAnimation = (
    ref: React.RefObject<HTMLDivElement | null>
) => {
    useGSAP(() => {
        if (!ref.current) return;

         gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                y: 40,
                scale: 0.97,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    once: true
                }
            }
        );

    }, { scope: ref });
};

export default useProductCardAnimation;