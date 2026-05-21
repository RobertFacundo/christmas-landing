"use client"
import { products } from "@/shared/constants/products";
import ProductCard from "./ProductCard";

const Section = () => {

    return (
        <div className="section-container flex flex-col min-h-screen items-center justify-center gap-12 px-6">
            <span className="section-span tracking-[0.3em] uppercase text-sm text-red-300">
                Our favorites
            </span>
            <h1 className="section-title font-[family-name:var(--font-heading)] text-5xl text-white text-center">Find the perfect Gift</h1>
            <div className="product-card  flex flex-wrap justify-center gap-8">
                {products.map(product => (
                    <ProductCard key={product.h1} product={product} />
                ))}
            </div>
        </div>
    )
};

export default Section;