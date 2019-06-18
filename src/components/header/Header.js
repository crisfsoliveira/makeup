import React from "react";

import img from "./../../assets/images/swatch-logo.jpg";
import "./Header.css";


class Header extends React.Component {
  render() {
    return (
      <div className="header__container">
        <a href="/">
          <img src={img} alt="Makeup Swatch" />
          <h1>Makeup</h1>
        </a>
      </div>
    );
  }
}

export default Header;
