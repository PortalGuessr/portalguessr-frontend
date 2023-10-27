import { useRef } from "react";
import html2canvas from "html2canvas";
import HistoryDifficulties from "./HistoryDifficulties";
import HistoryStats from "./HistoryStats";
import Share from "./Share";
import { getHistoryDifficulties } from "../../utils/getHistoryDifficulties";
import { getHistoryStats } from "../../utils/getHistoryStats";
import { GuessrStatistic } from "../../../types/utiltypes/GuessrGameTypes";

const History = () => {
  const guessrStatistics = JSON.parse(
    localStorage.getItem("USER_STATS") || "[]"
  ) as GuessrStatistic[];
  const { correctCount, correctPercentageDisplay, incorrectCount, played } =
    getHistoryStats(guessrStatistics);
  const { easyCount, hardCount, mediumCount, veryHardCount } =
    getHistoryDifficulties(guessrStatistics);

  const screenshotRef = useRef(null);

  function handleScreenshotClick() {
    // Function to handle screenshot.
    // I use html2canvas for easy conversion from a div element to data url.
    const screenshotId = crypto.randomUUID();

    if (!screenshotRef.current) {
      return;
    }

    html2canvas(screenshotRef.current).then((canvas) => {
      const screenshotUrl = canvas.toDataURL("image/jpeg");

      // Create an invisible anchor link then download the image.
      const anchor = document.createElement("a");
      anchor.href = screenshotUrl;
      anchor.download = `screenshot-${screenshotId}`;
      anchor.click();
    });
  }

  return (
    <section className="my-4 mx-2">
      <div
        ref={screenshotRef}
        style={{
          background:
            "linear-gradient(90deg,hsl(220, 60%, 8%) 20%,hsl(320, 25%, 6%) 80%)",
        }}
      >
        <HistoryStats
          played={played}
          correctPercentage={correctPercentageDisplay}
          incorrectCount={incorrectCount}
          correctCount={correctCount}
        />
        <HistoryDifficulties
          easyCount={easyCount}
          mediumCount={mediumCount}
          hardCount={hardCount}
          veryHardCount={veryHardCount}
        />
      </div>
      <Share onScreenshotClick={handleScreenshotClick} />
    </section>
  );
};

export default History;
