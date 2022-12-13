import React from 'react'
import HotPick from './HotPicks'
import propTypes from 'prop-types'
import SearchResults from './SearchResults'

const Home = (props) => {
  const { hot, search } = props

  const searchLength = search.length

  const hotMap = hot.map((item, index) => {
    return (
        <HotPick className='card' key={index}
          hot={item}
          search={search}
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

  return (
    <div>
      {searchLength <= 0 &&
        <div className='cards'>
          {hotMap}
        </div>
      }
      {searchLength > 0 &&
        <div className='cards'>
          {searchMap}
        </div>
      }
    </div>
  )
}

Home.propTypes = {
  hot: propTypes.array,
  search: propTypes.array,
  addToCart: propTypes.func,
  addToFavorites: propTypes.func,
  favorites: propTypes.array
}

export default Home
