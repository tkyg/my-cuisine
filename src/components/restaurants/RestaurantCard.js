import React from 'react';
import "./Restaurant.css"

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <div className="card__body">
      <img className="card__image" src={restaurant.image} alt={restaurant.name} />
      <h2 className="card__title">{restaurant.name}</h2>
      <p className="card__description">Cuisine: {restaurant.cuisine}</p>
      <p className="card__description">Borough: {restaurant.borough}</p>
      <a className="card__link" href={restaurant.link}>Click here to visit: {restaurant.name}</a>
    </div>
    </div>
  )
}

export default RestaurantCard
