"use client";
import React, { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { langugages } from "@/constants/languages";
import { createSubmission } from "@/api";
import { Language, SubmitType } from "@/@types/submission";

function Code() {
  const [currlanguage, setCurrLanguage] = useState(langugages[0].name);
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({ username: "", stdin: "" });
  const [extensions, setExtensions] = useState(langugages[0].syntax);
  const [loading, setLoading] = useState(false);

  const onChangeLanguage = useCallback(
    (selectedLanguage: React.SetStateAction<string>) => {
      setCurrLanguage(selectedLanguage);
      const selectedLang = langugages.find(
        (lang) => lang.name === selectedLanguage
      );
      if (selectedLang) setExtensions(selectedLang.syntax);
    },
    []
  );

  const onChange = useCallback(
    (val: React.SetStateAction<string>) => setValue(val),
    []
  );
  const handleSubmit = () => {
    setLoading(true);
    createSubmission({
      language: currlanguage as Language,
      source: value,
      stdin: formData.stdin,
      username: formData.username,
    } as SubmitType)
      .then((res) => {
        console.log("res:", res);
      })
      .catch((err) => {
        console.log("err:", err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-5 ">
      <>
        <div className="flex gap-5 items-center my-5">
          <Input
            type="text"
            isRequired
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <Input
            type="text"
            placeholder="STDIN"
            value={formData.stdin}
            onChange={(e) =>
              setFormData({ ...formData, stdin: e.target.value })
            }
          />
        </div>
        <Select
          isRequired
          className="my-5"
          label="Select Language"
          placeholder="Select Language"
          value={currlanguage}
          defaultSelectedKeys={[currlanguage]}
          onChange={(e) => onChangeLanguage(e.target.value)}
        >
          {langugages.map((lang) => (
            <SelectItem key={lang.name} value={lang.name}>
              {lang.name}
            </SelectItem>
          ))}
        </Select>
      </>
      <CodeMirror
        value={value}
        height="400px"
        className="my-5 border"
        extensions={[extensions]} // Dynamically changing extensions
        onChange={onChange}
      />
      <Button
        type="submit"
        isLoading={loading}
        onClick={() => handleSubmit()}
        className="w-32"
      >
        Submit
      </Button>
    </div>
  );
}

export default Code;
