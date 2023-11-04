import { useState, ReactNode } from "react";
import { useTimeoutTimer } from "./useTimeoutTimer";
import {
  GuessrQuestion,
  GuessrHistory,
} from "../../types/utiltypes/GuessrGameTypes";

export function useGameStates() {
  // Questions array and questions history for every game.
  const [questions, setQuestions] = useState([] as GuessrQuestion[]);
  const [history, setHistory] = useState([] as GuessrHistory[]);

  // Current question and its index in the array.
  const [currentQuestion, setCurrentQuestion] = useState({} as GuessrQuestion);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Flag for data fetching.
  const [isFetchingData, setIsFetchingData] = useState(false);

  // Several flags for the game's state.
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isGameFinishedBeforeTimerRunOut, setIsGameFinishedBeforeTimerRunOut] =
    useState(false);

  // Using counter.
  const { counter, isCounterFinished, hasCounterInitialized, resetCounter } =
    useTimeoutTimer(0);

  // Alerts.
  const [alert, setAlert] = useState(null as ReactNode);

  const states = {
    counter,
    questions,
    history,
    currentQuestion,
    currentQuestionIndex,
    isGameRunning,
    isGameFinished,
    isCounterFinished,
    hasCounterInitialized,
    isGameFinishedBeforeTimerRunOut,
    isFetchingData,
    alert,
    resetCounter,
    setQuestions,
    setHistory,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    setIsGameRunning,
    setIsGameFinished,
    setIsGameFinishedBeforeTimerRunOut,
    setIsFetchingData,
    setAlert,
  };

  return states;
}
