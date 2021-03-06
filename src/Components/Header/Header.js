import React, { useState } from 'react';
import leafGreen from '../../assets/leaf-green.png';

const Header = ({getSearchedVillagers}) => {
  const [query, setQuery] = useState('');

  const handleOnChange = event => {
    const lowerCaseValue = event.target.value.toLowerCase()
    setQuery(lowerCaseValue)
    getSearchedVillagers(lowerCaseValue)
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
        <button className='favorite-btn'>
          <img className='header-leaf' src={leafGreen} alt='Leaf Icon' />
          Favorites
        </button>
      </form>
    </header>
  )
}

export default Header;