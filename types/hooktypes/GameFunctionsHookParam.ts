import { GuessrQuestion, GuessrHistory } from "../utiltypes/GuessrGameTypes";

export interface GameLogicsHookParam {
  questions: GuessrQuestion[];
  history: GuessrHistory[];
  currentQuestion: GuessrQuestion;
  currentQuestionIndex: number;
  isCounterFinished: boolean;
  hasCounterInitialized: boolean;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<GuessrQuestion>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setHistory: React.Dispatch<React.SetStateAction<GuessrHistory[]>>;
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameFinishedBeforeTimerRunOut: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  resetCounter: (newSeconds: number) => void;
}
