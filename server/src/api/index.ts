import axios from "axios";
import { judgeSubmitType } from "../@types/judgeSubmit";
import dotenv from "dotenv";
dotenv.config();

const api = axios.create({
  baseURL: process.env.JUDGE_URL,
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
