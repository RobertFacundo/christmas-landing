import SectionContent from "@/shared/components/SectionContent";
import Image from "next/image";
import christmasImage from "@/app/aboutImage.jpg"

const About = () => {
    return (
        <section id="about" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#07150d] via-[#0f2b1d] to-[#041109]" >
            <div
                className=" absolute top-0 right-0 h-[800px] w-[500px] rounded-full bg-green-400/20 blur-3xl"
            />
            <div className="relative">
                <SectionContent
                    tag="- About Us"
                    title="Tradition, love, happiness"
                    description="More than 10 years sharing..."
                    buttonText="Get to know us"
                />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 mr-15">
                <Image
                    src={christmasImage}
                    alt="christmas image"
                    className="w-[400px] object-contain rounded-2xl"
                />
            </div>
        </section>
    )
};

export default About;