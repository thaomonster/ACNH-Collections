import React, {useState} from 'react';
import leafGreen from '../../assets/leaf-green.png';

const Header = ({villagers}) => {
  const [search, updateSearch] = useState('')

  const handleOnChange = (event) => {
    updateSearch(event.target.value.toLowerCase())
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateVillagers = villagers.filter(villager => villager.name['name-USen'].toLowerCase().includes(search))
    updateSearch('')
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
              />
              <p className='search-emoji'>{String.fromCodePoint(0x1F50D)}</p>
        </form>
    </header>
  )
}

export default Header;