import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import compres from "compression";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 3000;
export const prisma = new PrismaClient();

import submitRoutes from "./src/routes/submit";

const corsConfig = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsConfig));
app.use(morgan("dev"));
app.use(compres());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/submit", submitRoutes);

app.use("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
