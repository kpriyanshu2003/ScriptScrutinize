import { Request, Response } from "express";
import fs from "fs";
import { getCodeOut, submitCode } from "../api";
import { languageSelector } from "../lib/langSelect";
import { Language } from "../@types/judgeSubmit";

export const getCode = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!id) return res.json({ message: "No ID provided" });
    return fs.readFile(`./src/uploads/${id}`, "utf8", function (err, data) {
      return res.json({ code: data });
    });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error fetching code" });
  }
};

export const getOutput = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  try {
    if (!id) return res.json({ message: "No ID provided" });
    const codeOut = await getCodeOut(id);
    console.log(codeOut.data);
    return res.send(codeOut.data);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error fetching output" });
  }
};

export const execCode = async (
  language: string,
  source: string,
  stdin: string | undefined
): Promise<string> => {
  const submissionJudge = await submitCode({
    language_id: languageSelector(language) as unknown as Language,
    source_code: source,
    stdin,
  });
  return submissionJudge.data.token;
};
