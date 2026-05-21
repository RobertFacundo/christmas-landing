"use client"
import TornDivider from "@/shared/components/TornDivider";
import Section from "./components/Section";
import divider46 from '@/shared/assets/59.png'
import { useRef } from "react";
import useProductsAnimation from "./hooks/useProductsAnimation";

const Products = () => {
    const container = useRef<HTMLElement>(null);
    useProductsAnimation(container)
    return (
        <section ref={container} id="products" className=" relative min-h-screen overflow-visible bg-gradient-to-b from-[#571212] via-[#861b1b] to-[#460909]">
            <div className=" absolute top-0 left-0 h-[700px] w-[500px] rounded-full bg-red-400/20 blur-3xl " />
            <Section />
             <TornDivider dividerImage={divider46}/>
        </section>
    )
};

export default Products;