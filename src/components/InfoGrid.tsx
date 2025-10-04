// src/app/components/InfoGrid.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA for the grid ---
const infoData = [
  {
    title: 'Examination Notifications',
    description: 'Initial announcements of examination opportunities.',
    glowColor: 'shadow-blue-500/50',
  },
  {
    title: 'Apply Online',
    description: 'Candidates submit their applications online.',
    glowColor: 'shadow-green-500/50',
  },
  {
    title: 'Admit Cards',
    description: 'Candidates receive their admit cards for assessments.',
    glowColor: 'shadow-yellow-500/50',
  },
  {
    title: 'Written Results',
    description: 'Results of written examinations are announced.',
    glowColor: 'shadow-purple-500/50',
  },
  {
    title: 'Interviews',
    description: 'Candidates participate in interviews.',
    glowColor: 'shadow-orange-500/50',
  },
  {
    title: 'Final Results',
    description: 'Final results are announced, determining success.',
    glowColor: 'shadow-red-500/50',
  },
];

// --- SUB-COMPONENT: A single glowing box ---
function GlowingInfoBox({ title, description, glowColor }: { title: string; description: string; glowColor: string; }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => alert(`You clicked on ${title}`)}
      className="relative p-8 h-48 flex flex-col justify-center items-center rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 cursor-pointer overflow-hidden transition-all duration-300 hover:border-gray-500"
    >
      <motion.div
  className={`absolute -inset-2 rounded-full blur-xl opacity-0 transition-opacity duration-500 ${glowColor}`}
  animate={{ opacity: isHovered ? 1 : 0 }}
/>

      <AnimatePresence>
        {!isHovered ? (
          <motion.h3
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-white text-2xl font-bold text-center"
          >
            {title}
          </motion.h3>
        ) : (
          <motion.p
            key="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-300 text-center"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


// --- MAIN COMPONENT: The grid that uses the box ---
export default function InfoGrid() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/6boxbg.jpeg")' }}
      ></div>
      
      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-75"></div> {/* Adjust opacity for desired darkness */}

      {/* Content (the actual grid of boxes) */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoData.map((item, index) => (
            <GlowingInfoBox
              key={index}
              title={item.title}
              description={item.description}
              glowColor={item.glowColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
