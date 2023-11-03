import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "../../styles/css/alerts.css";

function ConfirmableAlert({
  message,
  variant,
  setResult,
  onClose,
}: {
  message: string;
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  setResult: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}) {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className={`temporary-alert ${showAlert ? "show" : ""}`}>
      <Alert show={showAlert} variant={variant}>
        {message}
        <div className="d-flex gap-2 justify-content-end">
          {" "}
          <Button
            variant="pg-danger"
            onClick={() => {
              setResult(true);
              setShowAlert(false);
              onClose();
            }}
          >
            Ok
          </Button>
          <Button
            variant="pg-dark"
            onClick={() => {
              setResult(false);
              setShowAlert(false);
              onClose();
            }}
          >
            Cancel
          </Button>
        </div>
      </Alert>
    </div>
  );
}

export default ConfirmableAlert;
