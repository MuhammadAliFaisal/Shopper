import React from 'react'
import new_collection from "../Assets/new_collections"
import "./NewCollections.css"
import Item from "../Item/Item"


const NewCollections = () => {
  return (
    <div className='new-collection'>
      <h2>New Collections</h2>
      <hr />
      <div className="new-collection-items">
        {new_collection.map((item,i)=>{
          return  <Item key={i} new_price={item.new_price} old_price={item.old_price} id={item.id} name={item.name} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
