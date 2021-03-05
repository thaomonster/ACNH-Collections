import React, { useState, useEffect } from 'react';
import apiCalls from '../../apiCalls';

const ProfilePage = ({match}) => {
  const [selectedVillager, setSelectedVillager] = useState(null)
  const { id } = match.params

  useEffect(() => {
    apiCalls.getSelectedVillager(id)
      .then(data => setSelectedVillager(data))
  }, [id])

  if (selectedVillager) {
    return (
      <section>
        <img src={selectedVillager.image_uri} alt='villager profile' />
        <p>Name: {selectedVillager.name['name-USen']}</p>
        <p>Personality: {selectedVillager.personality}</p>
        <p>Birthday: {selectedVillager['birthday-string']}</p>
      </section>
    )
  }

  return (
    <div>
      loading
    </div>
  )
}

export default ProfilePage;