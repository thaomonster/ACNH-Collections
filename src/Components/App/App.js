import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import apiCalls from '../../apiCalls';
import VillagerList from '../VillagerList/VillagerList';
import ProfilePage from '../ProfilePage/ProfilePage';


const App = () => {
  const [villagers, setVillagers] = useState([]);
  const [searchQuery, updateQuery] = useState([]);
  // const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    apiCalls.getAllVillagers()
      .then(data => setVillagers(data))
  }, [])

  const getSearchedVillagers = (searchQuery) => {
    updateQuery(searchQuery)
  }

  return (
    <>
      <Header 
        villagers={villagers}
        searchQuery={searchQuery} 
        updateQuery={updateQuery}
        getSearchedVillagers={getSearchedVillagers}
      />
      <Route 
        exact path='/' 
        render={() => <VillagerList villagers={villagers}/>}
      />
      <Route 
        path='/:id'
        component={ ProfilePage }
      />
    </>
  );
}

export default App;
