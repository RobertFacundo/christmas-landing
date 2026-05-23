
"use client"

import { useSnowParticles } from "./useSnowParticles"
import { useEffect } from "react"
import { useSnowAnimation } from "./useSnowAnimation"
import useThreeRenderer from "@/features/snow/hooks/useThreeRenderer"

const useSnowEffect = (
    canvasRef: React.RefObject<HTMLCanvasElement | null>
) => {
    const { sceneRef, cameraRef, rendererRef } = useThreeRenderer({ canvasRef })

    useEffect(() => {
        if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return

        const { geometry, material, points, worldHeight, count } =
            useSnowParticles({
                scene: sceneRef.current,
            })

        useSnowAnimation({
            geometry,   
            renderer: rendererRef.current,
            scene: sceneRef.current,
            camera: cameraRef.current,
            worldHeight,
            count,
        })

        // 🧹 CLEANUP
        return () => {
            geometry.dispose()
            material.dispose()
        }
    }, [canvasRef, sceneRef, cameraRef, rendererRef])
}

export default useSnowEffect;