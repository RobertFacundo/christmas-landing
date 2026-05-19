import ContactContent from "./ContactContent";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import backgroundImage from '@/app/9.png'

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#471212] via-[#481313] to-[#471212]"
        >
            <Image
                src={backgroundImage}
                alt="paper texture"
                fill
                className="object-contain mt-10 pointer-events-none"
            />
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-16">
                <ContactContent />
                <SocialLinks />
            </div>
        </section>
    )
};

export default Contact;