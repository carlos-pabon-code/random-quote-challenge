import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoaderProvider } from "./context/LoaderContext";
import { RandomQuoteProvider } from "./context/RandomQuoteContext";
import GlobalCss from "./globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalCss />
    <RandomQuoteProvider>
      <LoaderProvider>
        <App />
      </LoaderProvider>
    </RandomQuoteProvider>
  </React.StrictMode>
);
