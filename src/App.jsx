import React from "react";
import "./App.css";
import Main from "./compopnent/Main/Main";
import ProductList from "./compopnent/ProductList/ProductList";
import Authentication from "./compopnent/Context/Authentication";

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "book1",
        price: 50,
      },
      {
        id: 2,
        name: "book1",
        price: 50,
      },
      {
        id: 3,
        name: "book1",
        price: 50,
      },
    ],
    showProduct: false,
    showMain: true,
    auth: false,
  };
  toggle = () => {
    const show = this.state.showProduct;
    this.setState({ showProduct: !show });
  };

  deleteBtn = (id) => {
    const findIndex = this.state.products.findIndex((item) => item.id === id);
    const productsitem = [...this.state.products];
    productsitem.splice(findIndex, 1);
    this.setState({ products: productsitem });
  };
  changeTitleHandler = (inputValue, id) => {
    const productIndex = this.state.products.findIndex(
      (item) => item.id === id
    );
    const ProductCopywithIndex = { ...this.state.products[productIndex] };
    ProductCopywithIndex.name = inputValue;
    const ProductsCopy = [...this.state.products];
    ProductsCopy[productIndex] = ProductCopywithIndex;
    this.setState({ products: ProductsCopy });
  };
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  loginHandler = () => {
    this.setState({ auth: true });
  };

  render() {
    let product = null;
    if (this.state.showProduct) {
      product = (
        <div className="list">
          {
            <ProductList
              products={this.state.products}
              changeTitleHandler={this.changeTitleHandler}
              deleteBtn={this.deleteBtn}
            />
          }
        </div>
      );
    }

    return (
      <div className="app">
        <button
          className="btn-app"
          onClick={() => this.setState({ showMain: false })}
        >
          Remove main
        </button>
        <Authentication.Provider
          value={{ isAuth: this.state.auth, logIn: this.loginHandler }}
        >
          {this.state.showMain ? (
            <Main toggle={this.toggle} />
          ) : null}
          {product}
        </Authentication.Provider>
      </div>
    );
  }
}

export default App;
