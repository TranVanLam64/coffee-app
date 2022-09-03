import React from 'react'

import './App.css'
import Hero from './component/Hero'
import Navbar from './component/Navbar'


const App = () => {
  return (
    <div className='app'>
      <div className='header'>
        <Navbar />
        <Hero />
        <div className='popular-product'></div>

      </div>
    </div>
  )
}

export default App
