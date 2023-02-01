import React, { Component } from "react";
import Product from "../Product/Product";
import "./productList.css";

class ProductList extends Component {
  render() {
    return this.props.products.map((item) => {
      return (
        <Product
          key={item.id}
          Productitem={item}
          deleteBtn={this.props.deleteBtn}
          changeTitleHandler={this.props.changeTitleHandler}
          
        />
      );
    });
  }
}

export default ProductList;
