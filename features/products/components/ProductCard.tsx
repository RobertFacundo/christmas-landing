"use client"
import { IconType } from "react-icons";

type ProductType = {
    icon: IconType,
    h1: string,
    p: string,
}

interface Props {
    product: ProductType
}

const ProductCard = ({ product }: Props) => {
    const Icon = product.icon;

    return (
        <div className="flex w-[280px] flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:translate-y-2 hover:border-red-300/30 hover:bg-white/10">
            <Icon className="text-5xl text-white" />
            <h1 className="font-[family-name:var(--font-heading)] text-2xl text-white font-bold tracking-wider">{product.h1}</h1>
            <p className="font-[family-name:var(--font-body)] text-s leading-relaxed text-gray-300">{product.p}</p>
            <button className="mt-2 w-fit rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white transition-all duration-300 hover:bg-white/20 cursor-pointer">
                See more
            </button>
        </div>
    )
};

export default ProductCard;