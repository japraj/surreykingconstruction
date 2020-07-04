import React from "react";
import "./Service.css";
import { ServiceType } from "../../ServicesList";

type Props = {
  service: ServiceType;
  expanded: boolean;
};

type State = {
  expanded: boolean;
};

class Service extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      expanded: this.props.expanded,
    };
  }

  toggleExpansion = () => {
    this.setState({ expanded: this.state.expanded ? false : true });
  };

  render() {
    return (
      <article className="service pointer grow" onClick={this.toggleExpansion}>
        <h2
          className={`serviceHeader ${this.state.expanded ? "" : "inactive"}`}
        >
          <i
            className={`f4 fa fa-${this.state.expanded ? "minus" : "plus"}`}
            aria-hidden="true"
          ></i>
          {" " + this.props.service.name}
        </h2>
        <img
          src={require("../../../../resources/galleryImages/_image" +
            this.props.service.imageUrl +
            ".jpeg")}
          alt={this.props.service.description}
          className={this.state.expanded ? "serviceImage" : "dn"}
        />
        <p className={this.state.expanded ? "serviceContent" : "dn"}>
          {this.props.service.description}
        </p>
      </article>
    );
  }
}
export default Service;
