import React from 'react';
import { Div, Image } from "../../Styles.js/CardStyle"

const RestaurantCard = ({ restaurant }) => {
  return (
    <Div className="card">
      <div className="card__body">
      <Image src={restaurant.image} alt={restaurant.name} />
      <h2>{restaurant.name}</h2>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Borough: {restaurant.borough}</p>
      <a href={restaurant.link}>Click here to visit: {restaurant.name}</a>
    </div>
    </Div>
  )
}

export default RestaurantCard