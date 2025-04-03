import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'


const Item = (props) => {
    console.log(props);
    
  return (
    <div className='Item'> 
                <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
                <p>{props.name}</p>
            <div className="item-price">
                <div className="new-price">
                    ${props.new_price}
                </div>
                <div className="old-price">
                    {props.old_price}
                </div>
            </div>

            
     </div>
  )
}

export default Item
