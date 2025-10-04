"use client";
import { useState } from "react";
import ChatbotWindow from "./ChatbotWindow"; // We'll create this

export default function ChatbotIcon() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 focus:outline-none"
      >
        <img
          src="/chatbot.png"
          alt="Chatbot Icon"
          className="w-20 h-20 rounded-full shadow-xl hover:scale-110 transition-transform duration-200"
        />
      </button>

      {/* Chat Window */}
      {open && <ChatbotWindow />}
    </>
  );
}
