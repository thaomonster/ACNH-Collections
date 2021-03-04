import React, { useState, useEffect } from 'react';

const VillagerList = ({villagers}) => {

  const villager = () => {
    villagers.map(villager => {
      return (
        <section key={villager.id} id={villager.id}>
          <div>
            {villager.icon_uri}
          </div>
        </section>
      )
    })
  }

  return (
    <main>
      {villager}
    </main>
  )
}

export default VillagerList;