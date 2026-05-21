import Lenis from "lenis";

let lenis: Lenis | null = null;

export const getLenis = () => {
    if (typeof window === "undefined") return null;

    if (!lenis) {
        lenis = new Lenis({
            duration: 0.8,
            smoothWheel: true,
        });
    }

    return lenis;
};