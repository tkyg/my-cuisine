import React from 'react';
import { Div, Button } from "../../styles/CardStyle"
import "../../index.css"

const RestaurantCard = ({ id, name, cuisine, neighborhood, image, link, upvotes, handleUpvotes }) => {
 
  const handleLike = () => {
    handleUpvotes(id)
  }

  return (
    <Div>
      <div style={{fontFamily: "Mukta", fontSize: "16px", fontWeight: "900"}}>
        <h3 style={{fontFamily: "Aboreto", fontSize: "30px", color: "#ccae68"}}>{name}</h3>
        <p>Cuisine: {cuisine}</p>
        <p>Neighborhood: {neighborhood}</p>
        <a style={{color: "#808080"}} href={link}>Visit: {name}</a><br/>
        <Button onClick={handleLike}> Likes: 👍 {upvotes}</Button>
      </div>
      <div>
        <img loading="lazy" src={image} alt={name} />
      </div>
    </Div>
  )
}

export default RestaurantCard