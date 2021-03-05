import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import apiCalls from '../../apiCalls';
import VillagerList from '../VillagerList/VillagerList';
import ProfilePage from '../ProfilePage/ProfilePage';
import { Route } from 'react-router-dom';


const App = () => {
  const [villagers, setVillagers] = useState([]);
  // const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    apiCalls.getAllVillagers()
      .then(data => setVillagers(data))
  }, [])

  return (
    <>
      <Header />
      <VillagerList villagers={villagers}/>
      <Route path='/' />
    </>
  );
}

export default App;
