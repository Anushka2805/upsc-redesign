import express from "express";
import { askGemini } from "../controllers/chatController";

const router = express.Router();

router.post("/ask-gemini", askGemini);

export default router;
