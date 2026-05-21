"use client"
import SectionContent from "@/shared/components/SectionContent";
import TornDivider from "@/shared/components/TornDivider";
import divider from "@/shared/assets/46.png";
import AboutImage from "./components/AboutImage";
import useAboutAnimation from "./hooks/useAboutAnimation";
import { useRef } from "react";

const About = () => {
    const container = useRef<HTMLElement>(null);
    useAboutAnimation(container);

    return (
        <section ref={container} id="about" className="relative min-h-screen overflow-visible bg-gradient-to-br from-[#07150d] via-[#0f2b1d] to-[#041109]" >
            <div
                className=" absolute top-0 right-0 h-[800px] w-[500px] rounded-full bg-green-400/20 blur-3xl"
            />
            <div className="relative">
                <SectionContent
                    tag="- About Us"
                    title="Tradition, love, happiness"
                    description="For more than 10 years we’ve been sharing the magic of Christmas through carefully crafted decorations, warm traditions, and timeless holiday moments designed to bring people together."
                    buttonText="Get to know us"
                    className="min-h-screen"
                />
            </div>
            <AboutImage />
            <TornDivider dividerImage={divider} />
        </section>
    )
};

export default About;