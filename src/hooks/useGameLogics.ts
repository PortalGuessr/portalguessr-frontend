import { useState, useEffect } from "react";
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
  showAlert,
}: GameLogicsHookParam) {
  const [imageCooldown, setImageCooldown] = useState(false);

  useEffect(() => {
    if (isCounterFinished && hasCounterInitialized) {
      handleCounterFinished();
    }
  }, [isCounterFinished]);

  const imageSrc = currentQuestion.url;

  useEffect(() => {
    // Check whether the blur modifier is active or not.
    // If it does active, we don't need to wait for the image to load.
    const { blur } = JSON.parse(
      localStorage.getItem("MODIFIERS") ||
        '{ "blur": false, "rotate": false, "grayscale": false }'
    );

    if (blur) {
      setImageCooldown(false);
    } else {
      const img = new Image();

      img.onload = () => {
        setImageCooldown(false);
      };

      img.src = imageSrc;
    }
  }, [imageSrc]);

  function handleCounterFinished() {
    // Triggered when the counter reaches 0 AND the counter has been initialized.
    saveGameResult(false);
    setIsGameFinishedBeforeTimerRunOut(false);
    setIsGameFinished(true);
    resetCounter(0);
  }

  function handleAnswer(chamber: PortalChamberNumber) {
    if (imageCooldown) {
      showAlert(
        "Image is still loading! You can't answer before the image load.",
        "danger",
        2000
      );
      return;
    }

    // Handling user answer (when the user clicked the answer button).
    // Here we save the result to history, then show the next question if available.
    const historyId = crypto.randomUUID();
    const isUserAnswerCorrect = chamber === currentQuestion.answer;
    const userAnswer = currentQuestion.answer;

    writeHistory(isUserAnswerCorrect, historyId, userAnswer);
    showNextQuestion(isUserAnswerCorrect);

    setImageCooldown(true);
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
