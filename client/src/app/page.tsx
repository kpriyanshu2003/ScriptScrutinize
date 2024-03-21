"use client";
import React from "react";
import Code from "@/components/CodeEditor";
import Submissions from "@/components/Submissions";
import Navbar from "@/components/Navbar";

export default function Page() {
  const [page, setPage] = React.useState(false);
  return (
    <div className="">
      <Navbar setPage={setPage} />
      <div>{page ? <Code /> : <Submissions />}</div>
    </div>
  );
}
