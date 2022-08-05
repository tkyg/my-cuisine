import React from 'react'
import RestaurantCard from './RestaurantCard'


const RestaurantList = ({ restaurants }) => {

  const restaurantCards = restaurants.map(restaurant => <RestaurantCard  key={restaurant.id} restaurant={restaurant} />)

  return (
    <div>
      {restaurantCards}
    </div>
  )
}

export default RestaurantList
