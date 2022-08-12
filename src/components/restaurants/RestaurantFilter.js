import React from 'react'
import { Input } from "../../styles.js/FormStyle"

const RestaurantFilter = ({ handleSearch }) => {
  return (
    <div style= {{"fontFamily": "Mukta"}}>
      <Input type="text" placeholder="Type a cuisine name..." 
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
    )
  }

export default RestaurantFilter
