import React from "react";

import "./Filters.css";

class Filters extends React.Component {
  render() {
    const { tags, selectedTag, setFilter } = this.props;

    return (
      <section className="filters__container">
        <h3>Search by:</h3>
        <ul className="filters">
          {tags.map(tag => (
            <li
              className={`filters__item ${
                selectedTag === tag ? "filters__item--selected" : ""
              }`}
              key={tag}
            >
              <input
                type="button"
                className="filters__btn"
                value={tag}
                onClick={setFilter}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Filters;
