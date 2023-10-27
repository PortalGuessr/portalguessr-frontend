import { useState, useEffect } from "react";

export function useTimeoutTimer(initialSeconds: number) {
  const [counter, setCounter] = useState(initialSeconds);
  const [isCounterFinished, setIsCounterFinished] = useState(false);
  const [hasCounterInitialized, setHasCounterInitialized] = useState(false);

  useEffect(() => {
    let timer: number | undefined;

    if (counter > 0) {
      setHasCounterInitialized(true);

      timer = setInterval(() => {
        setCounter((prevSeconds: number) => prevSeconds - 1);
      }, 1000);
    } else {
      setIsCounterFinished(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  const resetCounter = (newSeconds: number) => {
    setCounter(newSeconds);
    setIsCounterFinished(false);
    setHasCounterInitialized(false);
  };

  return {
    counter,
    isCounterFinished,
    hasCounterInitialized,
    resetCounter,
  };
}
