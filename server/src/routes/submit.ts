import express from "express";
import { createSubmit, getSubmit, getSubmits } from "../controllers/submit";
const router = express.Router();
router.get("/", getSubmits);
router.get("/:id", getSubmit);
router.post("/", createSubmit);

export default router;
