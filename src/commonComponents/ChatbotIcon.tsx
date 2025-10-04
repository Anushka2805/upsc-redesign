"use client";
import { useState } from "react";
import ChatbotWindow from "./ChatbotWindow"; // We'll create this
import Image from "next/image";

export default function ChatbotIcon() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 focus:outline-none"
      >
        <Image
          src="/chatbot-icon.png"
          alt="Chatbot Icon"
          width={48} // width in px
          height={48} // height in px
          className="h-12 w-12"
        />
      </button>

      {/* Chat Window */}
      {open && <ChatbotWindow />}
    </>
  );
}
