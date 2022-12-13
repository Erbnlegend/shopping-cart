import React from 'react'
import HotPick from './HotPicks'
import propTypes from 'prop-types'

const Home = (props) => {
  const { hot } = props

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

  return (
    <div className='cards'>
      {hotMap}
    </div>
  )
}

Home.propTypes = {
  hot: propTypes.array,
  addToCart: propTypes.func,
  addToFavorites: propTypes.func
}

export default Home
