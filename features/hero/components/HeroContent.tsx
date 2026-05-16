const HeroContent = () => {
    return (
        <div
            className=" relative z-10 flex min-h-screen max-w-[650px] flex-col justify-center gap-10 px-8 md:px-20 text-white"
        >
            <span className="tracking-[0.3em] uppercase text-sm text-red-300 ">
                Christmas Collection 2026
            </span>

            <h1
                className=" font-[family-name:var(--font-heading)] text-5xl leading-tight md:text-7x "
            >
                Christmas magic starts here
            </h1>

            <p
                className=" max-w-[500px] text-base leading-relaxed text-gray-300 md:text-lg font-[family-name:var(--font-body)] tracking-wider"
            >
                Discover a magical collection of festive decorations,
                cozy winter essentials, and timeless holiday gifts
                crafted to make every celebration unforgettable.
            </p>

            <div className="flex gap-4">
                <button
                    className="rounded-full border border-white/20 bg-gradient-to-b from-white/20 to-white/5 px-8 py-4 text-sm tracking-wide 
                    text-white backdrop-blur-lg shadow-lg transition-all duration-300 hover:scale-102 hover:border-white/40 cursor-pointer 
                    "
                >
                    See Collection
                </button>
            </div>
        </div>
    )
};

export default HeroContent;