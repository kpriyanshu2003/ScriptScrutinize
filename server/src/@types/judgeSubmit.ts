export interface judgeSubmitType {
  language_id: Language;
  source_code: string;
  stdin?: string;
}

export enum Language {
  CPP = 52,
  JAVA = 62,
  JAVASCRIPT = 63,
  PYTHON = 71,
}
