import { useContext } from "react";
import { GuessrContext } from "../../../types/utiltypes/GuessrContextType";
import Button from "react-bootstrap/Button";
import GameStats from "./GameStats";
import { getCorrectAndIncorrectCount } from "../../utils/getCorrectAndIncorrectCount";
import { GuessrQuestion } from "../../../types/utiltypes/GuessrGameTypes";
import { GuessrHistory } from "../../../types/utiltypes/GuessrGameTypes";

const GameFinished = () => {
  const {
    history,
    isGameFinishedBeforeTimerRunOut,
    setIsGameFinished,
    setIsGameRunning,
    setQuestions,
    setHistory,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    resetCounter,
  } = useContext(GuessrContext);

  const [correctCount, incorrectCount] = getCorrectAndIncorrectCount(history);

  function handleGameRestart() {
    setQuestions([] as GuessrQuestion[]);
    setCurrentQuestion({} as GuessrQuestion);
    setHistory([] as GuessrHistory[]);
    setCurrentQuestionIndex(0);
    setIsGameFinished(false);
    setIsGameRunning(false);
    resetCounter(0);
  }

  return (
    <section className="my-4 mx-2 text-center">
      {isGameFinishedBeforeTimerRunOut ? (
        <h3 className="mb-3">🥳 Game finished!</h3>
      ) : (
        <div className="mb-3">
          <h3>😔 You've run out of time!</h3>
          <span>Don't worry, your result has been saved...</span>
        </div>
      )}
      <GameStats
        correctCount={correctCount}
        incorrectCount={incorrectCount}
        completedRounds={history.length}
      />
      <Button
        variant="pg-primary"
        className="mt-3"
        type="button"
        onClick={handleGameRestart}
      >
        Back To Menu
      </Button>
    </section>
  );
};

export default GameFinished;
