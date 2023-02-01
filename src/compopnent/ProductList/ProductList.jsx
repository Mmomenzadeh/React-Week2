import Product from "../Product/Product"
import "./productList.css"

const ProductList =({productlist ,deleteBtn ,setProductList})=>{
    return(
        <div className="productList">
            {
                productlist.map((item)=> (<Product key={item.id} productItem={item} deleteBtn={deleteBtn} setProductList={setProductList}  productlist={productlist}/>))
            }
        </div>
    )
}

export default ProductList