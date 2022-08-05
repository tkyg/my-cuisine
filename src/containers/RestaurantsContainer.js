import React, { useState, useEffect } from 'react'
import RestaurantFilter from "../components/restaurants/RestaurantFilter"
import RestaurantList from "../components/restaurants/RestaurantList"


const RestaurantsContainer = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/restaurants")
    .then(response => response.json())
    .then(data => setRestaurants(data))
  }, [])

  return (
    <div>
      <RestaurantFilter />
      <RestaurantList restaurants={restaurants}/>
    </div>
  )
}

export default RestaurantsContainer;
