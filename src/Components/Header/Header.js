import React from 'react';
import leafIcon from '../../assets/leaf-icon.png';

const Header = () => {

  return (
    <header>
       <h1>Animal Crossing</h1>
       <img src={leafIcon} />
       <input
          type='text'
          placeholder='Search Villagers'
          aria-label='Search Villagers'
        />
    </header>
  )
}

export default Header