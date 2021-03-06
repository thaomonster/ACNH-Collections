import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import { getAllVillagers } from '../../apiCalls';
import VillagerList from '../VillagerList/VillagerList';
import ProfilePage from '../ProfilePage/ProfilePage';
import FavoriteList from '../FavoriteList/FavoriteList';


const App = () => {
  const [villagers, setVillagers] = useState([]);
  const [filteredVillagers, setFilteredVillagers] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteList, setFavoriteList] = useState([])

  useEffect(() => {
    async function fetchAllVillagers() {
      setVillagers(await getAllVillagers())
    }
    fetchAllVillagers()
  }, [])

  const getSearchedVillagers = (inputValue) => {
    const filterVillagers = villagers.filter(villager => {
      return villager.name['name-USen'].toLowerCase().includes(inputValue)
    })
    setFilteredVillagers(filterVillagers)
  }

  const filterFavoriteVillagers = () => {
    if (favoriteList.length) {
      const favoriteVillagers = villagers.filter(villager => favoriteList.includes(villager.id))
      setFilteredVillagers(favoriteVillagers)
    }
  }

  return (
    <>
      <Header 
        getSearchedVillagers={getSearchedVillagers} 
      />
      
        <Route 
          exact path='/' 
          render={ () => 
            <VillagerList villagers={filteredVillagers.length ? filteredVillagers : villagers} />
          }
        />

      <Route 
        exact path='/favorites'
        render={ () =>
        <FavoriteList filterFavoriteVillagers={filterFavoriteVillagers}/>
      } 
      />
    
      <Route 
        exact path='/:id'
        render={ ({match}) => 
          <ProfilePage 
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
            match={match}
            favoriteList={favoriteList}
            setFavoriteList={setFavoriteList}
            // filterFavoriteVillagers={filterFavoriteVillagers}
          />
        }
      />
      
    </>
  );
}

export default App;
