// src/app/components/GlowingInfoBox.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BoxProps {
  title: string;
  description: string;
  glowColor: string; // e.g., 'shadow-cyan-500/50'
}

// Reusable Typewriter component
const TypewriterText = ({ text }: { text: string }) => (
  <motion.span>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.05, delay: i * 0.05 }}
      >
        {char}
      </motion.span>
    ))}
  </motion.span>
);

export default function GlowingInfoBox({ title, description, glowColor }: BoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => alert(`You clicked on ${title}`)}
      className={`relative p-8 h-48 flex flex-col justify-center items-center rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 cursor-pointer overflow-hidden transition-all duration-300 hover:border-gray-500`}
    >
      {/* Glowing effect */}
      <motion.div
        className={`absolute -inset-2 rounded-full blur-xl opacity-0 transition-opacity duration-500 ${glowColor}`}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      <AnimatePresence>
        {!isHovered ? (
          <motion.h3
            key="title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-white text-2xl font-bold text-center"
          >
            <TypewriterText text={title} />
          </motion.h3>
        ) : (
          <motion.p
            key="description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-gray-300 text-center"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}