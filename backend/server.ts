import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import chatRoutes from "./routes/chatRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: "http://localhost:3000", 
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());

app.use("/api", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
