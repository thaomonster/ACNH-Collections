import React, { useState } from 'react';
import leafGreen from '../../assets/leaf-green.png';

const Header = ({getSearchedVillagers, getFilteredVillagers}) => {
  const [query, setQuery] = useState('');

  const handleOnChange = event => {
    const lowerCaseValue = event.target.value.toLowerCase()
    setQuery(lowerCaseValue)
    getSearchedVillagers(lowerCaseValue)
  }

  const handleFavoriteClick = () => {
    console.log('click')
    getFilteredVillagers()
  }

  return (
    <header>
      <form>
        <h1>ACNH Collections</h1>
        <input
          type='text'
          placeholder='Search'
          aria-label='Search' 
          name='search'
          value={query}
          onChange={handleOnChange}
        />
          <img 
            className='header-leaf'  
            src={leafGreen} 
            alt='Leaf Icon' 
            onClick={handleFavoriteClick}
          />
      </form>
    </header>
  )
}

export default Header;