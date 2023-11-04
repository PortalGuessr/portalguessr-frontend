import { useState, useContext } from "react";
import { GuessrContext } from "../../../types/utiltypes/GuessrContextType";
import { AlertContext } from "../../../types/utiltypes/AlertContextType";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { VALID_ANSWERS } from "./_AnswerForm";
import { PortalChamberNumber } from "../../../types/utiltypes/GuessrGameTypes";

const AnswerForm = () => {
  const [answer, setAnswer] = useState("");

  const { handleAnswer } = useContext(GuessrContext);
  const { showAlert } = useContext(AlertContext);

  return (
    <section className="my-4 mx-2">
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          if (!VALID_ANSWERS.includes(answer.toLowerCase())) {
            showAlert(`${answer} isn't a valid answer!`, "danger", 3000);
            return;
          }

          handleAnswer(answer.toLowerCase() as PortalChamberNumber);
          setAnswer("");
        }}
        className="d-flex flex-column gap-2"
        data-bs-theme="dark"
      >
        <Form.Group>
          <Form.Control
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
            type="text"
            placeholder="Your answer (e.g. 02, 11, e02)"
            className="bg-pg-dark text-pg-light"
            maxLength={3}
            required
          ></Form.Control>
        </Form.Group>
        <Button variant="pg-primary" type="submit">
          Guess
        </Button>
      </Form>
    </section>
  );
};

export default AnswerForm;
