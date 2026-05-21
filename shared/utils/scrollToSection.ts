import { getLenis } from "../lib/lenis";

export const scrollToSection = (target: string) => {
     const lenis = getLenis();

    if (!lenis) return;

    lenis.scrollTo(target, {
        duration: 2.9,
    });
};