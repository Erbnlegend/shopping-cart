import React from 'react'
import HotPick from './HotPicks'
import propTypes from 'prop-types'
import SearchResults from './SearchResults'
import Favorites from './Favorites'
import Footer from './Footer'

const Home = (props) => {
  const { hot, search, favorites, favesIsShown } = props

  const searchLength = search.length

  const hotMap = hot.map((item, index) => {
    return (
        <HotPick className='card' key={index}
          hot={item}
          addToCart={props.addToCart}
          addToFavorites={props.addToFavorites}
          favorites={props.favorites}
        />
    )
  })

  const searchMap = search.map((item, index) => {
    return (
        <SearchResults className='card' key={index}
          search={item}
          addToCart={props.addToCart}
          addToFavorites={props.addToFavorites}
          favorites={props.favorites}
        />
    )
  })

  const favesMap = favorites.map((item, index) => {
    return (
        <Favorites className='card' key={index}
          item={item}
          addToCart={props.addToCart}
          addToFavorites={props.addToFavorites}
          favorites={props.favorites}
        />
    )
  })

  return (
    <div>
    <div className='hero'>
    <div className='callToAction'>
      Sign up to receive free shipping on your first order!
      <a href='#'><button>Sign up</button></a>
    </div>
  </div>
    <div>
      {searchLength <= 0 && !favesIsShown &&
        <div className='cards'>
          {hotMap}
        </div>
      }
      {searchLength > 0 && !favesIsShown &&
        <div className='cards'>
          {searchMap}
        </div>
      }
      {favesIsShown &&
        <div className='cards'>
          {favesMap}
        </div>
      }
    </div>
    <Footer />
    </div>
  )
}

Home.propTypes = {
  hot: propTypes.array,
  search: propTypes.array,
  addToCart: propTypes.func,
  addToFavorites: propTypes.func,
  favorites: propTypes.array,
  favesIsShown: propTypes.bool
}

export default Home
