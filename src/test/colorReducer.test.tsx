import { describe, test, expect } from "vitest";
import colorReducer from "../store/reducers/colorReducer";
import { AppState } from "../@types";
import { changeAllColors, changeColorFirst,changeColorLast,changeDirection } from "../store/actions/gradient";
describe("colorReducer", () => {
  const initialState: AppState = {
    firstColor: "#e367a4",
    lastColor: "#48b1f3",
    direction: "90deg",
    nbColors: 0,
  };

  let actualState: AppState = { ...initialState };

  test("get state with no special action type", () => {
    actualState = { ...colorReducer(initialState, { type: "" }) };
    expect(actualState).toStrictEqual(initialState);
  });
  test("should return state with nbColors+1 and a new firstColor", () => {
    actualState = { ...colorReducer(actualState, changeColorFirst()) };
    expect(actualState.nbColors).toBe(1);
    expect(actualState.firstColor).not.toBe(initialState.firstColor);
  });
  test("should return state with nbColors === 3 and new colors", () => {
    //test action type changeAllColors
    actualState = { ...colorReducer(actualState, changeAllColors()) };
    expect(actualState.nbColors).toBe(3);
    expect(actualState.firstColor).not.toBe(initialState.firstColor);
    expect(actualState.lastColor).not.toBe(initialState.lastColor);
  });
  test("should return state with nbColors+1 and a new lastColor", () => {
    actualState = { ...colorReducer(actualState, changeColorLast()) };
    expect(actualState.nbColors).toBe(4);
    expect(actualState.lastColor).not.toBe(initialState.lastColor);
  });
  test("should change the direcction with changeDirection action",()=>{
    actualState={...colorReducer(actualState,changeDirection("200deg"))}
    expect(actualState.direction).toBe("200deg")
  })
});
