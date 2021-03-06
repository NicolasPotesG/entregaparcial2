import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "../src/components/main";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const userLang = navigator.language || navigator.userLanguage;

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider
      locale={userLang}
      messages={
        userLang.substring(0, 2) === "es" ? localeEsMessages : localeEnMessages
      }
    >
      <Main />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
