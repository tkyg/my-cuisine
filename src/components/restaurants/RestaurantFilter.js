import React from 'react'

const RestaurantFilter = ({ handleSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Type a cuisine name..." 
        onChange={(e) => handleSearch(e.target.value)}
      />
      {/* <select name="borough-list" onChange={onChange}>
        <option value="All">Filter by Borough</option>
        <option value="Bronx">Bronx</option>
        <option value="Brooklyn">Brooklyn</option>
        <option value="Manhattan">Manhattan</option>
        <option value="Queens">Queens</option>
        <option value="Staten Island">Staten Island</option>
      </select> */}
    </div>
    )
  }

export default RestaurantFilter
