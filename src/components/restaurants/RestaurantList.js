import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { Input } from "../../styles/FormStyle"

const RestaurantList = ({ restaurants, handleUpvotes}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = restaurants.filter((restaurant) => {
    return restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const restaurantCards = searchResults.map((restaurant) => (
    <RestaurantCard  key={restaurant.id} {...restaurant} handleUpvotes={handleUpvotes}/>
  ))

  const handleOnChange = (e) => setSearchQuery(e.target.value);

  return (
    <div style={{fontFamily: "Aboreto", textAlign: "center" }}>
      <h2>Restaurants</h2>
      <Input 
        type="text" placeholder="Type a cuisine name..." 
        onChange={handleOnChange}
      />
      <div>{restaurantCards}</div> 
    </div>
  )
}

export default RestaurantList