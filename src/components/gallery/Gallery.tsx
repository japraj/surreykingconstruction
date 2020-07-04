import React from "react";
import { MainDisplay } from "./subComponents/mainDisplay/MainDisplay";
import { SetDisplay } from "./subComponents/setDisplay/SetDisplay";
import { ZoomedDisplay } from "./subComponents/zoomedDisplay/ZoomedDisplay";
import { Image, imageSet } from "./ImageSet";
import "./Gallery.css";

type Props = {};

type State = {
  range: number;
  zoomed: boolean;
  selectedImage: Image;
  selectedIndex: number;
  lastInteraction: Date;
};

export enum CycleDirection {
  NEXT,
  PREVIOUS,
}

let interval: any = null;

class Gallery extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      range: 5,
      zoomed: false,
      selectedImage: {
        url: imageSet[0].url,
        description: imageSet[0].description,
      },
      selectedIndex: 0,
      lastInteraction: new Date(),
    };
  }

  selectImage = (manual: boolean) => (index: number) => () => {
    if (manual) this.setState({ lastInteraction: new Date() });
    if (index >= this.state.range) index = 0;
    else if (index < 0) index = this.state.range - 1;
    this.setState({ selectedImage: imageSet[index], selectedIndex: index });
  };

  cycleSelection = (manual: boolean) => (direction: CycleDirection) => () => {
    const index: number = this.state.selectedIndex;
    this.selectImage(manual)(
      direction === CycleDirection.NEXT ? index + 1 : index - 1
    )();
  };

  increaseRange = () => {
    let range: number = this.state.range + 5;
    if (range > imageSet.length) range = imageSet.length - 1;
    this.setState({ range: range });
  };

  toggleZoom = () => {
    this.setState({
      zoomed: this.state.zoomed ? false : true,
      lastInteraction: new Date(),
    });
  };

  componentDidMount() {
    interval = setInterval(() => {
      if (new Date().getTime() - this.state.lastInteraction.getTime() > 15000)
        this.cycleSelection(false)(CycleDirection.NEXT)();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    return (
      <div id="galleryBackground">
        <section id="galleryWrapper">
          <MainDisplay
            selectedImage={this.state.selectedImage}
            cycleSelection={this.cycleSelection(true)}
            toggleZoom={this.toggleZoom}
          />
          <SetDisplay
            range={this.state.range}
            selectedIndex={this.state.selectedIndex}
            selectImage={this.selectImage(true)}
            increaseRange={this.increaseRange}
          />
          {this.state.zoomed ? (
            <ZoomedDisplay
              selectedImage={this.state.selectedImage}
              cycleSelection={this.cycleSelection(true)}
              toggleZoom={this.toggleZoom}
            />
          ) : (
            <React.Fragment />
          )}
        </section>
      </div>
    );
  }
}

export default Gallery;
