import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import apiCalls from '../../apiCalls';
import VillagerList from '../VillagerList/VillagerList';


const App = () => {
  const [villagers, setVillagers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    apiCalls.getAllVillagers()
      .then(villagers => setVillagers(villagers))
  }, [])

  return (
    <>
      <Header />
      <VillagerList />
    </>
  );
}

export default App;
