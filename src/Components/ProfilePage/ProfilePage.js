import React, { useState, useEffect } from 'react';
import apiCalls from '../../apiCalls';

const ProfilePage = ({match}) => {
  const [selectedVillager, setSelectedVillager] = useState(null)
  const { id } = match.params

  useEffect(() => {
    apiCalls.getSelectedVillager(id)
      .then(data => setSelectedVillager(data))
  }, [id])

  
}

export default ProfilePage;