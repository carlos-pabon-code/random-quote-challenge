import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { LoaderProvider } from "./context/LoaderContext";
import { QuoteProvider } from "./context/QuoteContext";
import { RandomQuoteProvider } from "./context/RandomQuoteContext";
import GlobalCss from "./globals.css";
import { AuthorQuotes } from "./pages/AuthorQuotes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalCss />
    <RandomQuoteProvider>
      <LoaderProvider>
        <QuoteProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/quotes/:author" element={<AuthorQuotes />} />
            </Routes>
          </HashRouter>
        </QuoteProvider>
      </LoaderProvider>
    </RandomQuoteProvider>
  </React.StrictMode>
);
