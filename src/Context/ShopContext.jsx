import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"


export const ShopContext = createContext(null);
const getDefaultCart = () =>{
  let cart = {};
  for(let index = 0; index <= all_product.length; index++){  //Makes an Object With All Products Keys Initialized by 0
      cart[index] = 0;
  }
  return cart;

  
}

const ShopContextProvider = (props) => {
    const [cartItems,setcartItems] = useState(getDefaultCart()) //Default Cart Saved In Variable 
    const addToCart = (productId) =>{
        setcartItems((prev)=>({...prev,[productId]:prev[productId]+1})) ///Prev Saved then Key:Value
    }
    const removeFromCart = (productId) =>{
        setcartItems((prev)=>({...prev,[productId]:prev[productId]-1}))  //Prev Saved then Key:Value
    }
    const getTotalCartItems = () =>{
      let total = 0;
      for(const i in cartItems){
        if(cartItems[i]>0){
          total+=cartItems[i];
        }
      }
      return total;
    }
    const getTotalCartAmount = () =>{
      let totalAmount=0;
      for(const item in cartItems)
        {
        if(cartItems[item]>0)
          {
          let iteminfo=all_product.find((product)=>product.id===Number(item))
          totalAmount+=iteminfo.new_price*cartItems[item]
         }
        }
        return totalAmount;
  }
    const contextValue={all_product,addToCart,removeFromCart,cartItems,getTotalCartItems,getTotalCartAmount}
    
  return (
    <>
      <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>
    </>
  )
}


export default ShopContextProvider
