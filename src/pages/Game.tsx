import { useContext } from "react";
import { GuessrContext } from "../../types/utiltypes/GuessrContextType";
import GameStart from "../components/game/GameStart";
import GamePlaying from "../components/game/GamePlaying";
import GameFinished from "../components/game/GameFinished";

const Game = () => {
  const { isGameRunning, isGameFinished } = useContext(GuessrContext);

  let gameState;

  if (isGameRunning) {
    if (isGameFinished) {
      gameState = <GameFinished />;
    } else {
      gameState = <GamePlaying />;
    }
  } else {
    gameState = <GameStart />;
  }

  return gameState;
};

export default Game;
