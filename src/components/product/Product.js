import React from "react";

import ProductFetcher from "./../../services/ProductFetcher";
import Loader from "../loader/Loader";

import "./Product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.productFetcher = new ProductFetcher();
    this.state = {
      isLoading: true,
      product: null
    };
  }

  async componentDidMount() {
    try {
      const { params } = this.props.match,
        product = await this.productFetcher.fetchById(parseInt(params.id));
      this.setState({
        isLoading: false,
        product: product
      });
    } catch (e) {
      this.setState({
        isLoading: false,
        error: e
      });
    }
  }

  render() {
    const { error, isLoading, product } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <section className="product__container">
        <a href="/">back</a>
        <img src={product.image_link} alt={product.name} />
        <div className="product__info">
          <p>{product.name}</p>
          <p>€{product.price}</p>
          <p>{product.description}</p>
          <p>Rating: {product.rating}%</p>
        </div>
      </section>
    );
  }
}

export default Product;
