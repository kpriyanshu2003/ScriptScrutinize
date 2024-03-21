import express from "express";
import { getCode, getOutput } from "../controllers/code";
const router = express.Router();

router.get("/c/:id", getCode);
router.get("/o/:id", getOutput);

export default router;
