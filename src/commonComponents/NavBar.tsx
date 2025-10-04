"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/mode-toggle";

export default function UpscNavbar() {
  return (
    <header className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      {/* Top bar */}
      <div className="flex flex-wrap justify-between items-center px-4 py-1 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-800">
        <div className="flex gap-3">
          <Link href="#" className="hover:underline">SiteMap</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Skip To Main Content</Link>
        </div>
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          {/* Search box */}
          <div className="flex items-center border rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search - Keyword, Phrase"
              className="px-2 py-1 text-sm outline-none border-0 w-40 md:w-56 dark:bg-gray-800 dark:text-gray-200"
            />
            <Button size="sm" className="rounded-none">Search</Button>
          </div>
          {/* Font size buttons */}
          <div className="flex gap-1 text-xs">
            <Button size="sm" variant="outline" className="h-6 px-2">A+</Button>
            <Button size="sm" variant="outline" className="h-6 px-2">A</Button>
            <Button size="sm" variant="outline" className="h-6 px-2">A-</Button>
          </div>
          <ModeToggle />
          <Link href="#" className="ml-1 hover:underline">हिन्दी</Link>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 gap-4">
        <div className="flex items-center gap-4">
          <img src="/ashoka.png" alt="Logo" className="h-16 w-auto" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold">संघ लोक सेवा आयोग</h1>
            <h2 className="text-lg md:text-xl font-bold">
              UNION PUBLIC SERVICE COMMISSION
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src="/digital-india.png" alt="Digital India" className="h-12" />
          <img src="/75.png" alt="75 Azadi" className="h-12" />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-blue-900 text-white">
        <div className="flex flex-wrap justify-center">
          <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">Home</Link>
          <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">About Us</Link>
          <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">Examination</Link>
          <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">Recruitment</Link>
          <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">Government Users</Link>
          <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">Forms & Downloads</Link>
          <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">FAQs</Link>
          <Link href="#" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">RTI</Link>
          <Link href="/signin" className="px-4 py-2 hover:bg-blue-800 border-1 border-white/50">Sign In</Link>

        </div>
      </nav>
 
      {/* Helpline Strip */}
      <div className="bg-blue-900 text-white text-center py-1 text-sm">
        Helpline - SC/ST/OBC/EWS/PwBD (1800-118-711)
      </div>
    </header>
  );
}