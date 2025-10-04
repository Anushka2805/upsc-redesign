// "use client";

import * as React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatbotWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setLoading(true);

    try {
      // Fetch from backend
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CHATBOT_URL}/ask-gemini`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );

      const data = await res.json();

      // Add bot response
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong." },
      ]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 z-50 w-80 md:w-96 shadow-lg">
      <Card className="flex flex-col h-[500px] border dark:border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-lg md:text-xl">UPSC Chatbot</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col flex-1 p-2">
          {/* Scrollable messages */}
          <ScrollArea className="flex-1 overflow-auto mb-2">
            <div className="flex flex-col gap-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] px-3 py-2 rounded-lg break-words ${
                    msg.sender === "user"
                      ? "self-end bg-blue-200 text-black dark:bg-blue-700 dark:text-white"
                      : "self-start bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input field */}
          <div className="flex gap-2 mt-auto">
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
        </CardContent>
      </Card>
    </div>
  );
}
