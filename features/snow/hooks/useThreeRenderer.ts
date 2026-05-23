"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

type Params = {
    canvasRef: React.RefObject<HTMLCanvasElement | null>
}

const useThreeRenderer = ({ canvasRef }: Params) => {
    const sceneRef = useRef<THREE.Scene | null>(null)
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

    useEffect(() => {
        if (!canvasRef.current) return

        // 🧠 SCENE (contenedor de todo lo 3D)
        const scene = new THREE.Scene()

        // 🎥 CAMERA (visión del mundo)
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.z = 5

        // 🖥️ RENDERER (motor gráfico)
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true,
        })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // 💾 guardar referencias
        sceneRef.current = scene
        cameraRef.current = camera
        rendererRef.current = renderer

        // 🔁 resize handler (CRÍTICO)
        const handleResize = () => {
            if (!cameraRef.current || !rendererRef.current) return

            cameraRef.current.aspect = window.innerWidth / window.innerHeight
            cameraRef.current.updateProjectionMatrix()

            rendererRef.current.setSize(
                window.innerWidth,
                window.innerHeight
            )
        }

        window.addEventListener("resize", handleResize)

        // 🧹 cleanup
        return () => {
            window.removeEventListener("resize", handleResize)
            renderer.dispose()
        }
    }, [canvasRef])

    return {
        sceneRef,
        cameraRef,
        rendererRef,
    }
}

export default useThreeRenderer;