import React, {useState} from 'react';
import { Div, Button } from "../../styles.js/CardStyle"

const RestaurantCard = ({ restaurant}) => {
  const [cuisineReview, setCuisineReview] = useState(restaurant.upvotes)

  function handleLikes(){
    setCuisineReview((cuisineReview) => cuisineReview + 1)
  }

  return (
    <Div>
      <div>
        <h3>{restaurant.name}</h3>
        <p>Cuisine: {restaurant.cuisine}</p>
        <p>Neighborhood: {restaurant.neighborhood}</p>
        <a style={{color: "#808080"}} href={restaurant.link}>Visit: {restaurant.name}</a><br/>
        <Button onClick={handleLikes}> Likes 👍 : {cuisineReview}</Button>
        </div>
      <div>
        <img src={restaurant.image} alt={restaurant.name} />
      </div>
    </Div>
  )
}

export default RestaurantCard