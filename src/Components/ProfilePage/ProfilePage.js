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
          <img 
            src={selectedVillager.image_uri} 
            alt='villager profile' 
            className='profile-picture'
            />
         <div className='info'>
            <p>Personality: {selectedVillager.personality}
              <span className='gender'>{String.fromCodePoint(0x26A7)} {selectedVillager.gender}</span>
            </p>
            <p className='species'>Species: {selectedVillager.species}</p>
            <p className='name'>Name: {selectedVillager.name['name-USen']}</p>
            <p>{String.fromCodePoint(0x1F330)}Born: {selectedVillager['birthday-string']}</p>
            <div className='sayings'>
              <p>{String.fromCodePoint(0x1F5E8)}Catch Phrase: {selectedVillager['catch-phrase']}</p>
              <p>{String.fromCodePoint(0x1F4AC)}Saying: {selectedVillager.saying}</p>
            </div>
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