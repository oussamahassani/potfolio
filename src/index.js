import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { LanguageProvider } from './LanguageContext'; // Importez le fournisseur de langue

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>

        <App />
      </LanguageProvider>

    </I18nextProvider>,

  </React.StrictMode>
);