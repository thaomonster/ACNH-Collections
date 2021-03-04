import React from 'react';
import leafGreen from '../../assets/leaf-green.png';

const Header = () => {

  return (
    <header>
       <h1>ACNH Collections</h1>
       <div className='nav-section'>
          <img className='header-leaf' src={leafGreen} alt='Leaf Icon' />
          <input
              type='text'
              placeholder='Search Villagers'
              aria-label='Search Villagers'
            />
       </div>
    </header>
  )
}

export default Header;