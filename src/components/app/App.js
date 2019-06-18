import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Products from "./../products/Products";
import Product from "./../product/Product";
import Header from "./../header/Header";
import Footer from "./../footer/Footer";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <main role="main">
          <Header />
          <Router>
            <Route exact path="/" component={Products} />
            <Route path="/product/:id" component={Product} />
          </Router>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
