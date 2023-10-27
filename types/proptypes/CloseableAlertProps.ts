export interface CloseableAlertProps {
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  heading: string;
  text: string;
  timeoutSeconds: number;
}
