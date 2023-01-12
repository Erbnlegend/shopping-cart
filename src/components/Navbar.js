import React from 'react'
import { NavLink } from 'react-router-dom'
import { Phone, LocateFixed, ShoppingBag, Moon } from 'lucide-react'
import propTypes from 'prop-types'

const Navbar = (props) => {
  const { cart } = props

  const path = process.env.NODE_ENV === 'development' ? '/' : '/projects/shoppingCart'
  return (
    <div className='navbar'>
      <div className='logo'><NavLink to={path}>ShopStuff</NavLink></div>
      <ul>
        <li className='moon' onClick={props.toggleTheme}><Moon /></li>
        <li className='location'><LocateFixed /></li>
        <li><NavLink to={`${path}/about`}>About</NavLink></li>
        <li className='cart'><NavLink to={`${path}/cart`}><ShoppingBag /><span className='cartNumber'>{cart.length}</span></NavLink></li>
        <li className='phone'><Phone /></li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  cart: propTypes.array,
  toggleTheme: propTypes.func
}

export default Navbar
