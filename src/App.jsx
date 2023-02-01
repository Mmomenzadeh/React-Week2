import React from "react";
import Product from "./compopnent/Product/Product";
import "./App.css";

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
  };
  toggle = () => {
    const show = this.state.showProduct;
    this.setState({ showProduct: !show });
  };

  deleteBtn =(id)=>{
    const findIndex = this.state.products.findIndex((item)=> (item.id === id))
    const productsitem = [...this.state.products]
     productsitem.splice(findIndex,1)
    this.setState({products : productsitem})
  }

  render() {
    let product = null;
    if (this.state.showProduct) {
      product = (
        <div className="list">
         {
          this.state.products.map((item , index)=>{return <Product key={item.id} Productitem={item} deleteBtn={this.deleteBtn} />})
         }
        </div>
      );
    }

    return (  
      <div className="app">
        <h2>BookStore</h2>
        <button className="btn-app" onClick={this.toggle}>
          show/hide
        </button>
        {product}
      </div>
    );
  }
}

export default App;
