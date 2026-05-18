type SectionContentProps = {
    tag: string;
    title: string;
    description: string;
    buttonText: string;
};

const SectionContent = ({
    tag,
    title,
    description,
    buttonText
}: SectionContentProps) => {
    return (
        <div
            className="relative z-10 flex min-h-screen max-w-[650px]
            flex-col justify-center gap-10 px-8 md:px-20 text-white"
        >
            <span className="tracking-[0.3em] uppercase text-sm text-red-300">
                {tag}
            </span>

            <h1
                className="font-[family-name:var(--font-heading)]
                text-5xl leading-tight md:text-7xl"
            >
                {title}
            </h1>

            <p
                className="max-w-[500px] text-base leading-relaxed
                text-gray-300 md:text-lg
                font-[family-name:var(--font-body)]
                tracking-wider"
            >
                {description}
            </p>

            <div className="flex gap-4">
                <button
                    className="
                    rounded-full border border-white/20
                    bg-gradient-to-b from-white/20 to-white/5
                    px-8 py-4 text-sm tracking-wide text-white
                    backdrop-blur-lg shadow-lg
                    transition-all duration-300
                    hover:scale-102 hover:border-white/40
                    cursor-pointer
                    "
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default SectionContent;