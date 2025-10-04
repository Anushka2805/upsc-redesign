import { Request, Response } from "express";
import ChatMessage from "../models/ChatMessage";
import fetch from "node-fetch";

// --- 1. DEFINE THE EXPECTED DATA SHAPE ---
interface GeminiReply {
  reply: string;
}

// --- CRITICAL: YOUR DEPLOYED API URL ---
const API_URL = "https://web-production-3331.up.railway.app/ask-gemini";

export const askGemini = async (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message || typeof message !== "string" || message.trim() === "") {
    return res
      .status(400)
      .json({ reply: "Error: Please provide a valid question." });
  }

  try {
    const fetchResponse = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: message }),
    });

    if (!fetchResponse.ok) {
      console.error(`FastAPI call failed with status: ${fetchResponse.status}`);

      return res.status(500).json({
        reply:
          "Error: The AI eligibility service is currently unreachable or failed internally.",
      });
    }

    // ⭐️ FIX: Use 'as GeminiReply' for Type Assertion to resolve TypeScript error
    const data = (await fetchResponse.json()) as GeminiReply;
    const botReply = data.reply;

    // --- Optional: MongoDB Saving ---
    try {
      const chat = new ChatMessage({
        userMessage: message,
        botReply: botReply,
      });
      await chat.save();
    } catch (dbError) {
      console.error("MongoDB Save Error (non-critical):", dbError);
    }

    // Send the final, correct response back to the client/frontend
    res.json({ reply: botReply });
  } catch (error) {
    console.error("General Fetch Error (e.g., connection issue):", error);
    res.status(500).json({
      reply: "A critical network error occurred while reaching the server.",
    });
  }
};
