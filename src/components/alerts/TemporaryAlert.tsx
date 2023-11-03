import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import "../../styles/css/alerts.css";

function TemporaryAlert({
  message,
  variant,
  duration,
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
        {message}
      </Alert>
    </div>
  );
}

export default TemporaryAlert;
