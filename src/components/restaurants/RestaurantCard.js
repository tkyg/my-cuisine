import React from 'react'
import RestaurantsContainer from '../../containers/RestaurantsContainer'

const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <h3>{restaurant.name}</h3>
      <img src={restaurant.image} alt={restaurant.name} />
      <h5>{restaurant.cuisine}</h5>
      <a href={restaurant.link}>{`Click here To visit ${restaurant.name}`}</a>
    </div>
  )
}

export default RestaurantCard
