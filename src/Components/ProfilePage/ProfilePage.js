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
      <section className='passport-container'>
        <h2>--- PASSPORT ---</h2>
        <article className='profile-page'>
          <img src={selectedVillager.image_uri} alt='villager profile' />
          <div>
            <p>Name: <b>{selectedVillager.name['name-USen']}</b></p>
            <p>Personality: <b>{selectedVillager.personality}</b></p>
            <p>Birthday: <b>{selectedVillager['birthday-string']}</b></p>
            <p>Species: <b>{selectedVillager.species}</b></p>
            <p>Gender: <b>{selectedVillager.gender}</b></p>
            <p>Catch Phrase: <b>{selectedVillager['catch-phrase']}</b></p>
            <p>Saying: <b>{selectedVillager.saying}</b></p>
          </div>
        </article>
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