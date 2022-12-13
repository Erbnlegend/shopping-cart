import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '~/components/Navbar'
import About from '~/components/About'
import Cart from '~/components/Cart'
import Home from '~/components/Home'
import SearchField from './components/SearchField'

import data from './data/data'

const App = () => {
  const [products, setProducts] = React.useState(data)

  const [cart, setCart] = React.useState([])

  const [favorites, setFavorites] = React.useState([])

  const addToCart = (addedProduct) => {
    const findItem = cart.filter(item => item.id === addedProduct.id)
    if (findItem.length === 0) {
      setCart(prevCart => {
        return [
          ...prevCart, ...[addedProduct]
        ]
      })
    } else {
      setCart(prevCart => {
        return [
          ...prevCart
          // ...prevCart, { ...addedProduct, quantity: addedProduct.quantity + 1 }
        ]
      })
    }
  }

  const updateCart = (cartItem) => {
    const findItem = cart.map(item => {
      if (item.id === cartItem.id) return cartItem
      return item
    })
    setCart([
      ...findItem
    ])
  }

  const addToFavorites = (addedProduct) => {
    const findItem = favorites.filter(item => item.id === addedProduct.id)
    if (findItem.length === 0) {
      setFavorites(prevFav => {
        return [
          ...prevFav, ...[addedProduct]
        ]
      })
    } else {
      setFavorites(prevFav => {
        return [
          ...prevFav
          // ...prevCart, { ...addedProduct, quantity: addedProduct.quantity + 1 }
        ]
      })
    }
  }

  return (
      <BrowserRouter>
        <Navbar
          cart={cart}
        />
        <SearchField
          products={products}
          />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home
              hot={products}
              addToCart={addToCart}
              addToFavorites={addToFavorites}
              favorites={favorites}
            />} />
            <Route path='about' element={<About />} />
            <Route path='cart' element={<Cart
              cart={cart}
              updateCart={updateCart}
              favorites={favorites}
            />} />
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
