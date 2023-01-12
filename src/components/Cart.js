import React from 'react'
import CartPicks from './CartPicks'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

const Cart = (props) => {
  const { cart } = props

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  // const [subTotal, setSubTotal] = React.useState(total)

  const cartMap = cart.map((item, index) => {
    return (
        <CartPicks key={index}
          cart={item}
          updateCart={props.updateCart}
        />
    )
  })

  const path = process.env.NODE_ENV === 'development' ? '/' : '/projects/shoppingCart'

  return (
    <div className='cartHead'>
      <div className='cart-cards'>
        <div className='container-flex'>
          { cart.length < 1 ? <h1>Empty Cart</h1> : <h1>Cart</h1>}
          <NavLink to={ path }><button className='continue'>Continue Shopping</button></NavLink>
        </div>
        {cart.length > 0 &&
        <div>
          {cartMap}
        </div>
        }
      </div>
      <div className='subTotal'>
        <div className='container-flex'>
          <h1>Checkout</h1>
        </div>
        <div className='checkout-border'>
          <div className='checkout-totals'>
            <div>Shipping</div>
            <div>TBD</div>
          </div>
          <div className='checkout-totals'>
            <div>Discount</div>
            <div>- $0</div>
          </div>
          <div className='checkout-totals'>
            <div>Tax</div>
            <div>TBD</div>
          </div>
          <div className='checkout-totals'>
            <div className='total'>Estimated Total:</div>
            <div>${total}</div>
          </div>
        </div>
          <NavLink to='checkout'><button className='checkout'>Checkout</button></NavLink>
          <NavLink to={ path }><button className='continue'>Continue Shopping</button></NavLink>
      </div>
    </div>
  )
}

Cart.propTypes = {
  cart: propTypes.array,
  updateCart: propTypes.func
}

export default Cart
