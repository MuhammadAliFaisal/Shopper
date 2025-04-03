import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <img src={footer_logo} />
        <h1>SHOPPER</h1>
      </div>
      <div className="footer-mid">
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className="footer-icons">
            <img src={instagram_icon}/>
            <img src={pinterest_icon}/>
            <img src={whatsapp_icon}/>
      </div>
      <div className="footer-bottom">
        <p>Copyright @ 2023 - All Rights Reserved.</p>
      </div>
    </div>
  )
}
 
export default Footer
