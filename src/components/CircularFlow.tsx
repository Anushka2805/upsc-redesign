// src/app/components/CircularFlow.tsx
'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Typewriter3DText } from './Typewriter3DText';
import * as THREE from 'three';

const headings = [
  { text: 'Notifications', color: '#60a5fa' },
  { text: 'Apply Online', color: '#4ade80' },
  { text: 'Admit Cards', color: '#facc15' },
  { text: 'Results', color: '#f87171' },
  { text: 'Interviews', color: '#c084fc' },
  { text: 'Final Selection', color: '#34d399' },
];

function Scene() {
    const groupRef = useRef<THREE.Group>(null);

    // Rotate the entire group
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.002;
        }
    });

    return (
        <group ref={groupRef}>
             {headings.map((item, index) => {
                const angle = (index / headings.length) * Math.PI * 2;
                const radius = 5;
                const x = radius * Math.cos(angle);
                const z = radius * Math.sin(angle);

                return (
                    <Typewriter3DText
                    key={index}
                    text={item.text}
                    position={[x, 0, z]}
                    color={item.color}
                    onClick={() => alert(`You clicked on ${item.text}`)}
                    />
                );
            })}
        </group>
    );
}

export default function CircularFlow() {
  return (
    <div className="w-full h-[600px] bg-gray-900 cursor-pointer">
      <Canvas camera={{ position: [0, 5, 12], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
            <Scene />
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}