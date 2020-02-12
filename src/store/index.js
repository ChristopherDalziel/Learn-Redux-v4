import { createStore, combineReducers } from "redux";
import calculateReducer from "../reducers/calculateReducer";

// Combining all our reducers
const rootReducer = combineReducers({
  calculator: calculateReducer
});

// Creating our store
export default createStore(
  rootReducer,
  // Allows us to better visualize the app using the chrome redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const getExpression = state => {
  return state.calculator.expression;
};

export const getTotal = state => {
  return state.calculator.total;
};
