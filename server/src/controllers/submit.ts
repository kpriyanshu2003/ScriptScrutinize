import { Request, Response } from "express";
import { SubmitType } from "../@types/submit";
import { prisma } from "../..";

export const createSubmit = async (req: Request, res: Response) => {
  const { username, language, stdin, source }: SubmitType = req.body;
  try {
    if (!username || !language || !source)
      return res.status(400).json({ message: "Bad Request" });
    const newSubmit = await prisma.code.create({
      data: {
        username: username,
        language: language,
        stdin: stdin || "",
        source: source,
      },
    });
    return res.status(201).json({ message: "Created", data: newSubmit });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getSubmit = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const submit = await prisma.code.findUnique({ where: { id: id } });
    if (!submit) return res.status(404).json({ message: "Not Found" });
    return res.status(200).json(submit);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getSubmits = async (req: Request, res: Response) => {
  try {
    const submits = await prisma.code.findMany();
    if (submits.length === 0)
      return res.status(404).json({ message: "Not Found" });
    return res.status(200).json(submits);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
