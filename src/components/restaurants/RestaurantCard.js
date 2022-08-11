import React from 'react';
import { Div } from "../../styles.js/CardStyle"

const RestaurantCard = ({ restaurant }) => {
  return (
    <Div>
      <div>
        <h3>{restaurant.name}</h3>
        <p>Cuisine: {restaurant.cuisine}</p>
        <p>Borough: {restaurant.borough}</p>
        <a href={restaurant.link}>Visit: {restaurant.name}</a>
      </div>
      <div>
        <img src={restaurant.image} alt={restaurant.name} />
      </div>
      
    </Div>
  )
}

export default RestaurantCard