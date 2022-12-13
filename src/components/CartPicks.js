import React from 'react'
import { Plus, Minus } from 'lucide-react'
import propTypes from 'prop-types'

const CartPicks = (props) => {
  const { id, title, quantity, image, description, price } = props.cart

  const [itemQuantity, setItemQuantity] = React.useState(quantity)

  const addQuantity = () => {
    if (itemQuantity >= 10) return
    setItemQuantity(itemQuantity + 1)
    props.updateCart(
      {
        id,
        title,
        quantity: itemQuantity + 1,
        image,
        description,
        price
      }
    )
  }

  const removeQuantity = () => {
    if (itemQuantity <= 1) return
    setItemQuantity(itemQuantity - 1)
    props.updateCart(
      {
        id,
        title,
        quantity: itemQuantity - 1,
        image,
        description,
        price
      }
    )
  }

  return (
    <div className='shoppingCart'>
      <div className='cart-card'>
        <div className='info'>
          <div className='card-title'>{title}</div>
          <div className='options'>
            <div className='card-price'>${price}</div>
          </div>
        </div>
        <img src={image} alt={description} />
        <div className='quantity-selector'>
          <div className='quantity-down'>
            <Minus
            onClick={removeQuantity}
            />
          </div>
          <div className='quantity'>qty: {itemQuantity}</div>
          <div className='quantity-up'>
            <Plus
              onClick={addQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

CartPicks.propTypes = {
  cart: propTypes.object,
  updateCart: propTypes.func
}

export default CartPicks
