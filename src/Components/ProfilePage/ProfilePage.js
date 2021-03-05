import React, { useState, useEffect } from 'react';
import apiCalls from '../../apiCalls';
import leafGreen from '../../assets/leaf-green.png';
import backButton from '../../assets/back-button.png';

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
        <img  className='back-button' src={backButton} alt='back button'/>
        <h2>--- PASSPORT ---
          <div className='leaf-margin'>
            <img className='profile-leaf' src={leafGreen} alt='Leaf Icon' />
          </div>
        </h2>
        <article className='profile-page'>
          <div className='left-side'>
            <img 
              src={selectedVillager.image_uri} 
              alt='villager profile' 
              className='profile-picture'
              />
            <p>{String.fromCodePoint(0x1F9F3)}Name: {selectedVillager.name['name-USen']}</p>
            <p>{String.fromCodePoint(0x1F330)}Born: {selectedVillager['birthday-string']}</p>
          </div>
         <div className='info'>
          <p>{String.fromCodePoint(0x1F5E3)}Personality: {selectedVillager.personality}
            <span className='gender'>{String.fromCodePoint(0x26A7)} {selectedVillager.gender}</span>
          </p>
          <p>{String.fromCodePoint(0x1F331)}Species: {selectedVillager.species}</p>
          <p>{String.fromCodePoint(0x1F5E8)}Catch Phrase: {selectedVillager['catch-phrase']}</p>
          <p>{String.fromCodePoint(0x1F4AC)}Quote: {selectedVillager.saying}</p>
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