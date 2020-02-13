// Action creator(s) for dispatch?

import * as types from "./types";

export const calculate = key => {
  return {
    type: types.SET_EXPRESSION,
    payload: key
  };
};

// Clear calculator
export const clear = () => {
  return {
    type: types.CLEAR_EXPRESSION
  };
};

// Delete value from calculator
export const deleteLastEntry = () => {
  return {
    type: types.DELETE_LAST_EXPRESSION_ENTRY
  };
};

export const evaluateExpression = () => {
  return {
    type: types.EVALUATE_EXPRESSION
  };
};
