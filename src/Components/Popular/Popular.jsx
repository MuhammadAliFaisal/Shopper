import React from 'react'
import "./Popular.css"
import Item from "../Item/Item"
import data_product from "../Assets/data"


const Popular = () => {
  return (
    
    <div className='popular'>
      <h2>POPULAR IN WOMEN</h2>
      <hr />
      <div className="popular-items">
        {data_product.map((item,i)=>{
          return  <Item key={i} new_price={item.new_price} old_price={item.old_price} id={item.id} name={item.name} image={item.image} />
        })}
      </div>

    </div>
  )
}

export default Popular
