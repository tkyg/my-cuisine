import React, {useState} from 'react';
import { Div, Button } from "../../styles/CardStyle"
import "../../index.css"

const RestaurantCard = ({ restaurant}) => {
  const [cuisineReview, setCuisineReview] = useState(restaurant.upvotes)

  function handleLikes(){
    setCuisineReview((cuisineReview) => cuisineReview + 1)
  }

  return (
    <Div>
      <div style={{fontFamily: "Mukta", fontSize: "16px", fontWeight: "900"}}>
        <h3 style={{fontFamily: "Aboreto", fontSize: "30px", color: "#ccae68"}}>{restaurant.name}</h3>
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