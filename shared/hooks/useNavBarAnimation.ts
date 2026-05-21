"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const useNavBarAnimation = (
    container: React.RefObject<HTMLElement | null>
) => {
    useGSAP(() => {
        if (!container.current) return;

        const q = gsap.utils.selector(container)

        const tl = gsap.timeline();

        tl.from(q(".logo"), {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power3.out"
        })
            .from(q(".link"), {
                opacity: 0,
                scale: 0.8,
                stagger:0.1,
                y: -40,
                duration: 1.3,
                ease: "power3.out"
            },"-=0.6")
    }, { scope: container })
}

export default useNavBarAnimation;