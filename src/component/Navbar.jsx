import React from 'react'
import { useState } from 'react'

import logo from '../image/logo_coffe.svg'
import searchIcon from '../image/akar-icons_search.svg'
import cartIcon from '../image/icons_cart.svg'

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='navbar'>
            <img className='navbar-logo' src={logo} alt='logo' />
            <div className='navigation'>
                <a className='navigation-link navigation-link--active'>About us</a>
                <a className='navigation-link'>Our Product</a>
                <a className='navigation-link'>Delivery</a>
            </div>
            <div className='search'>
                <img className='search-icon' src={searchIcon} />
                <input
                  placeholder='Cappuccino' 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <img className='cart-icon' src={cartIcon} />
    </div>
  )
}

export default Navbar
