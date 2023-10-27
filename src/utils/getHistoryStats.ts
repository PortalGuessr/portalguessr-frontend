import { GuessrStatistic } from "../../types/utiltypes/GuessrGameTypes";

export function getHistoryStats(guessrStatistics: GuessrStatistic[]) {
  const played = guessrStatistics.length;
  let correctCount = 0;
  let incorrectCount = 0;

  for (const guessrStatistic of guessrStatistics) {
    const history = guessrStatistic.history;

    for (const gameHistory of history) {
      const isUserAnswerCorrect = gameHistory.isUserAnswerCorrect;

      isUserAnswerCorrect ? correctCount++ : incorrectCount++;
    }
  }

  const totalCount = correctCount + incorrectCount;
  const correctPercentage = (correctCount / totalCount) * 100;
  const correctPercentageDisplay = `${
    parseFloat(correctPercentage.toFixed(1)) || 0
  }%`;

  return { played, correctCount, incorrectCount, correctPercentageDisplay };
}
