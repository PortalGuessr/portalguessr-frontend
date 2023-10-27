export interface ConfirmAlertProps {
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
  setResult: (result: boolean) => void;
}
