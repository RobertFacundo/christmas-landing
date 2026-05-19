const ContactContent = () => {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 text-white gap-10">
            <span className="tracking-[0.3em] uppercase text-sm text-red-700">
                - Contact
            </span>

            <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl text-gray-900">
                Let’s connect
            </h1>

            <p className="max-w-[500px] text-gray-600 font-[family-name:var(--font-body)] leading-relaxed">
                If you want to collaborate, build something creative, or simply share ideas,
                feel free to reach out. Whether it's a project, a partnership, or just a conversation,
                I’m always open to connecting through any of these platforms.
            </p>
        </div>
    );
};

export default ContactContent;