"use client"
import Image from "next/image"
import heroBackground from '@/shared/assets/heroBackground.jpg'
import SectionContent from "@/shared/components/SectionContent";
import TornDivider from "@/shared/components/TornDivider";
import divider46 from '@/shared/assets/59.png'
import useHeroAnimation from "../hooks/useHeroAnimation";
import { useRef } from "react";

const Background = () => {
  const container = useRef<HTMLElement>(null);
  useHeroAnimation(container);
  return (
    <section
    ref={container}
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
          md:w-[80%]
          w-[97%]
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
          className="min-h-screen"
        />
      </div>
      <TornDivider dividerImage={divider46} />
    </section>
  )
};

export default Background;