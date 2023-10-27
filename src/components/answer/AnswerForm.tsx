import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GuessrContext } from "../../../types/utiltypes/GuessrContextType";
import { PortalChamberNumber } from "../../../types/utiltypes/GuessrGameTypes";

const AnswerForm = () => {
  const { handleAnswer } = useContext(GuessrContext);

  const [answer, setAnswer] = useState("");

  return (
    <section className="my-4 mx-2">
      <Form
        className="d-flex flex-column gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleAnswer(answer as PortalChamberNumber);
          setAnswer("");
        }}
      >
        <Form.Select
          aria-label="Chamber selection"
          className="bg-pg-dark text-pg-light"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select a chamber
          </option>
          <option value="00">Chamber 00</option>
          <option value="01">Chamber 01</option>
          <option value="02">Chamber 02</option>
          <option value="03">Chamber 03</option>
          <option value="04">Chamber 04</option>
          <option value="05">Chamber 05</option>
          <option value="06">Chamber 06</option>
          <option value="07">Chamber 07</option>
          <option value="08">Chamber 08</option>
          <option value="09">Chamber 09</option>
          <option value="10">Chamber 10</option>
          <option value="11">Chamber 11</option>
          <option value="12">Chamber 12</option>
          <option value="13">Chamber 13</option>
          <option value="14">Chamber 14</option>
          <option value="15">Chamber 15</option>
          <option value="16">Chamber 16</option>
          <option value="17">Chamber 17</option>
          <option value="18">Chamber 18</option>
          <option value="19">Chamber 19</option>
          <option value="e00">Escape 00</option>
          <option value="e01">Escape 01</option>
          <option value="e02">Escape 02</option>
        </Form.Select>
        <Button type="submit" variant="pg-primary">
          Guess
        </Button>
      </Form>
    </section>
  );
};

export default AnswerForm;
