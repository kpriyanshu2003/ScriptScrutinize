import { SubmitType } from "@/@types/submission";
import axios from "axios";

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_base_url });

export const getSubmissions = async () => api.get("/submit");

export const createSubmission = async (payload: SubmitType) =>
  api.post("/submit", payload);
