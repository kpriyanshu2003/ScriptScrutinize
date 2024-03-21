import { Language } from "../@types/judgeSubmit";

export const languageSelector = (lang: string): Language => {
  switch (lang) {
    case "CPP":
      return Language.CPP;
    case "JAVA":
      return Language.JAVA;
    case "JAVASCRIPT":
      return Language.JAVASCRIPT;
    case "PYTHON":
      return Language.PYTHON;
    case "52":
      return Language.CPP;
    default:
      throw new Error(`Invalid language: ${lang}`);
  }
};
