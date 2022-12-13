import React from 'react'
import { Search } from 'lucide-react'
import propTypes from 'prop-types'

const SearchField = (props) => {
  const { products } = props

  const searchFieldData = () => {
    console.log(products)
  }

  return (
    <div className='searchField'>
      <div className='searchContainer' >
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
  products: propTypes.array
}

export default SearchField
