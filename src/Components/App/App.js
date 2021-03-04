import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { getAllVillagers } from '../../apiCall';

const [ villagers, setVillagers] = useState([]);

const App = () => {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
