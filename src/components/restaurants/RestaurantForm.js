import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

const RestaurantForm = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [borough, setBorough] = useState("")
  const [image, setImage] = useState("")
  const [link, setLink] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if([name, cuisine, borough, image, link].some
      (val => val.trim() === "")) {
        alert("Please fill out all the fields, thank you!")
        return null
    }

    const newRestaurant = {name, cuisine, borough, image, link} 

      fetch("http://localhost:3001/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newRestaurant)
      })

      setName("")
      setCuisine("")
      setBorough("")
      setImage("")
      setLink("")
      navigate("/restaurants")
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
