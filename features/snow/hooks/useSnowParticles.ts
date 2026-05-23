"use client"

import * as THREE from "three"
import snow1 from "@/shared/assets/snow2.png"

type Params = {
    scene: THREE.Scene | null
}

export const useSnowParticles = ({ scene }: Params) => {
    const worldHeight = 12

    const loader = new THREE.TextureLoader()
    const texture = loader.load(snow1.src)

    const count = 3000

    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
        const i3 = i * 3

        positions[i3 + 0] = (Math.random() - 0.5) * 20
        positions[i3 + 1] = Math.random() * worldHeight + worldHeight / 2
        positions[i3 + 2] = (Math.random() - 0.5) * 6
    }

    geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
    )

    const material = new THREE.PointsMaterial({
        size: 0.8,
        map: texture,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    })

    const points = new THREE.Points(geometry, material)

    scene?.add(points)

    return {
        geometry,
        material,
        points,
        worldHeight,
        count,
    }
}