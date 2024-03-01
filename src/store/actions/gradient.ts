import { createAction } from "@reduxjs/toolkit";
import { randomHexColor } from "../../utils/color";

export const CHANGE_FIRST_COLOR = "CHANGE_FIRST_COLOR";
export const CHANGE_LAST_COLOR = "CHANGE_LAST_COLOR";
export const CHANGE_DIRECTION_TO_LEFT = "CHANGE_DIRECTION_TO_LEFT";
export const CHANGE_DIRECTION_TO_RIGHT = "CHANGE_DIRECTION_TO_RIGHT";
export const RANDOM_ALL_COLORS = "RANDOM_ALL_COLORS";
export const CHANGE_DIRECTION_TO_45 = "CHANGE_DIRECTION_TO_45";
export const CHANGE_DIRECTION = "CHANGE_DIRECTION";

//Ici on cherche à exporter une fonction qui retourne une action
//createAction(arg1===type de l'action, arg2===le payload qui sera return)
export const changeColorLast = createAction(CHANGE_LAST_COLOR, () => ({
  payload: { color: randomHexColor() },
}));

export const changeColorFirst = createAction(CHANGE_FIRST_COLOR);
export const changeAllColors = createAction(RANDOM_ALL_COLORS);
export const changeDirection = createAction(
  CHANGE_DIRECTION,
  (direction: string) => ({
    payload: direction,
  }),
);

/* export const changeDirection = (direction: string) => ({
  type: CHANGE_DIRECTION,
  payload: direction,
}); */
