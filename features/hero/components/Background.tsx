import Image from "next/image"
import heroBackground from '@/app/heroBackground.jpg'
import HeroContent from "./HeroContent";

const Background = () => {
    return (
         <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
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
        <HeroContent />
      </div>
    </section>
    )
};

export default Background;