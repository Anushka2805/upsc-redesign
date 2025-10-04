// src/app/components/GlassFlippingCard.tsx
'use client';

import Link from 'next/link';

interface CardProps {
  title: string;
  icon: string;
  items: { text: string; href: string }[];
}

export default function GlassFlippingCard({ title, icon, items }: CardProps) {
  return (
    <div className="card-container">
      <div className="card-inner">

        {/* Card Front */}
        <div className="card-face card-front flex flex-col items-center justify-center p-6 text-white text-center">
          <span className="text-6xl mb-4">{icon}</span>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>

        {/* Card Back */}
        <div className="card-face card-back p-6 text-white">
          <h4 className="text-xl font-bold mb-4">Details</h4>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-sm">
                <Link href={item.href} className="hover:underline">
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