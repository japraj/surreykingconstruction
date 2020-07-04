import React from "react";
import { Image } from "../../ImageSet";
import { CycleDirection } from "../../Gallery";
import "./MainDisplay.css";

type Props = {
  selectedImage: Image;
  cycleSelection: (cycleDirection: CycleDirection) => () => void;
  toggleZoom: () => void;
};

export const MainDisplay = ({
  selectedImage,
  cycleSelection,
  toggleZoom,
}: Props) => {
  return (
    <div className="flex justify-center">
      <div className="ma0 flex justify-center">
        <button
          id="leftButton"
          className="navButton"
          onClick={cycleSelection(CycleDirection.PREVIOUS)}
        >
          <p className="fas fa-chevron-left buttonIcon" />
        </button>
        <div id="backgroundDiv" onClick={toggleZoom}>
          <div id="imageDiv" onClick={toggleZoom}>
            <img
              id="mainImage"
              src={require("../../../../" + selectedImage.url)}
              alt={selectedImage.description}
              draggable={false}
              onClick={toggleZoom}
            />
          </div>
          <div id="space"></div>
          <div id="labelContainer">
            <p className="f4 white bg-black">{selectedImage.description}</p>
          </div>
        </div>

        <button
          className="navButton"
          id="rightButton"
          onClick={cycleSelection(CycleDirection.NEXT)}
        >
          <p className="fas fa-chevron-right buttonIcon" />
        </button>
      </div>
    </div>
  );
};
