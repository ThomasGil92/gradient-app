import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import App from "./App.tsx";
import "./styles/index.scss";

//On met un Provider autour de notre application pour pouvoir accéder au store depuis toute notre app sur tous les composants
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
