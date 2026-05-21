import { socialLinks } from "@/shared/constants/socialLinks";

const SocialLinks = () => {
    return (
        <div className="social-link  relative z-10 flex flex-wrap items-center justify-center gap-6 pb-8">
            {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                    <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-red-300 hover:text-red-700 transition"
                    >
                        <Icon />
                        {item.label}
                    </a>
                );
            })}
        </div>
    );
};

export default SocialLinks;