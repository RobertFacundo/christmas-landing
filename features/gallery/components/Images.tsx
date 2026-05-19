import Image from "next/image";
import { galleryImages } from "@/shared/constants/images";

const Images = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-4 mr-5">
            {galleryImages.map((image) => (
                <div
                    key={image.alt}
                    className="overflow-hidden rounded-xl"
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        className="w-[300px] h-[420px] object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            ))}
        </div>
    )
};

export default Images;