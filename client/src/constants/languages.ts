import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

export const langugages = [
  { name: "JAVASCRIPT", syntax: javascript({ jsx: true }) },
  { name: "JAVA", syntax: java() },
  { name: "PYTHON", syntax: python() },
  { name: "CPP", syntax: cpp() },
];
