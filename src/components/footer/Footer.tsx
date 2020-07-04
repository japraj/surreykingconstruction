import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="white">
      <p>
        Copyright
        {" " +
          (new Date().getFullYear() > 2020 ? new Date().getFullYear() : 2020)}
        <i className="far fa-copyright inline-icon" aria-hidden="true"></i>
        Surrey King Construction Ltd.
      </p>
    </footer>
  );
};
