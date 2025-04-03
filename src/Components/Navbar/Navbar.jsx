import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

function Navbar() {
    const [menu, setmenu] = useState("")
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <>
    <div className='navbar'>
        <div className="nav-left">
            <img src={Logo} alt="" />
            <h2>SHOPPER</h2>
        </div>
        <ul className='nav-mid'>
            <li onClick={(e)=>{setmenu(e.target.innerText)}}><Link style={{textDecoration:"none"}} to="/">Shop</Link>{menu==="Shop" ? <hr/>:<></>}</li>
            <li  onClick={(e)=>{setmenu(e.target.innerText)}}><Link style={{textDecoration:"none"}} to="/men">Men</Link> {menu==="Men" ? <hr/>:<></>}</li>
            <li  onClick={(e)=>{setmenu(e.target.innerText)}}><Link style={{textDecoration:"none"}} to="women">Women</Link> {menu==="Women" ? <hr/>:<></>}</li>
            <li  onClick={(e)=>{setmenu(e.target.innerText)}}><Link style={{textDecoration:"none"}} to="kid">Kids</Link>{menu==="Kids" ? <hr/>:<></>}</li>
        </ul>
        <div className="nav-right">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-counter">
                
            {getTotalCartItems()}
            </div>
        </div>
    </div>

    </>
    
  )
}

export default Navbar
