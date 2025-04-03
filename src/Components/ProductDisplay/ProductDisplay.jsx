import React from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
<div className='productdisplay'>
    <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
    
        <div className="product-display-image">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
    </div>
    <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-rightstar">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="product-display-right-price-old">
                    ${product.old_price}
                </div>
                <div className="product-display-right-price-new">
                ${product.new_price}
                </div>
            </div>
            <div className="productdisplayright-description">
                A lightweight,usually knitted a round nickle short sleeves ,worn as undershirt or outer garmnet
            </div>
            <div className="productdisplay-rightsize">
                <h1>Select Size</h1>
                <div className="sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} >Add to Cart</button>
            <div className="productdisplayright-categories">
                <p><span>Category :</span> Women , T-shirt, Crop Top</p>
                <p><span>Tags :</span> Modern, Latest</p>
            </div>
    </div>
</div>
  )
}

export default ProductDisplay
