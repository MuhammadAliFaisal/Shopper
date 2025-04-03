import React from 'react'
import './Hero.css'
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
import hand_icon from "../Assets/hand_icon.png"


function Hero() {
  return (
    <div className='hero-section'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <p>new 👋 <br /> collections <br /> for everyone</p>
            <button>Latest collection <img src={arrow_icon}/> </button>
        </div>  
        <div className="hero-right">
            <img src={hero_image}/>
        </div>      
    </div>
  )
}

export default Hero
