import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { getAllVillagers } from '../../apiCall';


const App = () => {
  const [villagers, setVillagers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  
  return (
    <>
      <Header />
    </>
  );
}

export default App;
