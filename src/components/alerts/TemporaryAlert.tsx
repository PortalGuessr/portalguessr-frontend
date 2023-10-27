import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { CloseableAlertProps } from "../../../types/proptypes/CloseableAlertProps";

const CloseableAlert = ({
  heading,
  text,
  variant,
  timeoutSeconds,
}: CloseableAlertProps) => {
  const [hasTimerEnded, setHasTimerEnded] = useState(false);

  setTimeout(() => {
    setHasTimerEnded(true);
  }, timeoutSeconds * 1000);

  return hasTimerEnded ? null : (
    <Alert variant={variant}>
      <Alert.Heading>{heading}</Alert.Heading>
      <p>{text}</p>
    </Alert>
  );
};

export default CloseableAlert;
