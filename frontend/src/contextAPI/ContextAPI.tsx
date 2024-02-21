import { FC, ReactNode, createContext } from "react";

export const ContextAPI = createContext({});

export const ContextAPIProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ContextAPI.Provider value={{ data: "hey" }}>{children}</ContextAPI.Provider>;
};
