// src/app/components/GearsProcess.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Cog } from 'lucide-react';

type ProcessStep = {
  label: string;
  description: string;
  colors: {
    from: string;
    to: string;
    shadow: string;
    teeth: string;
  };
  size: string;
  rotationDuration: number;
};

const processSteps: ProcessStep[] = [
  {
    label: "Examination Notifications",
    description: "Initial announcements of examination opportunities",
    colors: { from: "from-blue-500", to: "to-blue-600", shadow: "shadow-blue-500/40", teeth: "text-blue-900/80" },
    size: "w-32 h-32 md:w-36 md:h-36",
    rotationDuration: 12,
  },
  {
    label: "Recruitment Advertisements",
    description: "Advertisements for job openings",
    colors: { from: "from-sky-400", to: "to-sky-500", shadow: "shadow-sky-400/40", teeth: "text-sky-900/80" },
    size: "w-28 h-28 md:w-32 md:h-32",
    rotationDuration: 10,
  },
  {
    label: "Apply Online",
    description: "Candidates submit their applications online",
    colors: { from: "from-green-400", to: "to-green-500", shadow: "shadow-green-400/40", teeth: "text-green-900/80" },
    size: "w-40 h-40 md:w-44 md:h-44",
    rotationDuration: 15,
  },
  {
    label: "Admit Cards",
    description: "Candidates receive their admit cards for assessments",
    colors: { from: "from-lime-400", to: "to-lime-500", shadow: "shadow-lime-400/40", teeth: "text-lime-900/80" },
    size: "w-24 h-24 md:w-28 md:h-28",
    rotationDuration: 9,
  },
  {
    label: "Written Results",
    description: "Results of written examinations are announced",
    colors: { from: "from-yellow-400", to: "to-yellow-500", shadow: "shadow-yellow-400/40", teeth: "text-yellow-900/80" },
    size: "w-32 h-32 md:w-36 md:h-36",
    rotationDuration: 11,
  },
  {
    label: "Interviews",
    description: "Candidates participate in interviews",
    colors: { from: "from-orange-400", to: "to-orange-500", shadow: "shadow-orange-400/40", teeth: "text-orange-900/80" },
    size: "w-28 h-28 md:w-32 md:h-32",
    rotationDuration: 13,
  },
  {
    label: "Final Results",
    description: "Final results are announced, determining success",
    colors: { from: "from-red-500", to: "to-red-600", shadow: "shadow-red-500/40", teeth: "text-red-900/80" },
    size: "w-36 h-36 md:w-40 md:h-40",
    rotationDuration: 14,
  },
];

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const textChars = Array.from(text);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.p
      className="mt-2 text-sm text-gray-400 max-w-[200px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {textChars.map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const GearsProcess: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-16 lg:gap-x-4">
          {processSteps.map((step, index) => (
            <div
              key={step.label}
              className="flex flex-col items-center text-center basis-1/2 md:basis-1/3 lg:basis-auto"
            >
              <motion.div
                className="relative flex items-center justify-center"
                style={{ height: '176px', width: '176px' }} // Max size container
                animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: step.rotationDuration,
                }}
              >
                {/* 3D Gear structure */}
                <div className={`relative flex items-center justify-center ${step.size}`}>
                  {/* Background Glow */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.colors.from} ${step.colors.to} opacity-30 blur-xl ${step.colors.shadow}`}></div>
                  
                  {/* Teeth Layer (Back) */}
                  <Cog className={`absolute w-full h-full ${step.colors.teeth}`} style={{ transform: 'scale(1.02)' }} strokeWidth={1}/>
                  
                  {/* Main Gear Disc */}
                  <div className={`absolute inset-[6%] rounded-full bg-gradient-to-br ${step.colors.from} ${step.colors.to} shadow-lg`}></div>
                  
                  {/* Inner Recess */}
                  <div className="absolute inset-[18%] rounded-full bg-gray-800/80 shadow-inner"></div>
                  
                  {/* Center Hole with Border */}
                  <div className="absolute w-[20%] h-[20%] rounded-full bg-gray-900 border-2 border-gray-700"></div>
                </div>
              </motion.div>
              
              <div className="mt-4">
                <h3 className="text-lg font-bold text-white">{step.label}</h3>
                <TypewriterText text={step.description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};