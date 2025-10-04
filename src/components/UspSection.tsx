// src/app/components/UspSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const uspData = [
  {
    title: 'IntelliDigest',
    description: 'Instantly summarizes long documents into key points using AI, saving you hours of reading.',
  },
  {
    title: 'AI Eligibility Checker',
    description: 'Get instant YES/NO answers on your exam eligibility and ask general questions 24/7 from our smart chatbot.',
  },
  {
    title: 'Application Gateway',
    description: 'A trusted, one-click dashboard that takes you directly to the official website to fill out your application form.',
  },
  {
    title: 'Secure Document Vault',
    description: 'A personal digital locker to securely store your documents for automatic fetching during the form-filling process.',
  },
];

function UspRow({ title, description }: { title: string; description: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-b border-gray-700 py-6 cursor-pointer"
    >
      <AnimatePresence>
        {!isHovered ? (
          <motion.h3
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-semibold text-white"
          >
            {title}
          </motion.h3>
        ) : (
          <motion.p
            key="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-300"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function UspSection() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image */}
        <div className="flex justify-center">
          <Image
            src="/usp.png"
            alt="Feature Illustration"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Right Column: Interactive List */}
        <div>
          {uspData.map((item) => (
            <UspRow key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}