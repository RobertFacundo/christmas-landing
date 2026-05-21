"use client";
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "../lib/lenis";

gsap.registerPlugin(ScrollTrigger);

const useLenis = () => {
    useEffect(() => {
        const lenis = getLenis();

        if (!lenis) return;

        lenis.on('scroll', ScrollTrigger.update);

        const update = (time:number)=>{
            lenis.raf(time *1000);
        }

        gsap.ticker.add(update);

        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update)
        };
    }, []);
};

export default useLenis;