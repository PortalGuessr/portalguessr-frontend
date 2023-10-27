export type GuessrDifficulty = "Easy" | "Medium" | "Hard" | "Very Hard" | null;

export type GuessrDifficultyAbbreviate = "e" | "m" | "h" | "vh" | null;

export type PortalChamberNumber =
  | "00"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "e00"
  | "e02"
  | "e02"
  | null;

export interface GuessrQuestion {
  url: string;
  difficulty: GuessrDifficulty;
  answer: PortalChamberNumber;
  bhHash: string;
}

export interface GuessrHistory extends GuessrQuestion {
  userAnswer: PortalChamberNumber;
  isUserAnswerCorrect: boolean;
  historyId: string;
}

export interface GuessrStatistic {
  history: GuessrHistory[];
  isFinished: boolean;
  gameId: string;
}
