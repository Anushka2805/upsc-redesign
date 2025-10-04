// src/app/components/SplashScreen.tsx
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export const SplashScreen = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500); // Animation will last for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // To completely remove the component from the DOM after the animation
  const [isUnmounted, setIsUnmounted] = useState(false);
  useEffect(() => {
    if (isFadingOut) {
      const unmountTimer = setTimeout(() => {
        setIsUnmounted(true);
      }, 1000); // Corresponds to the fade-out animation duration
      return () => clearTimeout(unmountTimer);
    }
  }, [isFadingOut]);

  if (isUnmounted) {
    return null;
  }

  return (
    <div
      className={`splash-screen ${isFadingOut ? 'fade-out' : ''}`}
    >
      <div className="chakra-container">
        <Image
          src="/ashoka-chakra.png"
          alt="Ashoka Chakra"
          width={100}
          height={100}
          className="chakra-image"
        />
      </div>
    </div>
  );
};