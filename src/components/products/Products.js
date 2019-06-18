import React from "react";

import ProductFetcher from "./../../services/ProductFetcher";
import Filters from "./filters/Filters";
import List from "./list/List";
import Pagination from "./pagination/Pagination";
import Loader from "../loader/Loader";

import "./Products.css";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.productFetcher = new ProductFetcher();
    this.setFilter = this.setFilter.bind(this);
    this.pageChange = this.pageChange.bind(this);
    this.state = {
      error: null,
      isLoading: true,
      products: [],
      selectedPage: 1,
      tags: [
        "Canadian",
        "CertClean",
        "Chemical Free",
        "Dairy Free",
        "EWG Verified",
        "EcoCert",
        "Fair Trade",
        "Gluten Free",
        "Hypoallergenic",
        "Natural",
        "No Talc",
        "Non-GMO",
        "Organic",
        "Peanut Free Product",
        "Sugar Free",
        "USDA Organic",
        "Vegan",
        "alcohol free",
        "cruelty free",
        "oil free",
        "purpicks",
        "silicone free",
        "water free"
      ],
      selectedTag: localStorage.getItem("selected-tag")
    };
    this.pageSize = 4;
  }

  async componentDidMount() {
    this.fetchProducts(this.state.selectedTag);
  }

  async fetchProducts(tag) {
    try {
      this.setState({
        isLoading: true,
        selectedPage: 1
      });

      const products = await this.productFetcher.fetch(tag);

      this.setState({
        isLoading: false,
        products: products
      });
    } catch (e) {
      this.setState({
        isLoading: false,
        error: e
      });
    }
  }

  setFilter(event) {
    event.preventDefault();
    let tag = event.target.value;

    if (tag === this.state.selectedTag) {
      tag = "";
    }

    this.setState({
      selectedTag: tag
    });

    localStorage.setItem("selected-tag", tag);
    this.fetchProducts(tag);
  }

  pageChange(event) {
    event.preventDefault();

    this.setState({
      selectedPage: parseInt(event.target.value)
    });
  }

  render() {
    const {
      error,
      isLoading,
      products,
      tags,
      selectedTag,
      selectedPage
    } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return (
        <section className="container">
          <div className="container__filters">
            <Filters
              tags={tags}
              selectedTag={selectedTag}
              setFilter={this.setFilter}
            />
          </div>
          <div className="container__list">
            <Loader />
          </div>
        </section>
      );
    }

    const pagination = products.paginate(this.pageSize, selectedPage);

    return (
      <section className="container">
        <div className="container__filters">
          <Filters
            tags={tags}
            selectedTag={selectedTag}
            setFilter={this.setFilter}
          />
        </div>
        <div className="container__list">
          <List products={pagination.pagedProducts} />
          <Pagination
            pages={pagination.pages}
            selectedPage={selectedPage}
            pageChange={this.pageChange}
          />
        </div>
      </section>
    );
  }
}

export default Products;
