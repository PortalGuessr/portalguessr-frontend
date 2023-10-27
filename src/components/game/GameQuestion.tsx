import { useContext } from "react";
import { GuessrContext } from "../../../types/utiltypes/GuessrContextType";
import { useBSBreakpointsResizer } from "../../hooks/useBSBreakpointsResizer";
import BlurhashImage from "../image/BlurhashImage";
import { formatTimeoutCounter } from "../../utils/formatTimeoutCounter";
import { convertToDifficultyColor } from "../../utils/convertToDifficultyColor";
import { GuessrQuestion } from "../../../types/utiltypes/GuessrGameTypes";
import { GuessrHistory } from "../../../types/utiltypes/GuessrGameTypes";

const GameQuestion = () => {
  const { blur, grayscale, rotate } = JSON.parse(
    localStorage.getItem("MODIFIERS") ||
      "{ blur: false, rotate: false, grayscale: false }"
  );

  const {
    currentQuestion,
    counter,
    currentQuestionIndex,
    questions,
    setQuestions,
    setHistory,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    setIsGameFinished,
    setIsGameRunning,
    resetCounter,
  } = useContext(GuessrContext);

  const [bsResponsiveWidth, bsResponsiveHeight] = useBSBreakpointsResizer({
    xs: [15, 15],
    sm: [20, 20],
    md: [30, 30],
    lg: [40, 40],
    xl: [50, 50],
    xxl: [60, 60],
    initialWidth: 1920,
    initialHeight: 1080,
  });

  const currentRound = currentQuestionIndex + 1;
  const totalRounds = questions.length;

  const { difficulty, url, bhHash } = currentQuestion;
  const difficultyColor = convertToDifficultyColor(difficulty);

  function handleQuitGameClick() {
    setQuestions([] as GuessrQuestion[]);
    setHistory([] as GuessrHistory[]);
    setCurrentQuestion({} as GuessrQuestion);
    setCurrentQuestionIndex(0);
    setIsGameFinished(false);
    setIsGameRunning(false);
    resetCounter(0);
  }

  return (
    <>
      <a
        className="text-decoration-none link link-pg-primary"
        onClick={() => handleQuitGameClick()}
        style={{ cursor: "pointer" }}
      >
        <i className="bi bi-arrow-left"></i> Quit Game
      </a>
      <section className="my-4 mx-2 d-flex flex-column justify-content-center align-items-center">
        <h5 className="mb-4 px-1">
          <span
            className={`text-pg-${
              // Alternating counter color when reaching counter <= 10.
              counter <= 10 ? (counter % 2 === 0 ? "danger" : "light") : "light"
            }`}
          >
            <i className="bi bi-stopwatch-fill"></i>{" "}
            {formatTimeoutCounter(counter)}
          </span>
        </h5>
        <BlurhashImage
          bhAlt="PortalGuessr chamber image"
          bhHash={bhHash}
          bhSrc={url}
          bhWidth={bsResponsiveWidth}
          bhHeight={bsResponsiveHeight}
          className={`${grayscale && "grayscale"} ${rotate && "rotate"}`}
          keepBlur={blur}
        />
        <div className="mt-4 d-flex align-items-center gap-2">
          <span className="fw-bold py-2 px-1 border rounded bg-pg-dark">
            {currentRound} / {totalRounds}
          </span>
          <span
            className={`py-2 px-1 border rounded bg-pg-${difficultyColor} text-${
              difficulty === "Medium" ? "dark" : "light"
            }`}
          >
            {difficulty}
          </span>
        </div>
      </section>
    </>
  );
};

export default GameQuestion;
