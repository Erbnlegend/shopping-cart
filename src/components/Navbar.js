import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1><NavLink to='/'>ShopStuff</NavLink></h1>
      <ul>
        <li><div className='location'>Location goes here</div></li>
        <li className='phone'>111-111-1111</li>
        <li><NavLink to='about'>About</NavLink></li>
        <li><NavLink to='cart'>Cart</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
