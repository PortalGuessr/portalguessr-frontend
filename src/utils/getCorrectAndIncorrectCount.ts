import { GuessrHistory } from "../../types/utiltypes/GuessrGameTypes";

export function getCorrectAndIncorrectCount(history: GuessrHistory[]) {
  const correctCount = history.reduce(
    (count, game) => (game.isUserAnswerCorrect ? count + 1 : count),
    0
  );
  const incorrectCount = history.reduce(
    (count, game) => (game.isUserAnswerCorrect ? count : count + 1),
    0
  );

  return [correctCount, incorrectCount];
}
