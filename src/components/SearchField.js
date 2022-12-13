import React from 'react'
import { Search, Heart } from 'lucide-react'
import propTypes from 'prop-types'
import Fuse from 'fuse.js'

const SearchField = (props) => {
  const { products } = props

  // Fuzzy Search Options
  const options = {
    includeScore: true,
    // Search in title, description
    keys: ['title', 'description']
  }

  // What obj to search
  const fuse = new Fuse(products, options)

  // Search!
  const searchFieldData = (e) => {
    const filterNames = e.target.value

    const result = fuse.search(filterNames)
    searchResults(result)
  }

  const searchResults = (results) => {
    const getObjectResults = results.map(item => item.item)
    props.setSearch(getObjectResults)
  }

  const [toggle, setToggle] = React.useState(true)

  function resetToggle () {
    setToggle(!toggle)
    props.showFaves()
  }

  return (
    <div className='searchField'>
      <div className={`searchContainer ${props.theme}`} >
        {toggle ? <Heart fill='red' className='searchIcon' onClick={resetToggle}/> : <Heart className='searchIcon' onClick={resetToggle}/> }
      <input
        placeholder='Search...'
        onChange={searchFieldData}
      />
      <Search className='searchIcon'/>
      </div>
    </div>
  )
}

SearchField.propTypes = {
  products: propTypes.array,
  favorities: propTypes.array,
  showFaves: propTypes.func,
  resetFaves: propTypes.func,
  searchFieldData: propTypes.func,
  searchResults: propTypes.func,
  setSearch: propTypes.func
}

export default SearchField
