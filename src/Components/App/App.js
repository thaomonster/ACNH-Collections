import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import { getAllVillagers } from '../../apiCalls';
import VillagerList from '../VillagerList/VillagerList';
import ProfilePage from '../ProfilePage/ProfilePage';


const App = () => {
  const [villagers, setVillagers] = useState([]);
  const [filteredVillagers, setFilteredVillagers] = useState([]);
  const [favoriteList, setFavoriteList] = useState([])

  useEffect(() => {
    async function fetchAllVillagers() {
      setVillagers(await getAllVillagers())
    }
    fetchAllVillagers()
  }, [])

  const getSearchedVillagers = (inputValue) => {
    const filterSearchVillagers = villagers.filter(villager => {
      return villager.name['name-USen'].toLowerCase().includes(inputValue)
    })
    setFilteredVillagers(filterSearchVillagers)
  }

  const getFilteredVillagers = () => {
    const filterFavoriteVillagers = villagers.filter(villager => {
      favoriteList.includes(villager.id)
      return villager
    })
    setFilteredVillagers(filterFavoriteVillagers)
  }

  console.log(favoriteList)

  return (
    <>
      <Header 
        getSearchedVillagers={getSearchedVillagers} 
        getFilteredVillagers={getFilteredVillagers}
      />
      
      <Route 
        exact path='/' 
        render={ () => 
          <VillagerList 
            villagers={filteredVillagers.length ? filteredVillagers: villagers} 
          />
        }
      />
    
      <Route 
        exact path='/:id'
        render={ ({match}) => 
          <ProfilePage 
            match={match}
            favoriteList={favoriteList}
            setFavoriteList={setFavoriteList}
          />
        }
      />
    </>
  );
}

export default App;
