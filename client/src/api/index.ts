import { SubmitType } from "@/@types/submission";
import axios from "axios";

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_base_url });

// Server - Submissions

export const getSubmissions = async () => api.get("/submit");
export const getSubmission = async (id: string) => api.get(`/submit/${id}`);
export const createSubmission = async (payload: SubmitType) =>
  api.post("/submit", payload);

// Server - Code

export const getCode = async (id: string) => api.get(`/code/c/${id}`);
export const getOutput = async (id: string) => api.get(`/code/o/${id}`);
