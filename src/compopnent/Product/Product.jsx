import React, { Component } from "react";
import "./product.css";

class Product extends Component {
  componentDidMount() {
    this.ElementInput.focus();
  }
  render() {
    return (
      <div className="product-container">
        <p>Name : {this.props.Productitem.name}</p>
        <p> Price : {this.props.Productitem.price}</p>
        <input
          ref={(element) => (this.ElementInput = element)}
          type="text"
          onChange={(e) =>
            this.props.changeTitleHandler(
              e.target.value,
              this.props.Productitem.id
            )
          }
          value={this.props.Productitem.name}
        />
        <br />
        <br />
        <button
          className="btn-delete"
          onClick={() => this.props.deleteBtn(this.props.Productitem.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Product;
