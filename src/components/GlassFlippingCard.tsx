// src/app/components/GlassFlippingCard.tsx
'use client';

import Link from 'next/link';
import { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
  items: { text: string; href: string }[];
}

export default function GlassFlippingCard({ title, icon, items }: CardProps) {
  return (
    <div className="card-container">
      <div className="card-inner">

        {/* Card Front */}
        <div className="card-face card-front flex flex-col items-center justify-center p-6 text-center bg-blue-900/20">
          <span className="text-6xl mb-4">{icon}</span>
          <h3 className="text-3xl font-bold text-black text-outline-white">
            {title}
          </h3>
        </div>

        {/* Card Back - Corrected Structure */}
        <div className="card-face card-back p-6 bg-blue-900/20">
          <h4 className="text-2xl font-bold mb-4 text-center text-black text-outline-white">
            Details
          </h4>
          <ul className="space-y-2 flex flex-col justify-evenly h-full">
            {items.map((item, index) => (
              <li key={index} className="text-center">
                <Link href={item.href} className="text-lg font-bold text-black text-outline-white hover:text-gray-600 transition-colors">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}