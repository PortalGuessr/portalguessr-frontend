import { HistoryStatsProps } from "../../../types/proptypes/GameStatsDisplay";

//  linear-gradient(90deg,hsl(220, 60%, 8%) 20%,hsl(320, 25%, 6%) 80%)
const HistoryStats = ({
  correctCount,
  correctPercentage,
  incorrectCount,
  played,
}: HistoryStatsProps) => {
  return (
    <div className="mb-4">
      <h4 className="text-center">📋 Statistics</h4>
      <div className="d-flex justify-content-center justify-content-md-around align-items-center gap-2 mx-auto border-bottom border-top py-2">
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="fs-2">{played}</div>
          <span>Played</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="fs-2">{correctPercentage}</div>
          <span>Correct %</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="fs-2">{correctCount}</div>
          <span>Correct</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="fs-2">{incorrectCount}</div>
          <span>Incorrect</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryStats;
