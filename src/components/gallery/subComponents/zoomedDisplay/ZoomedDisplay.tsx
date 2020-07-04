import React from "react";
import { Image } from "../../ImageSet";
import { CycleDirection } from "../../Gallery";
import "./ZoomedDisplay.css";

type Props = {
  selectedImage: Image;
  cycleSelection: (cycleDirection: CycleDirection) => () => void;
  toggleZoom: () => void;
};

export const ZoomedDisplay = ({
  selectedImage,
  cycleSelection,
  toggleZoom,
}: Props) => {
  return (
    <div id="zoomedDisplay" className="block w-100 h-100">
      <div className="flex mt3 justify-center">
        <div className="ma0 flex justify-center">
          <button
            id="leftZoomedButton"
            className="zoomedNavButton"
            onClick={cycleSelection(CycleDirection.PREVIOUS)}
          >
            <p className="fas fa-chevron-left buttonIcon" />
          </button>
          <div id="zoomedBackgroundDiv">
            <div id="zoomedImageDiv">
              <img
                id="zoomedMainImage"
                src={require("../../../../" + selectedImage.url)}
                alt={selectedImage.description}
                draggable={false}
                onClick={toggleZoom}
              />
            </div>
            <div id="space"></div>
            <div id="zoomedLabelContainer">
              <p className="f3 white bg-black">{selectedImage.description}</p>
            </div>
          </div>
          <button
            id="rightZoomedButton"
            className="zoomedNavButton"
            onClick={cycleSelection(CycleDirection.NEXT)}
          >
            <p className="fas fa-chevron-right buttonIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};
