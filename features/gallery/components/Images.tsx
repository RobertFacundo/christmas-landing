"use client"
import Image from "next/image";
import { galleryImages } from "@/shared/constants/images";

const Images = () => {

    return (
        <div className="image-animation flex flex-row items-center justify-center md:ml-1 ml-5 mt-3 gap-4 mr-5">
            {galleryImages.map((image) => (
                <div
                    key={image.alt}
                    className="gallery-image overflow-hidden rounded-xl z-50"
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={420}
                        sizes="(max-width: 768px) 220px, 300px"
                        className="object-cover transition-transform duration-500 hover:scale-105 z-50"
                    />
                </div>
            ))}
        </div>
    )
};

export default Images;