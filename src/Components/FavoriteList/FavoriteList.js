import React from 'react';
import VillagerList from '../VillagerList/VillagerList';

const FavoriteList = ({getFavoriteVillagers }) => {
  const favorites = getFavoriteVillagers()
  
  return (
    <div>
      {favorites.length ? (
        <VillagerList
          villagers={favorites}
        />
      ) : (
        <p className='favorite-list-empty-prompt'>
          No favorite villagers. Please add to list!
        </p>
      )}
    </div>
  )
}

export default FavoriteList