export interface SubmitType {
  id: string;
  username: string;
  language: Language;
  stdin?: string;
  source: string;
  stdout?: string;
  updatedAt: Date;
  createdAt: Date;
}

export enum Language {
  CPP = "CPP",
  JAVA = "JAVA",
  JAVASCRIPT = "JAVASCRIPT",
  PYTHON = "PYTHON",
}
