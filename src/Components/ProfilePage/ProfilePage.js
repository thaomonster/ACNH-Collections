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
        <p>Personality: {selectedVillager.personality}</p>
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