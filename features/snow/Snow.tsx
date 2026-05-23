"use client"
import { useRef } from "react";
import useSnowEffect from "./hooks/useSnowEffect";

const Snow = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useSnowEffect(canvasRef);
    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-1"
        />
    )
};

export default Snow;