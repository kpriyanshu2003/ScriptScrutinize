import Link from "next/link";
import React from "react";

function Navbar({
  setPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center justify-between p-4">
      <Link href="/" className="p-4 text-2xl font-bold">
        ScriptScrutinize
      </Link>
      <div className="flex items-center gap-5">
        <span
          onClick={() => setPage(true)}
          className="text-sm py-2 px-4 border rounded-lg bg-slate-200 cursor-pointer hover:bg-slate-300 transition duration-300"
        >
          Add Submission
        </span>
        <span
          onClick={() => setPage(false)}
          className="text-sm py-2 px-4 border rounded-lg bg-slate-200 cursor-pointer hover:bg-slate-300 transition duration-300"
        >
          Show Submission
        </span>
      </div>
    </div>
  );
}

export default Navbar;
