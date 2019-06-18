import React from "react";
import { Link } from "react-router-dom";
import "./Row.css";
import { ReactComponent as Star } from "./../../../assets/images/star.svg";

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      showModal: false
    };
  }

  toggleModal(event) {
    event.preventDefault();

    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const { product } = this.props,
      { showModal } = this.state;

    return (
      <li className="product__row">
        <img
          className="product__img"
          src={product.image_link}
          alt={product.name}
          onClick={this.toggleModal}
        />
        <div className="product__description">
          <Link to={`/product/${product.id}`}>
            <p>{product.name}</p>
            <p className="product__rating">
              <Star className="product__star" />
              <span>{product.rating}</span>
            </p>
            <div className="product__colors">
              {product.product_colors.map(color => (
                <div
                  key={color.hex_value}
                  className="product__radio"
                  style={{ backgroundColor: color.hex_value }}
                />
              ))}
            </div>
            <p>€{product.price}</p>
          </Link>
        </div>
        {showModal ? (
          <div className="product__modal">
            <div className="product__info" onClick={this.toggleModal}>
              <img
                className="product__img"
                src={product.image_link}
                alt={product.name}
              />
              <span>{product.name}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </li>
    );
  }
}

export default Row;
