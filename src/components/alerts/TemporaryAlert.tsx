import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import "../../styles/css/temporary-alert.css";

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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="temporary-alert">
      <Alert show={isVisible} variant={variant}>
        {message}
      </Alert>
    </div>
  );
}

export default TemporaryAlert;
