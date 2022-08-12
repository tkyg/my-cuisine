import React, { useState, useEffect } from 'react'
import RestaurantFilter from "../components/restaurants/RestaurantFilter"
import RestaurantList from "../components/restaurants/RestaurantList"

const RestaurantsContainer = () => {
  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants)

  useEffect(() => {
    fetch("http://localhost:3001/restaurants")
    .then(response => response.json())
    .then((data) => {
      setRestaurants(data)
      setFilteredRestaurants(data)
      })
  }, [])

  const handleSearch = (searchValue) => {
   const filteredRestaurants = restaurants.filter(restaurant => 
    restaurant.cuisine.toLowerCase().startsWith(searchValue.toLowerCase()))
    setFilteredRestaurants(filteredRestaurants)
  }



  return (
    <div>
      <RestaurantFilter handleSearch={handleSearch} />
      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  )
}

export default RestaurantsContainer;
