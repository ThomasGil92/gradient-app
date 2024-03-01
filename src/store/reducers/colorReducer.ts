import { AppState } from "../../@types";
import { createReducer } from "@reduxjs/toolkit";
import { randomHexColor } from "../../utils/color";
import {
  changeAllColors,
  changeColorFirst,
  changeColorLast,
  changeDirection,
} from "../actions/gradient";

const initialState: AppState = {
  firstColor: "#e367a4",
  lastColor: "#48b1f3",
  direction: "90deg",
  nbColors: 0,
};

//createReducer se charge de gérer le switch/case
const colorReducer = createReducer(initialState, (builder) => {
  //la méthode addCase rajoute un case ...
  builder
    .addCase(changeColorLast, (state, action) => {
      state.lastColor = action.payload.color;
      state.nbColors += 1;
    })
    .addCase(changeColorFirst, (state) => {
      state.firstColor = randomHexColor();
      state.nbColors += 1;
    })
    .addCase(changeAllColors, (state) => {
      state.firstColor = randomHexColor();
      state.lastColor = randomHexColor();
      state.nbColors += 2;
    })
    .addCase(changeDirection, (state, action) => {
      state.direction = action.payload;
    });
});

export default colorReducer;
