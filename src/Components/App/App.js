import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import { getAllVillagers } from '../../apiCalls';
import VillagerList from '../VillagerList/VillagerList';
import ProfilePage from '../ProfilePage/ProfilePage';


const App = () => {
  const [villagers, setVillagers] = useState([]);
  const [filteredVillager, setFilteredVillager] = useState([]);
  // const [favorites, setFavorites] = useState([]);

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
    setFilteredVillager(filterVillagers)
  }

  return (
    <>
      <Header getSearchedVillagers={getSearchedVillagers} />
      {!filteredVillager.length &&
        <Route 
          exact path='/' 
          render={() => 
            <VillagerList villagers={villagers}/>
          }
        />
      }
      <Route 
          exact path='/' 
          render={() => 
            <VillagerList villagers={filteredVillager}/>
          }
        />
      <Route 
        path='/:id'
        component={ ProfilePage }
      />
    </>
  );
}

export default App;
