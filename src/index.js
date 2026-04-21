import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { LanguageProvider } from './LanguageContext'; // Importez le fournisseur de langue
import { DarkModeProvider } from './DarkModeContext'; // Dark Mode Provider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </LanguageProvider>
    </I18nextProvider>
  </React.StrictMode>
);