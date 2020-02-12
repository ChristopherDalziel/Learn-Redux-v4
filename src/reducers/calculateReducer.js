import * as types from "../types";
import calculate from "../utils/calculate";

// Setting our initial states to 0
let initialState = {
  expression: "",
  total: 0
};

// Creating our first reducer function
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EXPRESSION:
      let expression = state.expression + action.payload;
      return {
        ...state,
        expression,
        total: calculate(expression)
      };
    // Default required
    default:
      return state;
  }
};
