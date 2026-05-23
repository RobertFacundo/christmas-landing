"use client"

import * as THREE from "three"

type Params = {
    geometry: THREE.BufferGeometry
    renderer: THREE.WebGLRenderer
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    worldHeight: number
    count: number
}

export const useSnowAnimation = ({
    geometry,
    renderer,
    scene,
    camera,
    worldHeight,
    count,
}: Params) => {
    const clock = new THREE.Clock()

    const animate = () => {
        requestAnimationFrame(animate)

        const elapsed = clock.getElapsedTime()
        const pos = geometry.attributes.position.array as Float32Array

        for (let i = 0; i < count; i++) {
            const i3 = i * 3

            pos[i3 + 1] -= 0.009

            if (pos[i3 + 1] < -worldHeight / 2) {
                pos[i3 + 1] = worldHeight / 2
                pos[i3 + 0] = (Math.random() - 0.5) * 10
                pos[i3 + 2] = (Math.random() - 0.5) * 6
            }

            pos[i3 + 0] += Math.sin(elapsed + i) * 0.0008
        }

        geometry.attributes.position.needsUpdate = true

        renderer.render(scene, camera)
    }

    animate()
}