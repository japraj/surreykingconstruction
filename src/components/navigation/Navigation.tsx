import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import Branding from "../../resources/Branding.png";
import "./Navigation.css";

type Props = {};

type State = {
  viewNavMenu: boolean;
};

class Navigation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      viewNavMenu: false,
    };
  }

  toggleNavMenu = () => {
    this.setState({ viewNavMenu: this.state.viewNavMenu ? false : true });
  };

  disableNavMenu = () => {
    this.setState({ viewNavMenu: false });
  };

  brandingTag = (
    <img id="branding" src={Branding} alt="Surrey King Construction Limited" />
  );

  navList = (
    <ul>
      <li>
        <ScrollIntoView selector="#display" smooth={true}>
          <p onClick={this.disableNavMenu}>Home</p>
        </ScrollIntoView>
      </li>
      <li>
        <ScrollIntoView selector="#servicesWrapper" smooth={true}>
          <p onClick={this.disableNavMenu}>Services</p>
        </ScrollIntoView>
      </li>
      <li>
        <ScrollIntoView selector="#galleryWrapper" smooth={true}>
          <p onClick={this.disableNavMenu}>Gallery</p>
        </ScrollIntoView>
      </li>
      <li>
        <ScrollIntoView selector="#contactWrapper">
          <p onClick={this.disableNavMenu}>Contact</p>
        </ScrollIntoView>
      </li>
    </ul>
  );

  social = (
    <React.Fragment>
      <article id="social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/surrey.king.construction/"
        >
          <i className="fab fa-instagram" aria-hidden="true" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="social">
          <i className="fab fa-facebook-square  " aria-hidden="true" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="social">
          <i className="fab fa-google" aria-hidden="true" />
        </a>
      </article>
    </React.Fragment>
  );

  contactInfo = (
    <React.Fragment>
      <article id="contactInfo">
        <p>Kulwinder Bhullar</p>
        <p>
          <i className="fa fa-phone inline-icon" aria-hidden="true" />
          778-855-8386
        </p>
        <br />
        <p>Napher Sandhu</p>
        <p>
          <i className="fa fa-phone inline-icon" aria-hidden="true" />
          604-355-6541
        </p>
        <br />
        <p>
          <i className="fa fa-envelope inline-icon" aria-hidden="true" />
          surreykc@gmail.com
        </p>
        <p>
          <i className="fas fa-map-marker-alt inline-icon" />
          BC Lower Mainland
        </p>
      </article>
    </React.Fragment>
  );

  content = (
    <React.Fragment>
      {this.social}
      {this.contactInfo}
    </React.Fragment>
  );

  render() {
    const navMenu = (
      <section className={this.state.viewNavMenu ? "" : "dn"} id="navMenu">
        {this.navList}
        <hr />
        {this.content}
      </section>
    );
    return (
      <React.Fragment>
        <nav id="horizontalNav">
          <i
            id="navBars"
            className="fa fa-bars"
            onClick={this.toggleNavMenu}
          ></i>
          {this.brandingTag}
        </nav>
        {navMenu}
        <nav id="verticalNav">
          {this.brandingTag}
          {this.navList}
          <hr />
          {this.content}
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
