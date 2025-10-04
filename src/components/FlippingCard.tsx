// src/app/components/FlippingCard.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

// Define the types for the props
interface CardProps {
  title: string;
  bgColor: string;
  subcategories: { name: string; href: string }[];
}

export default function FlippingCard({ title, bgColor, subcategories }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        {/* Card Front */}
        <div
          className="card-face card-front flex items-center justify-center p-6"
          style={{ backgroundColor: bgColor }}
        >
          <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
        </div>

        {/* Card Back */}
        <div
          className="card-face card-back flex flex-col items-center justify-center p-6"
          style={{ backgroundColor: bgColor }}
        >
          <h4 className="text-xl font-bold text-white mb-4">Subcategories</h4>
          <ul className="list-none text-center">
            {subcategories.map((sub, index) => (
              <li key={index} className="mb-2">
                <Link href={sub.href} className="text-white hover:underline">
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}