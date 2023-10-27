import { GuessrDifficulty } from "../utiltypes/GuessrGameTypes";

export interface StartingCardsProps {
  handleGameStart: (
    difficulty: GuessrDifficulty,
    timeoutSeconds: number,
    amount: number
  ) => void;
}
