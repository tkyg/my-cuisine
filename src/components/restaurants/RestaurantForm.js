import React, { useState } from 'react'

const RestaurantForm = ({ restaurants, setRestaurants }) => {
  const [name, setName] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [borough, setBorough] = useState("")
  const [image, setImage] = useState("")
  const [link, setLink] = useState("")

  const handleSubmit = e => {
    e.prevent.default()
    if([name, cuisine, borough, image, link].some(val =>val.trim() === "")) {
      alert("Please fill out all the fields, thank you!")
    }

    setRestaurants([...restaurants, {name, cuisine, borough, image, link}])
    setName("")
    setCuisine("")
    setBorough("")
    setImage("")
    setLink("")

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
        </div> <br />
        <div>
        <label htmlFor="cuisine">Cuisine</label>
        <input type="text" name="cuisine" id="cuisineborough" value={cuisine} onChange={e => setCuisine(e.target.value)}/>
        </div> <br />
        <div>
        <label htmlFor="borough">Borough</label>
        <input type="text" name="borough" id="borough" value={borough} onChange={e => setBorough(e.target.value)}/>
        </div> <br />
        <div>
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" value={image} onChange={e => setImage(e.target.value)}/>
        </div> <br />
        <div>
        <label htmlFor="link">Websitelink</label>
        <input type="text" name="link" id="link" value={link} onChange={e => setLink(e.target.value)}/>
        </div> <br />
        <input type="submit" value="Create" />
      </form>
    </div>
  )
}

export default RestaurantForm
