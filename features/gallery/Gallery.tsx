import SectionContent from "@/shared/components/SectionContent";
import Images from "./components/Images";

const Gallery = () => {
    return (
        <section id="gallery" className="relative flex flex-row min-h-screen overflow-visible bg-gradient-to-br from-[#07150d] via-[#0f2b1d] to-[#041109]">
            <div className="relative">
                <SectionContent
                    tag="- Ambience that inspires"
                    title="Ideas to every corner of your home"
                    description="Allow yourself to let go with our combinations and create spaces filled with warm and christmas spirit"
                    buttonText="See Gallery"
                />
            </div>

            <Images />
            <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-b from-transparent via-[#1a2a1d]/60 to-[#471212] pointer-events-none" />
        </section>
    )
};

export default Gallery;