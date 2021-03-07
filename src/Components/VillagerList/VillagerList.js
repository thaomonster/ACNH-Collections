import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const VillagerList = ({villagers}) => {
  const card = villagers.map(villager => {
    return (
      <section key={villager.id} id={villager.id} >
        <article className='card'>
          <Link to={`/${villager.id}`}>
            <div className='thumbnail-img'>
              <img src={villager.icon_uri} alt='villager icon' />
              <p>{villager.name['name-USen']}</p>
            </div>
          </Link>
        </article>
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

VillagerList.propTypes = {
  villagers: PropTypes.array.isRequired
}

VillagerList.defaultProps = {
  villagers: []
}