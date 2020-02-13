import * as types from "../actions/types";
import calculate from "../utils/calculate";

// Setting our initial states to 0
let initialState = {
  expression: "",
  total: 0
};

// Check symbols for testing
function setExpression({ expression, total }, action) {
  if (/[\d]*[-+%*/.]$/.exec(expression) && /[-+%*/.]/.exec(action.payload)) {
    console.log("b", expression);
    expression = expression.slice(0, expression.length - 1);
    console.log("a", expression);
  }

  switch (action.type) {
    case types.SET_EXPRESSION:
      if (["+", "/", "*", "%"].includes(action.payload) && !expression) {
        return `${total}${action.payload}`;
      }
      return `${!expression && total ? total : ""}${expression +
        action.payload}`;
    default:
      return expression;
  }
}

// Creating our reducer functions
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EXPRESSION:
      let expression = setExpression(state, action);

      return {
        ...state,
        expression,
        total: calculate(expression) || state.total
      };
    case types.CLEAR_EXPRESSION:
      return {
        ...state,
        expression: "",
        total: 0
      };
    case types.DELETE_LAST_EXPRESSION_ENTRY:
      let exp = state.expression;
      exp = exp
        .split("")
        .slice(0, exp.length - 1)
        .join("");
      return {
        ...state,
        expression: exp,
        total: calculate(exp)
      };
    case types.EVALUATE_EXPRESSION:
      return {
        ...state,
        expression: "",
        total: calculate(state.expression) || state.expression || state.total
      };
    // Default required
    default:
      return state;
  }
};
