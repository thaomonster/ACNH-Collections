import React from 'react';
import leafIcon from '../../assets/leaf-icon.png';

const VillagerList = ({villagers}) => {

  const card = villagers.map(villager => {
    return (
      <section key={villager.id} id={villager.id} >
        <div className='card'>
          <img src={villager.icon_uri} alt='villager icon' />
          <p>{villager.name['name-USen']}</p>
          <img className='card-leaf' src={leafIcon} alt='Leaf Icon' />
        </div>
      </section>
    )
  })

  return ( 
    <main className='card-container'>
      {card}
    </main>
  )
}

export default VillagerList;