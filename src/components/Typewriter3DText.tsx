// src/app/components/Typewriter3DText.tsx
'use client';


import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState, useEffect, useRef } from 'react'; // <-- Add useRef here
import * as THREE from 'three'; // <-- Add this line

interface Typewriter3DTextProps {
  text: string;
  position: [number, number, number];
  onClick: () => void;
  color?: string;
}

export function Typewriter3DText({ text, position, onClick, color = '#ffffff' }: Typewriter3DTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    if (text) {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(intervalId);
        }
      }, 100); // Typing speed
      return () => clearInterval(intervalId);
    }
  }, [text]);

  const textRef = useRef<any>(null);
  useFrame(() => {
    if (textRef.current) {
        // Subtle hover animation
        textRef.current.scale.x = THREE.MathUtils.lerp(textRef.current.scale.x, isHovered ? 1.2 : 1, 0.1);
        textRef.current.scale.y = THREE.MathUtils.lerp(textRef.current.scale.y, isHovered ? 1.2 : 1, 0.1);
        textRef.current.scale.z = THREE.MathUtils.lerp(textRef.current.scale.z, isHovered ? 1.2 : 1, 0.1);
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.6}
      color={color}
      anchorX="center"
      anchorY="middle"
      onClick={onClick}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {displayedText}
    </Text>
  );
}