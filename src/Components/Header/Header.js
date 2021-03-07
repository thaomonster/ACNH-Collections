import React, { useState } from 'react';
import leafGreen from '../../assets/leaf-green.png';
import { Link } from 'react-router-dom';

const Header = ({getSearchedVillagers, getFilteredVillagers, setFilteredVillagers}) => {
  const [query, setQuery] = useState('');

  const handleOnChange = event => {
    const lowerCaseValue = event.target.value.toLowerCase()
    setQuery(lowerCaseValue)
    getSearchedVillagers(lowerCaseValue)
  }

  const handleFavoriteClick = () => {
    getFilteredVillagers()
  }

  return (
    <header>
      <form>
        <h1 onClick={() => setFilteredVillagers([])}>ACNH Collections</h1>
        <input
          type='text'
          placeholder='Search'
          aria-label='Search' 
          name='search'
          value={query}
          onChange={handleOnChange}
        />
        <Link to='/'>
          <img 
            className='header-leaf'  
            src={leafGreen} 
            alt='Leaf Icon' 
            onClick={handleFavoriteClick}
          />
        </Link>
      </form>
    </header>
  )
}

export default Header;