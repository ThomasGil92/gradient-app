import { randomHexColor } from "../../utils/color";

export const CHANGE_LAST_COLOR = "CHANGE_LAST_COLOR";

//Ici on cherche à exporter une fonction qui retourne une action
export const changeColorLast = () => ({
  type: CHANGE_LAST_COLOR,
  payload: { color: randomHexColor() },
});
