import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GameStatsProps } from "../../../types/proptypes/GameStatsProps";

const GameStats = ({
  correctCount,
  incorrectCount,
  completedRounds,
}: GameStatsProps) => {
  return (
    <Row className="mb-2 mx-auto">
      <Col>
        <div className="fs-2">{correctCount}</div>
        <span>Correct Answers</span>
      </Col>
      <Col>
        <div className="fs-2">{incorrectCount}</div>
        <span>Incorrect Answers</span>
      </Col>
      <Col>
        <div className="fs-2">{completedRounds}</div>
        <span>Completed Rounds</span>
      </Col>
    </Row>
  );
};

export default GameStats;
