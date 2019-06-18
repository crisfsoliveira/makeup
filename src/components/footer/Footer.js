import React from "react";

import "./Footer.css";

class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>&copy;All rigths reserved | Makeup {year}</p>
      </footer>
    );
  }
}

export default Footer;
