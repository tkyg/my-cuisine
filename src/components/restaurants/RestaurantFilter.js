import React from 'react'
import { Input } from "../../styles/FormStyle"

const RestaurantFilter = ({ handleSearch }) => {
  return (
    <div style= {{"fontFamily": "Mukta", textAlign: 'right'}}>
      <Input 
        type="text" placeholder="Type a cuisine name..." 
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
    )
  }

export default RestaurantFilter
