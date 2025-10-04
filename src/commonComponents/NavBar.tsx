// src/app/commonComponents/NavBar.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/mode-toggle";
import { useTypewriter } from "@/lib/hooks/useTypewriter";
import Image from "next/image";

export default function UpscNavbar() {
  // 2. USE the hook with a delay to wait for the splash screen
  const hindiTitle = useTypewriter('संघ लोक सेवा आयोग', 100, 3000);
  const englishTitle = useTypewriter('UNION PUBLIC SERVICE COMMISSION', 50, 4500);

  return (
    <header className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      {/* Top bar (No changes here) */}
      <div className="flex flex-wrap justify-between items-center px-4 py-1 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-800">
        <div className="flex gap-3">
          <Link href="#" className="hover:underline">SiteMap</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Skip To Main Content</Link>
        </div>
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <div className="flex items-center border rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search - Keyword, Phrase"
              className="px-2 py-1 text-sm outline-none border-0 w-40 md:w-56 dark:bg-gray-800 dark:text-gray-200"
            />
            <Button size="sm" className="rounded-none">Search</Button>
          </div>
          <div className="flex gap-1 text-xs">
            <Button size="sm" variant="outline" className="h-6 px-2">A+</Button>
            <Button size="sm" variant="outline" className="h-6 px-2">A</Button>
            <Button size="sm" variant="outline" className="h-6 px-2">A-</Button>
          </div>
          <ModeToggle />
          <Link href="#" className="ml-1 hover:underline">हिन्दी</Link>
        </div>
      </div>

      {/* Logo Section (This section is updated) */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 gap-4">
        <div className="flex items-center gap-4">
<Image
  src="/Logo.jpg"
  alt="Logo"
  width={64}        // height 16 * 4px (Tailwind h-16 = 64px)
  height={64}       // maintain aspect ratio if needed
  className="w-auto"
/>
          <div>
            {/* 3. APPLY the typewriter text and classes */}
            <h1 className="text-xl md:text-2xl font-bold typewriter-text h-8">
              {hindiTitle}
            </h1>
            <h2 className="text-lg md:text-xl font-bold typewriter-text h-8">
              {englishTitle}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
<Image
  src="/Digital India.jpg"
  alt="Digital India"
  height={48}   // Tailwind h-12 = 3rem = 48px
  width={48}    // maintain aspect ratio, or adjust as needed
  className="w-auto"
/>
<Image
  src="/75 Azadi.jpg"
  alt="75 Azadi"
  height={48}   // Tailwind h-12 = 3rem = 48px
  width={48}    // adjust to maintain aspect ratio
  className="w-auto"
/>
        </div>
      </div>

      {/* Navigation Menu (No changes here) */}
      <nav className="bg-blue-900 text-white">
        <div className="flex flex-wrap justify-center">
            <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">Home</Link>
            <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">About Us</Link>
            <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">Examination</Link>
            <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">Recruitment</Link>
            <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">Government Users</Link>
            <Link href="/form" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">Forms & Downloads</Link>
            <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">FAQs</Link>
            <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">RTI</Link>
            <Link href="/signin" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">Sign In</Link>
        </div>
      </nav>
  
      {/* Helpline Strip (No changes here) */}
      <div className="bg-blue-900 text-white text-center py-1 text-sm">
        Helpline - SC/ST/OBC/EWS/PwBD (1800-118-711)
      </div>
    </header>
  );
}