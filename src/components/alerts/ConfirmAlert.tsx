import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { ConfirmAlertProps } from "../../../types/proptypes/ConfirmAlertProps";

const ConfirmAlert = ({
  heading,
  text,
  variant,
  setResult,
}: ConfirmAlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return isVisible ? (
    <Alert variant={variant}>
      <Alert.Heading>{heading}</Alert.Heading>
      <p>{text}</p>
      <hr />
      <Button
        variant="pg-primary"
        onClick={() => {
          setResult(true);
          setIsVisible(false);
        }}
      >
        Ok
      </Button>
      <Button
        variant="pg-dark"
        onClick={() => {
          setResult(false);
          setIsVisible(false);
        }}
      >
        Cancel
      </Button>
    </Alert>
  ) : null;
};

export default ConfirmAlert;
