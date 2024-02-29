import { AppState, IAction, IPayload } from "../../@types";
import { randomHexColor } from "../../utils/color";
import {
  CHANGE_DIRECTION,
  CHANGE_DIRECTION_TO_45,
  CHANGE_DIRECTION_TO_LEFT,
  CHANGE_DIRECTION_TO_RIGHT,
  CHANGE_FIRST_COLOR,
  CHANGE_LAST_COLOR,
  RANDOM_ALL_COLORS,
} from "../actions/gradient";

const initialState: AppState = {
  firstColor: "#e367a4",
  lastColor: "#48b1f3",
  direction: "90deg",
  nbColors: 0,
};

//Un reducer est une fonction qui renvoie le state
//Lorsqu'il reçoit une action, il modifie ce state
const colorReducer = (
  state = initialState,
  action: IAction = { type: "@INIT", payload: "@INIT" },
) => {
  //On vérifie le type de l'action reçue

  //On va checker la valeur de action type
  switch (action.type) {
    //On fait quelque chose en fonction de la valeur de chaque action.type
    //Si action .type=== "CHANGE_FIRST_COLOR", on applique la logique indiquée
    case CHANGE_FIRST_COLOR:
      //Avec ce type d'action, on renvoie tout notre state sauf firstColor qu'on vient modifier + nbColors qu'on vient incrémenter
      return {
        ...state,
        firstColor: randomHexColor(),
        nbColors: state.nbColors + 1,
      };
    case CHANGE_LAST_COLOR:
      return {
        ...state,
        lastColor: action.payload?.color,
        nbColors: state.nbColors + 1,
      };
    case RANDOM_ALL_COLORS:
      return {
        ...state,
        lastColor: action.payload?.color2,
        firstColor: action.payload?.color1,
        nbColors: state.nbColors + 2,
      };
    /* case CHANGE_DIRECTION_TO_LEFT:
      return {
        ...state,
        direction: `270deg`,
      };
    case CHANGE_DIRECTION_TO_RIGHT:
      return {
        ...state,
        direction: `90deg`,
      };
    case CHANGE_DIRECTION_TO_45:
      return {
        ...state,
        direction: `45deg`,
      }; */
    case CHANGE_DIRECTION:
      return { ...state, direction: action.payload };
    default:
      return state;
  }
};

export default colorReducer;
