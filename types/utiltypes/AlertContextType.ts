import { createContext } from "react";

export interface AlertContextType {
  showAlert: (
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
  ) => void;
}

export const AlertContext = createContext({} as AlertContextType);
