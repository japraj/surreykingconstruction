import React from "react";
import blurredPrimaryDisplay from "../../resources/blurredPrimaryDisplay.jpg";
import "./Display.css";

export const Display = () => {
  return (
    <div id="display">
      <img
        src={blurredPrimaryDisplay}
        alt="A beautiful garden and well-kept yard in front of a home."
      />
      <div id="displayTextWrapper">
        <h1 id="displayText">We love building beautiful things</h1>
      </div>
    </div>
  );
};
