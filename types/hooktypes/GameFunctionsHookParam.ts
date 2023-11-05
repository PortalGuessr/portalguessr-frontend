import { GuessrQuestion, GuessrHistory } from "../utiltypes/GuessrGameTypes";

export interface GameLogicsHookParam {
  questions: GuessrQuestion[];
  history: GuessrHistory[];
  currentQuestion: GuessrQuestion;
  currentQuestionIndex: number;
  isGameFinished: boolean;
  isCounterFinished: boolean;
  hasCounterInitialized: boolean;
  isGameFinishedBeforeTimerRunOut: boolean;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<GuessrQuestion>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setHistory: React.Dispatch<React.SetStateAction<GuessrHistory[]>>;
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameFinishedBeforeTimerRunOut: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  resetCounter: (newSeconds: number) => void;
  showAlert: (
    message: string,
    variant:
      | "primary"
      | "secondary"
      | "success"
      | "danger"
      | "warning"
      | "info"
      | "light"
      | "dark",
    duration: number
  ) => void;
}
