export interface SubmitType {
  username: string;
  language: Language;
  stdin?: string;
  source: string;
}

export enum Language {
  CPP = "CPP",
  JAVA = "JAVA",
  JAVASCRIPT = "JAVASCRIPT",
  PYTHON = "PYTHON",
}
