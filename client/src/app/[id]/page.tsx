"use client";

import { SubmitType } from "@/@types/submission";
import { getCode, getOutput, getSubmission } from "@/api";
import CodeMirror from "@uiw/react-codemirror";
import { Input, Textarea } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { decode } from "js-base64";
import { CodeOutType } from "@/@types/codeOutput";

export default function Code({ params }: { params: { id: string } }) {
  const [data, setData] = useState<SubmitType | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [output, setOutput] = useState("");

  useEffect(() => {
    getSubmission(params.id)
      .then((res) => {
        setData(res.data);
        return getCode(res.data.source);
      })
      .then((res) => setCode(decode(res.data.code)))
      .catch((err) => console.log(err));
  }, [params.id]);

  useEffect(() => {
    getOutput(data?.stdout || "")
      .then((res) => res.data)
      .then((data: CodeOutType) => {
        if (!data) setOutput("Failed to get output");
        else if (data.status.description === "Accepted")
          setOutput(decode(data.stdout || ""));
        else setOutput(data.status.description);
      })
      .catch((err) => console.log(err));
  }, [data?.stdout]);

  return (
    <>
      <div className="p-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-slate-300 hover:bg-slate-200 w-24 p-2 transition duration-300"
        >
          <IoIosArrowRoundBack className="w-6 h-6" />
          <span className="text-base">Back</span>
        </Link>
        <div className="p-10">
          <h1 className="text-2xl underline underline-offset-4">
            Code Details
          </h1>
          <br />
          UserName :<Input value={data?.username} disabled />
          <br />
          Language : <Input value={data?.language} disabled />
          <br />
          STDIN :
          <Input value={decode(data?.stdin || "") ?? "No Input"} disabled />
          <br />
          STDOUT :
          <Textarea
            isReadOnly
            variant="bordered"
            labelPlacement="outside"
            value={output}
            className=""
          />
          <br />
          Source :
          <CodeMirror
            value={code || ""}
            height="400px"
            className="my-5 border"
            readOnly
          />
          <br />
          Updated At :{" "}
          <Input
            value={new Date(data?.updatedAt ?? "").toUTCString()}
            disabled
          />
        </div>
      </div>
    </>
  );
}
