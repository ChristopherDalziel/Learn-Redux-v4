import React from "react";

export default ({ onButtonClick, buttonKey }) => {
  let handleClick = () => {
    onButtonClick(buttonKey);
  };
  return (
    <button
      className={buttonKey === "0" ? "btn btn--zero" : "btn"}
      onClick={handleClick}
    >
      {buttonKey}
    </button>
  );
};
