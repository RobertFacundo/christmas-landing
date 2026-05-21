"use client";
import useLenis from "@/shared/hooks/useLenis";

const SmoothScrollProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    useLenis();

    return <>{children}</>
};

export default SmoothScrollProvider;