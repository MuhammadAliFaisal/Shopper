import React, { useContext, useEffect } from 'react'
import "./CSS/ShopCategory.css"
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import {ShopContext} from "../Context/ShopContext"
import Item from "../Components/Item/Item"

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext)
  
  return (

    <div className='shop-category'>
       <img className='banner-img' src={props.banner}  />
       <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1- 12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
          {all_product.map((item,i)=>{
            if(props.category===item.category){
              return <Item key={i} id={item.id} new_price={item.new_price} old_price={item.old_price} name={item.name} image={item.image} />
            }else{
              return null;
            }
          })}
      </div>
      <div className="shop-category-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
