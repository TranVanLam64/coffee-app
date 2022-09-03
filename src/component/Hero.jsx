import React from 'react'

import cartIcon from '../image/icons_cart.svg'
import heroImg from '../image/img-hero.svg'


const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h2>Enjoy your <span>coffee</span> before your activity</h2>
            <p>Boost your productivity and build your mood with a glass of coffee in the morning </p>
            <div className='hero-btn'>
                <button className='order-btn'>
                    Order now
                    <div><img src={cartIcon} /></div>
                </button>
                <button className='more-btn'>More menu</button>
            </div>
        </div>
        <div className='hero-image'>
            <img src={heroImg} />
        </div>
    </div>
  )
}

export default Hero
