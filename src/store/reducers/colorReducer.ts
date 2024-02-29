import { AppState } from "../../@types";
import { randomHexColor } from "../../utils/color";
import {CHANGE_LAST_COLOR} from "../actions/gradient"

const initialState: AppState = {
  firstColor: "#e367a4",
  lastColor: "#48b1f3",
  direction: "90deg",
  nbColors: 0,
};

//Un reducer est une fonction qui renvoie le state
//Lorsqu'il reçoit une action, il modifie ce state
const colorReducer = (state = initialState, action = { type: "@INIT" ,payload:"@INIT"}) => {
  //On vérifie le type de l'action reçue

  //On va checker la valeur de action type
  switch (action.type) {
    //On fait quelque chose en fonction de la valeur de chaque action.type
    //Si action .type=== "CHANGE_FIRST_COLOR", on applique la logique indiquée
    case "CHANGE_FIRST_COLOR":
      //Avec ce type d'action, on renvoie tout notre state sauf firstColor qu'on vient modifier + nbColors qu'on vient incrémenter
      return {
        ...state,
        firstColor: randomHexColor(),
        nbColors: state.nbColors + 1,
      };
    case CHANGE_LAST_COLOR:
      console.log(action);
      return {
        ...state,
        lastColor: action.payload.color,
        nbColors: state.nbColors + 1,
      };
    case "CHANGE_DIRECTION_TO_LEFT":
      return {
        ...state,
        direction: `270deg`,
      };
    case "CHANGE_DIRECTION_TO_RIGHT":
      return {
        ...state,
        direction: `90deg`,
      };
    default:
      return state;
  }
};

export default colorReducer;
