// src/app/components/InfoGrid.tsx
'use client';

import GlowingInfoBox from './GlowingInfo';

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

export default function InfoGrid() {
  return (
    <section className="w-full bg-gray-900 py-20">
      <div className="container mx-auto px-4">
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