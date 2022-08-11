import React from 'react'

const RestaurantFilter = ({ handleSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Type a cuisine name..." 
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
    )
  }

export default RestaurantFilter
