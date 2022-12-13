import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '~/components/Navbar'
import About from '~/components/About'
import Cart from '~/components/Cart'
import Home from '~/components/Home'
import SearchField from './components/SearchField'

import data from './data/data'

const App = () => {
  // All Products
  const [products, setProducts] = React.useState(data)
  // Search State
  const [search, setSearch] = React.useState([])
  // Cart State
  const [cart, setCart] = React.useState([])
  // Favorites State
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

  // Issue with passing down the data to the component
  // Limits the data being sent back up the tree
  const showFaves = () => {
    const filterFaves = favorites.map(item => (item.id))
    const filterProducts = products.filter(item => filterFaves.includes(item.id))
    // Find another way!
    setProducts(filterProducts)
  }

  const resetFaves = () => {
    // Wind another Way!
    setProducts(data)
  }

  return (
      <BrowserRouter>
        <Navbar
          cart={cart}
        />
        <SearchField
          products={products}
          showFaves={showFaves}
          resetFaves={resetFaves}
          setSearch={setSearch}
          />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home
              hot={products}
              addToCart={addToCart}
              addToFavorites={addToFavorites}
              favorites={favorites}
              search={search}
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
