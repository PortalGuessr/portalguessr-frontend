import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import BlurhashImage from "../image/BlurhashImage";
import { StartingCardsProps } from "../../../types/proptypes/StartingCardsProps";
import "../../styles/css/StartingCards.css";
import { GuessrDifficulty } from "../../../types/utiltypes/GuessrGameTypes";
import { DIFFICULTY_CARDS } from "./_StartingCards";

const StartingCards = ({ handleGameStart }: StartingCardsProps) => {
  return (
    <Row className="m-auto gap-2 gap-xxl-0">
      {DIFFICULTY_CARDS.map((card) => {
        const {
          difficultyDisplay,
          handleGameStartParams,
          imgSrc,
          imgHash,
          bgColor,
          textColor,
          titleEmoji,
        } = card;
        const [difficulty, counter, rounds] = handleGameStartParams as [
          GuessrDifficulty,
          number,
          number
        ];
        const randomId = crypto.randomUUID();

        return (
          <Col key={randomId}>
            <Card
              className={`mx-auto card-pg bg-pg-dark bg-pg-light border-3 border-pg-dark`}
              onClick={() => handleGameStart(difficulty, counter, rounds)}
            >
              <Card.Img
                variant="top"
                as={BlurhashImage}
                bhSrc={imgSrc}
                bhAlt={`${difficultyDisplay} image cap`}
                bhHash={imgHash}
                bhWidth={218}
                bhHeight={121}
              />
              <Card.Body>
                <Card.Title
                  className={`text-center p-2 bg-pg-${bgColor} text-pg-${textColor} rounded`}
                >
                  {difficultyDisplay}{" "}
                  <span className="d-none d-md-inline">{titleEmoji}</span>
                </Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className={`bg-pg-dark text-pg-light`}>
                    {difficultyDisplay} difficulty
                  </ListGroup.Item>
                  <ListGroup.Item className={`bg-pg-dark text-pg-light`}>
                    {counter / 60} minutes
                  </ListGroup.Item>
                  <ListGroup.Item className={`bg-pg-dark text-pg-light`}>
                    {rounds} total rounds
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default StartingCards;
