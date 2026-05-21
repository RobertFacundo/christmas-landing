import Image from "next/image"
import christmasImage from "@/shared/assets/aboutImage.jpg"

const AboutImage = () => {
    return (
        <div className="about-image absolute right-0 top-1/2 -translate-y-1/2 mr-15">
            <Image
                src={christmasImage}
                alt="christmas image"
                className="about-image-content w-[400px] object-contain rounded-2xl"
            />
        </div>
    )
};

export default AboutImage;