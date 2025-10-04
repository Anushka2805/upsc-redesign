// src/app/components/Gear.tsx
'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GearProps {
  position: [number, number, number];
  rotationSpeed: number;
  color: string;
  gearScale?: number;
}

export function Gear({ position, rotationSpeed, color, gearScale = 1 }: GearProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += rotationSpeed * 0.01;
    }
  });

  const gearGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const radius = 1;
    const innerRadius = 0.6;
    const teethCount = 16;
    const toothDepth = 0.2;
    const toothWidth = (Math.PI * 2) / teethCount / 2;

    for (let i = 0; i < teethCount; i++) {
      const angle = (i / teethCount) * Math.PI * 2;
      const nextAngle = ((i + 0.5) / teethCount) * Math.PI * 2;
      shape.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
      shape.lineTo((radius + toothDepth) * Math.cos(nextAngle), (radius + toothDepth) * Math.sin(nextAngle));
      shape.lineTo(radius * Math.cos(nextAngle + toothWidth), radius * Math.sin(nextAngle + toothWidth));
    }
    shape.closePath();

    const holePath = new THREE.Path();
    holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
    shape.holes.push(holePath);

    const extrudeSettings = {
      steps: 1,
      depth: 0.3,
      bevelEnabled: false,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  return (
    <mesh ref={meshRef} position={position} scale={gearScale}>
      <primitive object={gearGeometry} attach="geometry" />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}