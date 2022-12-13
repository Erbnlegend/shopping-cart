import React from 'react'
import { NavLink } from 'react-router-dom'
import { Phone, LocateFixed, ShoppingBag, Moon } from 'lucide-react'
import propTypes from 'prop-types'

const Navbar = (props) => {
  const { cart } = props
  return (
    <div className='navbar'>
      <div className='logo'><NavLink to='/'>ShopStuff</NavLink></div>
      <ul>
        <li className='moon' onClick={props.toggleTheme}><Moon /></li>
        <li className='location'><LocateFixed /></li>
        <li><NavLink to='about'>About</NavLink></li>
        <li className='cart'><NavLink to='cart'><ShoppingBag /><span className='cartNumber'>{cart.length}</span></NavLink></li>
        <li className='phone'><Phone /></li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  cart: propTypes.array
}

export default Navbar
