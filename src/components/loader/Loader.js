import React from "react";

import "./Loader.css";

class Loader extends React.Component {
  render() {
    return (
      <section className="container__loader">
        <div className="loader">
          <div className="spinner" />
        </div>
      </section>
    );
  }
}

export default Loader;
