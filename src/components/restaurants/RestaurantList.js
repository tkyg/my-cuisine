import React from 'react'
import RestaurantCard from './RestaurantCard'


const RestaurantList = ({ restaurants }) => {

  const restaurantCards = restaurants.map(restaurant => <RestaurantCard />)

  return (
    <div>
      <RestaurantCard />
    </div>
  )
}

export default RestaurantList
