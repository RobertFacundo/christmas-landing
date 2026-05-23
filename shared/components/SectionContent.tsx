
type SectionContentProps = {
    tag: string;
    title: string;
    description: string;
    buttonText: string;
    className?: string;
};

const SectionContent = ({
    tag,
    title,
    description,
    buttonText,
    className
}: SectionContentProps) => {

    return (
        <div
            className={`relative z-10 flex ${className}  md:max-w-[650px] max-w-[450px]
            flex-col justify-center md:gap-10 gap-6 px-8 md:px-20 md:ml-3 ml-10 text-white z-10`}
        >
            <span className="section-tag  tracking-[0.3em] uppercase text-sm text-red-300">
                {tag}
            </span>

            <h1
                className="section-title font-[family-name:var(--font-heading)]
                text-5xl leading-tight md:text-7xl z-50"
            >
                {title}
            </h1>

            <p
                className=" section-description max-w-[500px] text-base leading-relaxed
                text-gray-300 md:text-lg
                font-[family-name:var(--font-body)]
                tracking-wider z-50"
            >
                {description}
            </p>

            <div className="section-button-wrapper flex gap-4 section-button-wrapper">
                <button
                    className="
                    rounded-full border border-white/20
                    bg-gradient-to-b from-white/20 to-white/5
                    px-8 py-4 text-sm tracking-wide text-white
                    backdrop-blur-lg shadow-lg
                    transition-all duration-300
                    hover:scale-102 hover:border-white/40
                    cursor-pointer z-50
                    "
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default SectionContent;