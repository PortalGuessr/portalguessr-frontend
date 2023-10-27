import { Route, Routes } from "react-router-dom";
import { useGameStates } from "./hooks/useGameStates";
import { useGameLogics } from "./hooks/useGameLogics";
import Container from "react-bootstrap/Container";
import Game from "./pages/Game";
import User from "./pages/User";
import Setting from "./pages/Setting";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import BottomFooter from "./components/footers/BottomFooter";
import MainFooter from "./components/footers/MainFooter";
import Version from "./components/footers/Version";
import Navbar from "./components/navigation/Navbar";
import "./styles/css/App.css";
import { GuessrContext } from "../types/utiltypes/GuessrContextType";

const App = () => {
  const {
    counter,
    currentQuestion,
    currentQuestionIndex,
    hasCounterInitialized,
    history,
    isCounterFinished,
    isGameFinished,
    isGameFinishedBeforeTimerRunOut,
    isGameRunning,
    questions,
    resetCounter,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    setHistory,
    setIsGameFinished,
    setIsGameFinishedBeforeTimerRunOut,
    setIsGameRunning,
    setQuestions,
  } = useGameStates();

  const handleAnswer = useGameLogics({
    currentQuestion,
    currentQuestionIndex,
    hasCounterInitialized,
    history,
    isCounterFinished,
    questions,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    setHistory,
    setIsGameFinished,
    setIsGameFinishedBeforeTimerRunOut,
  });

  return (
    <main className="text-pg-light">
      <Container>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <GuessrContext.Provider
                value={{
                  counter,
                  currentQuestion,
                  currentQuestionIndex,
                  history,
                  isGameFinishedBeforeTimerRunOut,
                  questions,
                  isGameFinished,
                  isGameRunning,
                  resetCounter,
                  setCurrentQuestion,
                  setCurrentQuestionIndex,
                  setIsGameFinished,
                  setIsGameRunning,
                  setQuestions,
                  setHistory,
                  handleAnswer,
                }}
              >
                <Game />
              </GuessrContext.Provider>
            }
          />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomFooter />
        <MainFooter />
        <Version />
      </Container>
    </main>
  );
};

export default App;
