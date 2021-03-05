import React from 'react';
import leafGreen from '../../assets/leaf-green.png';

const Header = ({villagers, searchQuery, updateQuery, getSearchedVillagers}) => {

  const filterVillagers = () => {
    const updateVillagers = villagers.filter(villager => villager.name['name-USen'].toLowerCase().includes(searchQuery))
    updateQuery('')
    getSearchedVillagers(updateVillagers)
  }
   
  return (
    <header>
       <h1>ACNH Collections</h1>
        <form className='nav-section'>
            <img className='header-leaf' src={leafGreen} alt='Leaf Icon' />
            <input
                type='text'
                placeholder='Search Villagers'
                aria-label='Search Villagers' 
                name='search'
                value={searchQuery}
                onChange={event => updateQuery(event.target.value)}
              />
              <p className='search-emoji'>{String.fromCodePoint(0x1F50D)}</p>
        </form>
    </header>
  )
}

export default Header;