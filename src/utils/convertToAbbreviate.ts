import { GuessrDifficulty } from "../../types/utiltypes/GuessrGameTypes";
import { GuessrDifficultyAbbreviate } from "../../types/utiltypes/GuessrGameTypes";

export function convertToAbbreviate(
  difficulty: GuessrDifficulty
): GuessrDifficultyAbbreviate {
  let difficultyAbbreviate: GuessrDifficultyAbbreviate;

  switch (difficulty) {
    case "Easy":
      difficultyAbbreviate = "e";
      break;
    case "Medium":
      difficultyAbbreviate = "m";
      break;
    case "Hard":
      difficultyAbbreviate = "h";
      break;
    case "Very Hard":
      difficultyAbbreviate = "vh";
      break;
    case null:
      difficultyAbbreviate = null;
      break;
  }

  return difficultyAbbreviate;
}
