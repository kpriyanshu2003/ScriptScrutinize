import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import compress from "compression";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 3000;
export const prisma = new PrismaClient();

import submitRoutes from "./src/routes/submit";
import codeRoutes from "./src/routes/code";

const corsConfig = { origin: "*", optionsSuccessStatus: 200 };
// app.use((req, res, next) => setTimeout(next, 3000)); // Simulate 3s delay
app.use(morgan("dev"));
app.use(compress());
app.use(express.json());
app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: true }));
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/submit", submitRoutes);
app.use("/code", codeRoutes);

app.use("/", (_, res) => {
  res.json({ message: "API is running normally" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
