import Image from "next/image"
import heroBackground from '@/app/heroBackground.jpg'
import SectionContent from "@/shared/components/SectionContent";
import TornDivider from "@/shared/components/TornDivider";
import divider46 from '@/app/59.png'

const Background = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-visible"
    >
      {/* Background image */}
      <Image
        src={heroBackground}
        alt="Christmas background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Left gradient */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          w-[80%]
          bg-gradient-to-r
          from-[#2a0909]
          via-[#4c0a0a]/90
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <SectionContent
          tag="Christmas Collection 2026"
          title="Christmas magic starts here"
          description="Discover a magical collection of festive decorations,
                cozy winter essentials, and timeless holiday gifts
                crafted to make every celebration unforgettable.  "
          buttonText="See Collection"
        />
      </div>
      <TornDivider dividerImage={divider46}/>
    </section>
  )
};

export default Background;