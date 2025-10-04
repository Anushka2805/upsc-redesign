import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userMessage: { type: String, required: true },
  botReply: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ChatMessage = mongoose.models.ChatMessage || mongoose.model("ChatMessage", chatSchema);

export default ChatMessage;
