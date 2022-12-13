import React, { useEffect } from 'react'
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
  const [favesIsShown, setfavesIsShown] = React.useState(false)

  // Dark Mode
  const [theme, setTheme] = React.useState('dark')

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])

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

  const showFaves = () => {
    setfavesIsShown(!favesIsShown)
  }

  return (
    <div className={theme}>
      <BrowserRouter>
        <Navbar
          cart={cart}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <SearchField
          products={products}
          favorites={favorites}
          setSearch={setSearch}
          showFaves={showFaves}
          theme={theme}
          />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home
              hot={products}
              addToCart={addToCart}
              addToFavorites={addToFavorites}
              favorites={favorites}
              search={search}
              showFaves={showFaves}
              favesIsShown={favesIsShown}
              theme={theme}
            />} />
            <Route path='about' element={<About />} />
            <Route path='cart' element={<Cart
              cart={cart}
              updateCart={updateCart}
              favorites={favorites}
              theme={theme}
            />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
