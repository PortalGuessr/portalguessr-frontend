import { useState } from "react";
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

  // Several flags for the game's state.
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isGameFinishedBeforeTimerRunOut, setIsGameFinishedBeforeTimerRunOut] =
    useState(false);

  // Using counter.
  const { counter, isCounterFinished, hasCounterInitialized, resetCounter } =
    useTimeoutTimer(0);

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
    resetCounter,
    setQuestions,
    setHistory,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    setIsGameRunning,
    setIsGameFinished,
    setIsGameFinishedBeforeTimerRunOut,
  };

  return states;
}
