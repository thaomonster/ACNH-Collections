import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSelectedVillager } from '../../apiCalls';
import leafBlue from '../../assets/leaf-blue.png';
import leafGreen from '../../assets/leaf-green.png';
import backButton from '../../assets/back-button.png';

const ProfilePage = ({match, favoriteList, setFavoriteList}) => {
  const [selectedVillager, setSelectedVillager] = useState(null)
  const { id } = match.params

  const handleOnClick = () => { 
    if (favoriteList.includes(id)) {
      let updatedFavorites = favoriteList.filter(favorite => favorite !== id)
      setFavoriteList(updatedFavorites)
    } else {
      setFavoriteList([...favoriteList, id])
    } 
  }
  
  useEffect(() => {
    async function fetchSelectedVillager(id) {
      setSelectedVillager(await getSelectedVillager(id))
    }
    fetchSelectedVillager(id)
  }, [id])

  if (selectedVillager) {
    return (
      <section>
        <Link to='/'>
          <img className='back-button' src={backButton} alt='back button'/>
        </Link>
        <div className='passport-container'>
          <h2>--- PASSPORT ---
            <div className='leaf-margin' onClick={handleOnClick}>
              <img className='profile-leaf' src={favoriteList.includes(id) ? leafGreen : leafBlue} alt='Leaf Icon' />
            </div>
          </h2>
          <article className='profile-page'>
            <div className='left-side-info'>
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
        </div>
      </section>
    )
  }

  return (
    <div>
      <p>Sorry, page is taking a bit to load!</p>
    </div>
  )
}

export default ProfilePage;