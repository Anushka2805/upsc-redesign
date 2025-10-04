"use client";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatbotWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CHATBOT_URL}/ask-gemini`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong." },
      ]);
      console.error(err);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  // ✅ Scroll to bottom when new message added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-20 right-6 z-50 w-80 md:w-96">
      <Card className="flex flex-col h-[500px] shadow-lg border dark:border-gray-700 bg-background overflow-hidden">
        <CardHeader className="text-center border-b dark:border-gray-700">
          <CardTitle className="text-lg md:text-xl">UPSC Chatbot</CardTitle>
        </CardHeader>

        {/* ✅ Scrollable message area */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[80%] px-3 py-2 rounded-lg break-words whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "ml-auto bg-blue-200 text-black dark:bg-blue-700 dark:text-white"
                  : "self-start bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* Auto-scroll anchor */}
        </div>

        {/* ✅ Fixed input bar */}
        <div className="flex gap-2 p-2 border-t dark:border-gray-700 bg-background">
          <Input
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-white dark:bg-gray-800"
          />
          <Button onClick={handleSend} disabled={loading}>
            {loading ? "..." : "Send"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
