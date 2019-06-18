import React from "react";
import Row from "./../row/Row";

import "./List.css";

class List extends React.Component {
  render() {
    const { products } = this.props;
    if (products.length === 0) {
      return <div>Oops, no products found...</div>;
    }
    return (
      <section>
        <ul className="products">
          {products.map(product => (
            <Row key={product.id} product={product} />
          ))}
        </ul>
      </section>
    );
  }
}

export default List;
