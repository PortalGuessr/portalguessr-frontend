import { GuessrDifficulty } from "../../types/utiltypes/GuessrGameTypes";

export function convertToDifficultyColor(difficulty: GuessrDifficulty) {
  let difficultyColor;

  switch (difficulty) {
    case "Easy":
      difficultyColor = "success";
      break;
    case "Medium":
      difficultyColor = "warning";
      break;
    case "Hard":
      difficultyColor = "danger";
      break;
    case "Very Hard":
      difficultyColor = "secondary";
      break;
  }

  return difficultyColor;
}
