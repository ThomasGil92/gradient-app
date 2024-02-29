import { TColor } from "../../@types";
import { randomHexColor } from "../../utils/color";

export const CHANGE_FIRST_COLOR = "CHANGE_FIRST_COLOR";
export const CHANGE_LAST_COLOR = "CHANGE_LAST_COLOR";
export const CHANGE_DIRECTION_TO_LEFT = "CHANGE_DIRECTION_TO_LEFT";
export const CHANGE_DIRECTION_TO_RIGHT = "CHANGE_DIRECTION_TO_RIGHT";
export const RANDOM_ALL_COLORS = "RANDOM_ALL_COLORS";
export const CHANGE_DIRECTION_TO_45 = "CHANGE_DIRECTION_TO_45";
export const CHANGE_DIRECTION = "CHANGE_DIRECTION";

//Ici on cherche à exporter une fonction qui retourne une action
export const changeColorLast = () => ({
  type: CHANGE_LAST_COLOR,
  payload: { color: randomHexColor() },
});
export const changeColorFirst = () => ({
  type: CHANGE_FIRST_COLOR,
});
/* export const changedirectionToLeft = () => ({
  type: CHANGE_DIRECTION_TO_LEFT,
});
export const changedirectionToRight = () => ({
  type: CHANGE_DIRECTION_TO_RIGHT,
});
export const changeDirectionTo45 = () => ({
  type: CHANGE_DIRECTION_TO_45,
}); */
export const changeAllColors = (color1: TColor, color2: TColor) => ({
  type: RANDOM_ALL_COLORS,
  payload: { color1, color2 },
});

export const changeDirection = (direction: string) => ({
  type: CHANGE_DIRECTION,
  payload: direction,
});
