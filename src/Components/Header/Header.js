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
       <h1>ACNH Collections</h1>
        <form className='nav-section'>
            <img className='header-leaf' src={leafGreen} alt='Leaf Icon' />
            <input
                type='text'
                placeholder='Search'
                aria-label='Search' 
                name='search'
                value={query}
                onChange={handleOnChange}
              />
        </form>
    </header>
  )
}

export default Header;