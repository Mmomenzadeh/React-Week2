import React from "react";
import "./product.css"

const Product = ({Productitem , deleteBtn})=>{

    return(
        <div className="product-container">
            <p>Name : {Productitem.name}</p>
            <p> Price : {Productitem.price}</p>
            <input type="text" />
            <br /><br />
            <button className="btn-delete" onClick={()=>deleteBtn(Productitem.id)}>Delete</button>
        </div>
    )
}


export default Product