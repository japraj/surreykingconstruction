import React from "react";
import { imageSet } from "../../ImageSet";
import "./SetDisplay.css";

type Props = {
  range: number;
  selectedIndex: number;
  selectImage: (index: number) => () => void;
  increaseRange: () => void;
};

export const SetDisplay = ({
  range,
  selectedIndex,
  selectImage,
  increaseRange,
}: Props) => {
  const CardSet = imageSet
    .filter((image, index) => index < range)
    .map((image, index) => (
      <div
        className={`setCard flex justify-center align-center tc ${
          index === selectedIndex ? "selected" : "notSelected"
        } pa2 pointer`}
        onClick={selectImage(index)}
        key={image.url}
      >
        <img
          className="setImage bg-black"
          src={require("../../../../" + image.url)}
          alt={"SelectableCard"}
          draggable={false}
          key={image.url}
        />
      </div>
    ));
  let nullSet: object[] = [];
  let elementsPerRow;
  let container: Element | null = document.getElementById("setContainer");
  if (container)
    elementsPerRow = getComputedStyle(container).gridTemplateColumns.split(" ")
      .length;
  else elementsPerRow = 5;

  if (range < imageSet.length) {
    for (
      let i: number = 0;
      i < elementsPerRow - ((range % elementsPerRow) + 1);
      i++
    ) {
      nullSet.push(<p key={i} />);
    }
  }
  return (
    <section id="setWrapper">
      <div id="setContainer">
        {CardSet}
        {nullSet}
        <label
          className={`f4 pointer ${
            range < imageSet.length - 1 ? "seeMore" : "dn"
          }`}
          onClick={increaseRange}
        >
          <i className="seeMore fa fa-plus f1" aria-hidden="true"></i>
        </label>
      </div>
    </section>
  );
};
