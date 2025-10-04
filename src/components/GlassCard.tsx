// src/app/components/GlassCard.tsx
'use client';

import Link from 'next/link';

// Define the types for the props
interface GlassCardProps {
  title: string;
  icon: string;
  items: { text: string; href: string }[];
}

export default function GlassCard({ title, icon, items }: GlassCardProps) {
  return (
    <div className="glass-card text-white p-6 h-full flex flex-col">
      <h3 className="text-2xl font-bold mb-4">
        <span className="mr-2">{icon}</span>
        {title}
      </h3>
      <ul className="space-y-2 overflow-y-auto flex-grow">
        {items.map((item, index) => (
          <li key={index} className="text-sm">
            <Link href={item.href} className="hover:underline transition-all duration-200">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}