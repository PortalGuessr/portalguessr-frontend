import { GuessrQuestion, GuessrHistory } from "../utiltypes/GuessrGameTypes";

export interface GameFunctionsHookParam {
  questions: GuessrQuestion[];
  history: GuessrHistory[];
  setHistory: React.Dispatch<React.SetStateAction<GuessrHistory[]>>;
  currentQuestion: GuessrQuestion;
  currentQuestionIndex: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<GuessrQuestion>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  isCounterFinished: boolean;
  hasCounterInitialized: boolean;
  setIsGameFinishedBeforeTimerRunOut: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}
