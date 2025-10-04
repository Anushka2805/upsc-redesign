// src/app/page.tsx

import {
  Newspaper,
  Briefcase,
  BarChart3,
  Mic,
  CalendarDays,
} from "lucide-react";

import GlassFlippingCard from "@/components/GlassFlippingCard";
import InfoGrid from "@/components/InfoGrid";
import Footer from "@/commonComponents/Footer";
import ChatbotIcon from "@/commonComponents/ChatbotIcon";

const cardData = [
  {
    icon: <Newspaper className="w-14 h-14 text-blue-500" />,
    title: "Notices & Announcements",
    items: [
      { text: "Common mistakes in OMR Sheet", href: "#" },
      { text: "Recruitment Advt. No. 13-2025 - Extension", href: "#" },
      { text: "Advertisement No. 13 - 2025", href: "#" },
    ],
  },
  {
    icon: <Briefcase className="w-14 h-14 text-green-500" />,
    title: "Recruitment Tests",
    items: [
      { text: "Ministry of MSME (IEDS) Posts", href: "#" },
      { text: "13 Posts of DCIO (Technical), MHA", href: "#" },
      { text: "33 Posts of Marketing Officer (Group-I)", href: "#" },
    ],
  },
  {
    icon: <BarChart3 className="w-14 h-14 text-purple-500" />,
    title: "Examination Results",
    items: [
      { text: "Written Result: NDA & NA (II), 2025", href: "#" },
      { text: "Written Result: Engineering Services (Main), 2025", href: "#" },
      { text: "Final Result: IES - ISS Examination, 2025", href: "#" },
    ],
  },
  {
    icon: <Mic className="w-14 h-14 text-pink-500" />,
    title: "Interview Schedules",
    items: [
      { text: "Engineering Services (Main) Examination, 2025", href: "#" },
      { text: "Combined Medical Services Examination, 2025", href: "#" },
    ],
  },
  {
    icon: <CalendarDays className="w-14 h-14 text-orange-500" />,
    title: "Examination Time Tables",
    items: [
      { text: "Indian Forest Service (Main) Examination, 2025", href: "#" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Background Video Layer */}
        <video
          src="/bgvdo.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />

        {/* Card Grid Layer */}
        <main className="container mx-auto px-4 py-0 min-h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
      </div>
      <InfoGrid />
      <ChatbotIcon />
      <Footer />
    </>
  );
}
