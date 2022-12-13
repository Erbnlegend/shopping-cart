import React from 'react'
import { Heart } from 'lucide-react'
import propTypes from 'prop-types'

const Favorites = (props) => {
  const { id, title, price, description, image } = props.item

  const faves = props.favorites.map(item => (item.id))

  const [newCartItem, setNewCartItem] = React.useState(
    {
      id,
      title,
      price,
      description,
      image,
      quantity: 1
    }
  )
  function addCart () {
    setNewCartItem(newCartItem)
    props.addToCart(newCartItem)
  }

  const [newFavItem, setNewFavItem] = React.useState(
    {
      id,
      title,
      price,
      description,
      image
    }
  )

  function addFaves () {
    setNewFavItem(newFavItem)
    props.addToFavorites(newFavItem)
  }

  return (
    <div className='card'>
      <div className='info'>
      <div className='card-title'>{title}</div>
      <div className='options'>
        <div className='fav'>{faves.includes(id) && <Heart fill='red' onClick={addFaves} />}{!faves.includes(id) && <Heart onClick={addFaves}/>}</div>
        <div className='card-price'>${price}</div>
      </div>
      </div>
      <img src={image} alt={description} />
      <button className='addCart' onClick={addCart}>Add to Cart</button>
    </div>
  )
}

Favorites.propTypes = {
  addToCart: propTypes.func,
  addToFavorites: propTypes.func,
  favorites: propTypes.array,
  item: propTypes.object
}

export default Favorites
