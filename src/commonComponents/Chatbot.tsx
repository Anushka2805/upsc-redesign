"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("YOUR_BACKEND_URL_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();
      const botMessage: Message = { role: "bot", content: data.answer || "Sorry, I could not understand." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const botMessage: Message = { role: "bot", content: "Error connecting to server." };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <Card className="max-w-2xl mx-auto my-8 flex flex-col h-[80vh] bg-white dark:bg-gray-900 text-black dark:text-white">
      <CardHeader>
        <CardTitle>Chatbot</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea ref={scrollRef} className="h-full p-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`my-2 p-3 rounded-lg max-w-[80%] ${
                msg.role === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white mr-auto"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <Separator />
      <div className="flex p-4 gap-2">
        <Input
          className="flex-1"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </Card>
  );
}
