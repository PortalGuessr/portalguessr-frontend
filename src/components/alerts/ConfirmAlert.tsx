import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "../../styles/css/alerts.css";

function ConfirmableAlert({
  message,
  title,
  variant,
  setResult,
  onClose,
}: {
  message: string;
  title: string;
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
        <Alert.Heading>{title}</Alert.Heading>
        <span>{message}</span>
        <hr />
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

/* 
Code snippet on how to use it:

import { useState, ReactNode } from "react";
import ConfirmableAlert from "./components/alerts/ConfirmAlert";
import { bsVariants } from "../types/utiltypes/bsVariants";

const App = () => {
  const [result, setResult] = useState(false);
  const [alert, setAlert] = useState(null as ReactNode);

  const showConfirmableAlert = (
    title: string,
    message: string,
    setResult: React.Dispatch<React.SetStateAction<boolean>>,
    variant: bsVariants
  ) => {
    setAlert(
      <ConfirmableAlert
        message={message}
        onClose={() => setAlert(null as ReactNode)}
        setResult={setResult}
        title={title}
        variant={variant}
      ></ConfirmableAlert>
    );
  };

  return (
    <div>
      <div>Result: {result}</div>
      {alert}
      <button
        onClick={() =>
          showConfirmableAlert(
            "Hello, World!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facere!",
            setResult,
            "danger"
          )
        }
      >
        Show confirmable alert
      </button>
    </div>
  );
};

export default App;
*/
