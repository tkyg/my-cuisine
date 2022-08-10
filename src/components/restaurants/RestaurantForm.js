import React, { useState } from 'react'

const RestaurantForm = () => {

  const handleSubmit = e => {
    e.prevent.default()

  }
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="cuisine">Cuisine</label>
        <input type="text" name="cuisine" id="cuisineborough" />
        <label htmlFor="borough">Borough</label>
        <input type="text" name="borough" id="borough" />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" />
        <label htmlFor="link">Websitelink</label>
        <input type="text" name="link" id="link" />
        <input type="submit" value="Create" />
      </form> */}
      
    </div>
  )
}

export default RestaurantForm
