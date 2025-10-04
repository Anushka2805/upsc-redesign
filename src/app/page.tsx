// src/app/page.tsx

import GlassFlippingCard from '@/components/GlassFlippingCard';
import Footer from "@/commonComponents/Footer";
import ProcessFlow from '@/components/ProcessFlow';
import CircularFlow from '@/components/CircularFlow'; // <-- Import the new component
import InfoGrid from '@/components/InfoGrid'; // <-- Import the new component

const cardData = [
  // ... your existing card data ...
  {
    icon: '📰',
    title: 'Notices & Announcements',
    items: [
      { text: 'Common mistakes in OMR Sheet', href: '#' },
      { text: 'Recruitment Advt. No. 13-2025 - Extension', href: '#' },
      { text: 'Advertisement No. 13 - 2025', href: '#' },
      { text: 'Addendum: 74 Posts of APFC, EPFO', href: '#' },
      { text: 'Addendum: 156 Posts of EO/AO in EPFO', href: '#' },
      { text: 'Addendum: 20 Posts of Drugs Inspector', href: '#' },
      { text: 'Notice: 66 Posts of Asst. Public Prosecutor', href: '#' },
    ],
  },
  {
    icon: '🧑‍💼',
    title: 'Recruitment Tests',
    items: [
      { text: 'Ministry of MSME (IEDS) Posts', href: '#' },
      { text: '13 Posts of DCIO (Technical), MHA', href: '#' },
      { text: '33 Posts of Marketing Officer (Group-I)', href: '#' },
      { text: '04 Posts of Ayurvedic Physician in NDMC', href: '#' },
      { text: '09 Posts of Medical Officer (Ayurveda)', href: '#' },
    ],
  },
  {
    icon: '📊',
    title: 'Examination Results',
    items: [
      { text: 'Written Result: NDA & NA (II), 2025', href: '#' },
      { text: 'Written Result: Engineering Services (Main), 2025', href: '#' },
      { text: 'Written Result: Combined Medical Services, 2025', href: '#' },
      { text: 'Final Result: IES - ISS Examination, 2025', href: '#' },
      { text: 'Final Result: 12 Posts of Prosecutor in SFIO', href: '#' },
    ],
  },
  {
    icon: '🎤',
    title: 'Interview Schedules',
    items: [
      { text: 'Engineering Services (Main) Examination, 2025', href: '#' },
      { text: 'Combined Medical Services Examination, 2025', href: '#' },
    ],
  },
  {
    icon: '📅',
    title: 'Examination Time Tables',
    items: [
      { text: 'Indian Forest Service (Main) Examination, 2025', href: '#' },
    ],
  },
];

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <GlassFlippingCard
              key={index}
              icon={card.icon}
              title={card.title}
              items={card.items}
            />
          ))}
        </div>
      </main>

      {/* Add the 3D Process Flow component here */}
      
      <InfoGrid  />
      <Footer />
    </>
  );
}