// Action creator(s) for dispatch?

export const calculate = expression => {
  return {
    type: "SET_EXPRESSION",
    payload: expression
  };
};
