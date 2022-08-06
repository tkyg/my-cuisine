import React, { useState } from 'react'

const RestaurantFilter = () => {

  const [ search, setSearch ] = useState("Type a cuisine name...")

  return (
    <div>
      <input type="text" value={search} />
    </div>
  )
}

export default RestaurantFilter
