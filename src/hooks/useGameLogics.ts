import { useEffect } from "react";
import { PortalChamberNumber } from "../../types/utiltypes/GuessrGameTypes";
import { GameLogicsHookParam } from "../../types/hooktypes/GameFunctionsHookParam";

export function useGameLogics({
  isCounterFinished,
  questions,
  currentQuestion,
  currentQuestionIndex,
  history,
  hasCounterInitialized,
  setCurrentQuestion,
  setCurrentQuestionIndex,
  setHistory,
  setIsGameFinished,
  setIsGameFinishedBeforeTimerRunOut,
  resetCounter,
}: GameLogicsHookParam) {
  useEffect(() => {
    if (isCounterFinished && hasCounterInitialized) {
      handleCounterFinished();
    }
  }, [isCounterFinished]);

  function handleCounterFinished() {
    // Triggered when the counter reaches 0 AND the counter has been initialized.
    saveGameResult(false);
    setIsGameFinishedBeforeTimerRunOut(false);
    setIsGameFinished(true);
    resetCounter(0);
  }

  function handleAnswer(chamber: PortalChamberNumber) {
    // Handling user answer (when the user clicked the answer button).
    // Here we save the result to history, then show the next question if available.
    const historyId = crypto.randomUUID();
    const isUserAnswerCorrect = chamber === currentQuestion.answer;
    const userAnswer = currentQuestion.answer;

    writeHistory(isUserAnswerCorrect, historyId, userAnswer);
    showNextQuestion(isUserAnswerCorrect);
  }

  function writeHistory(
    isUserAnswerCorrect: boolean,
    historyId: string,
    userAnswer: PortalChamberNumber
  ) {
    const newHistoryEntry = {
      ...currentQuestion,
      userAnswer,
      isUserAnswerCorrect,
      historyId,
    };

    setHistory([...history, newHistoryEntry]);
  }

  function showNextQuestion(isUserAnswerCorrect: boolean) {
    // Showing next question.
    if (currentQuestionIndex === questions.length - 1) {
      handleGameFinished(isUserAnswerCorrect);
    } else {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
    }
  }

  function handleGameFinished(isUserAnswerCorrect: boolean) {
    // Triggered when the game has run out of questions.
    saveGameResult(isUserAnswerCorrect);
    setIsGameFinishedBeforeTimerRunOut(true);
    setIsGameFinished(true);
    resetCounter(0);
  }

  function saveGameResult(isFinished: boolean) {
    // Saving game result to local storage.
    const gameId = crypto.randomUUID();
    const stats = JSON.parse(localStorage.getItem("USER_STATS") || "[]");
    const updatedStats = JSON.stringify([
      ...stats,
      {
        history,
        isFinished,
        gameId,
      },
    ]);

    localStorage.setItem("USER_STATS", updatedStats);
  }

  return handleAnswer;
}
