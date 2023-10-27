import { GuessrStatistic } from "../../types/utiltypes/GuessrGameTypes";

export function getHistoryDifficulties(guessrStatistics: GuessrStatistic[]) {
  let easyCount = 0;
  let mediumCount = 0;
  let hardCount = 0;
  let veryHardCount = 0;

  for (const guessrStatistic of guessrStatistics) {
    const history = guessrStatistic.history;

    for (const gameHistory of history) {
      const { difficulty, isUserAnswerCorrect } = gameHistory;

      if (isUserAnswerCorrect) {
        switch (difficulty) {
          case "Easy":
            easyCount++;
            break;
          case "Medium":
            mediumCount++;
            break;
          case "Hard":
            hardCount++;
            break;
          case "Very Hard":
            veryHardCount++;
            break;
        }
      }
    }
  }

  return { easyCount, mediumCount, hardCount, veryHardCount };
}
