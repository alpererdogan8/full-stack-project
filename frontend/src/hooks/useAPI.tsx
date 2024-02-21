import { useContext } from "react";
import { ContextAPI } from "../contextAPI/ContextAPI";

export const useAPI = () => {
  return useContext(ContextAPI);
};
