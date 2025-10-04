// src/app/components/ProcessFlow.tsx
'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { Gear } from './Gear';

// ... (You can define your steps data here if you want)

export default function ProcessFlow() {
  // For simplicity, we can reuse the same steps or define new ones
  const steps = [
    { title: 'Examination Notifications', color: '#4285F4', rotationSpeed: 1 },
    { title: 'Apply Online', color: '#34A853', rotationSpeed: -1 },
    { title: 'Written Results', color: '#FBBC05', rotationSpeed: 1 },
    { title: 'Final Results', color: '#EA4335', rotationSpeed: -1 },
  ];
  
  return (
    <div className="w-full h-[500px] bg-gray-900">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          {steps.map((step, index) => (
             <group key={index} position={[-4.5 + index * 3, 0, 0]}>
               <Gear position={[0, 0, 0]} rotationSpeed={step.rotationSpeed} color={step.color} />
               <Text position={[0, -2, 0]} fontSize={0.5} color="white" anchorX="center">
                 {step.title}
               </Text>
             </group>
          ))}
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}