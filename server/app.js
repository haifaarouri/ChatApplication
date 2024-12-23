import express from "express";
import dotenv from "dotenv";
import { connectToMongoDB } from "./src/config/connectToMongoDB.js";
import cookieParser from "cookie-parser";

import authRoutes from "./src/routes/auth.routes.js";
import messageRoutes from "./src/routes/message.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import { app, server } from "./src/socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
