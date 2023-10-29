import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import "../../styles/css/alerts.css";

function TemporaryAlert({
  message,
  title,
  variant,
  duration,
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
  duration: number;
  onClose: () => void;
}) {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`temporary-alert ${showAlert ? "show" : ""}`}>
      <Alert show={showAlert} variant={variant}>
        <Alert.Heading>{title}</Alert.Heading>
        <span>{message}</span>
      </Alert>
    </div>
  );
}

export default TemporaryAlert;

/* 
Code snippet for how to use it: 

import { useState, ReactNode } from "react";
import TemporaryAlert from "./components/alerts/TemporaryAlert";

function App() {
  const [alert, setAlert] = useState(null as ReactNode);

  const showAlert = (
    title: string,
    message: string,
    variant:
      | "primary"
      | "secondary"
      | "success"
      | "danger"
      | "warning"
      | "info"
      | "light"
      | "dark",
    duration: number
  ) => {
    setAlert(
      <TemporaryAlert
        title={title}
        message={message}
        variant={variant}
        duration={duration}
        onClose={() => setAlert(null as ReactNode)}
      />
    );
  };

  return (
    <div className="container">
      {alert}
      <button
        onClick={() => showAlert("Hello", "Hello, world!", "danger", 2000)}
      >
        Show Alert
      </button>
    </div>
  );
}

export default App;
*/
