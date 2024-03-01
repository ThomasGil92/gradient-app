import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./reducers/colorReducer";

//On renseigne nos reducers au store
//Le reducer va contenir toutes mes fonctions pour mettre à jour le state du store

const store = configureStore({
  reducer: { color: colorReducer },
  devTools: true,
});

export default store;
