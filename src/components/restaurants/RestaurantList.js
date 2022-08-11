import React from 'react'
import RestaurantCard from './RestaurantCard'



const RestaurantList = ({ restaurants }) => {

  const restaurantCards = restaurants.map(restaurant => <RestaurantCard  key={restaurant.id} restaurant={restaurant} />)

  return (
    <div style={{fontFamily: "Roboto" }}>
      <h2>Restaurants</h2>
      <div style={{ fontFamily: "Roboto"}}>{restaurantCards}</div> 
    </div>
  )
}

export default RestaurantList