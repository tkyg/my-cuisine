import React, { useState } from 'react'

const RestaurantFilter = ({ handleSearch }) => {

  const [ search, setSearch ] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Type a cuisine name..." 
        value={search} 
        onChange={handleChange}
      />
    </div>
  )
}

export default RestaurantFilter
