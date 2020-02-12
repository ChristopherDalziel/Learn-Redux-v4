import React, { Component } from "react";
import { connect } from "react-redux";
import { calculate } from "./actions/calculate";
import Calculator from "./components/calculator";
import * as fromCalculator from "./store";
import "./App.css";

export class App extends Component {
  render() {
    return (
      // Rendering our calculator to screen
      <div className="calculator--container">
        <Calculator.Screen {...this.props} />
        <Calculator.Keypad {...this.props} />
      </div>
    );
  }
}

// Saving our expression and total to the state
const mapStateToProps = state => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state)
  };
};

// Dispatching our calculate action
const mapDispatchToProps = dispatch => {
  return {
    calculate: buttonKey => {
      dispatch(calculate(buttonKey));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
