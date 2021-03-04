import React from 'react';

const VillagerList = ({villagers}) => {

  const card = villagers.map(villager => {
    return (
      <section key={villager.id} id={villager.id}>
          <img src={villager.icon_uri} alt='villager icon' />
          <p>{villager.name['name-USen']}</p>
      </section>
    )
  })

  return ( 
    <main>
      {card}
    </main>
  )
}

export default VillagerList;