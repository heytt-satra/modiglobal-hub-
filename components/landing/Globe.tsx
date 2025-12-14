"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
    const earthRef = useRef<THREE.Mesh>(null!);

    useFrame(({ clock }) => {
        earthRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    });

    const texture = useMemo(() => {
        // Procedural grid texture for "Cyber" look
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const context = canvas.getContext('2d');
        if (context) {
            context.fillStyle = '#050505'; // Ocean
            context.fillRect(0, 0, 512, 512);

            context.strokeStyle = '#202020';
            context.lineWidth = 2;
            context.beginPath();
            // Draw grid
            for (let i = 0; i < 512; i += 32) {
                context.moveTo(i, 0); context.lineTo(i, 512);
                context.moveTo(0, i); context.lineTo(512, i);
            }
            context.stroke();

            // Random "Cities"
            context.fillStyle = '#3b82f6';
            for (let i = 0; i < 20; i++) {
                const x = Math.random() * 512;
                const y = Math.random() * 512;
                context.beginPath();
                context.arc(x, y, 4, 0, Math.PI * 2);
                context.fill();
            }
        }
        return new THREE.CanvasTexture(canvas);
    }, []);

    return (
        <Sphere ref={earthRef} args={[1, 64, 64]} scale={2.5}>
            <meshStandardMaterial
                map={texture}
                metalness={0.6}
                roughness={0.4}
                emissive="#000000"
                envMapIntensity={0.5}
            />
        </Sphere>
    );
}

function Atmosphere() {
    return (
        <Sphere args={[1, 64, 64]} scale={2.65}>
            <meshBasicMaterial
                color="#3b82f6"
                transparent
                opacity={0.15}
                side={THREE.BackSide}
            />
        </Sphere>
    );
}

export function Globe() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full opacity-60">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <group rotation={[0.3, 0, 0.2]}>
                    <Earth />
                    <Atmosphere />
                </group>
            </Canvas>
        </div>
    );
}
