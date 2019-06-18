import React from "react";

import "./Pagination.css";

class Pagination extends React.Component {
  render() {
    const { pages, selectedPage, pageChange } = this.props;

    let pagination = [];
    for (let i = 1; i <= pages; i++) {
      pagination.push(
        <li
          className={`pagination__item ${
            selectedPage === i ? "pagination__item--selected" : ""
          }`}
          key={i}
        >
          <input
            type="button"
            className="pagination__btn"
            value={i}
            onClick={pageChange}
          />
        </li>
      );
    }
    return (
      <section>
        <ul className="pagination"> {pagination} </ul>
      </section>
    );
  }
}
export default Pagination;
