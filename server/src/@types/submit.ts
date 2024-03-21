export interface SubmitType {
  id: string;
  username: string;
  language: Language;
  stdin?: string;
  source: string;
  updatedAt: Date;
  createdAt: Date;
}

enum Language {
  CPP = "CPP",
  JAVA = "JAVA",
  JAVASCRIPT = "JAVASCRIPT",
  PYTHON = "PYTHON",
}
