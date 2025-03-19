import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { AppDataProvider } from "./context/AppDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AppDataProvider>
        <App />
      </AppDataProvider>
    </HelmetProvider>
  </StrictMode>
);
