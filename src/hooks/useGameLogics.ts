import { useEffect } from "react";
import { PortalChamberNumber } from "../../types/utiltypes/GuessrGameTypes";
import { GameFunctionsHookParam } from "../../types/hooktypes/GameFunctionsHookParam";

// TODO: Fix the bug with incorrect correct/incorrect count stats.

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
}: GameFunctionsHookParam) {
  useEffect(() => {
    // Fired when the counter has reached 00:00.

    if (isCounterFinished && hasCounterInitialized) {
      saveGameResult(false);
      setIsGameFinishedBeforeTimerRunOut(false);
      setIsGameFinished(true);
      return;
    }

    setIsGameFinished(false);
  }, [isCounterFinished]);

  function handleAnswer(chamber: PortalChamberNumber) {
    const historyId = crypto.randomUUID();

    if (chamber === currentQuestion.answer) {
      writeHistory(true, historyId);
    } else {
      writeHistory(false, historyId);
    }

    showNextQuestion();
  }

  function writeHistory(isUserAnswerCorrect: boolean, historyId: string) {
    const { answer: userAnswer } = currentQuestion;

    setHistory([
      ...history,
      {
        ...currentQuestion,
        userAnswer,
        isUserAnswerCorrect,
        historyId,
      },
    ]);
  }

  function showNextQuestion() {
    // Showing next question.
    if (currentQuestionIndex === questions.length - 1) {
      // If we've run out of questions.
      saveGameResult(true);
      setIsGameFinishedBeforeTimerRunOut(true);
      setIsGameFinished(true);
      return;
    }

    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
  }

  function saveGameResult(isFinished: boolean) {
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
