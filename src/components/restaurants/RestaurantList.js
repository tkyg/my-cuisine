import React from 'react'
import RestaurantCard from './RestaurantCard'



const RestaurantList = ({ restaurants }) => {

  const restaurantCards = restaurants.map(restaurant => <RestaurantCard  key={restaurant.id} restaurant={restaurant} />)

  return (
    <div style={{fontFamily: "Aboreto", textAlign: "center" }}>
      <h2>Restaurants</h2>
      <div>{restaurantCards}</div> 
    </div>
  )
}

export default RestaurantList