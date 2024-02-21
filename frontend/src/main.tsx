import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ContextAPIProvider } from "./contextAPI/ContextAPI.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextAPIProvider>
        <App />
      </ContextAPIProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
