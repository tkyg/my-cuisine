import React from 'react';
import { Div, Image } from "./CardStyle"

const RestaurantCard = ({ restaurant }) => {
  return (
    <Div>
      <Image src={restaurant.image} alt={restaurant.name} />
      <h2>{restaurant.name}</h2>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Borough: {restaurant.borough}</p>
      <a href={restaurant.link}>Click here to visit: {restaurant.name}</a>
    </Div>
  )
}

export default RestaurantCard