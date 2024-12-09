import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.routes.js";
import { connectToMongoDB } from "./src/config/connectToMongoDB.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
