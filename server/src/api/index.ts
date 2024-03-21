import axios from "axios";
import { judgeSubmitType } from "../@types/judgeSubmit";
import dotenv from "dotenv";
dotenv.config();

const api = axios.create({
  baseURL: process.env.JUDGE_URL,
  headers: {
    "content-type": "application/json",
    "Content-Type": "application/json",
    // "X-RapidAPI-Key": process.env.JUDGE_KEY,
    // "X-RapidAPI-Host": process.env.JUDGE_HOST,
  },
});

export const submitCode = ({
  language_id,
  source_code,
  stdin,
}: judgeSubmitType) =>
  api.post("/submissions?base64_encoded=true&fields=*", {
    language_id,
    source_code,
    stdin,
  });

export const getCodeOut = (id: string) =>
  api.get(`/submissions/${id}?base64_encoded=true`);
