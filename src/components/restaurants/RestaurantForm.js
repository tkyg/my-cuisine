import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Input, Form, InputCreate } from "../../styles/FormStyle"
import "../../index.css"

const RestaurantForm = ({ addNewRestaurant }) => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [image, setImage] = useState("")
  const [link, setLink] = useState("")
  // const [upvotes, setUpvotes] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if([ name, cuisine, neighborhood, image, link].some
      (val => val.trim() === "")) {
        alert("Please fill out all the fields, thank you!")
        return null
    }

    const newRestaurant = {
      name,
      cuisine,
      neighborhood,
      image,
      link,
    };

    // fetch("https://backend-my-cuisine.herokuapp.com/restaurants", {
    fetch("http://localhost:3001/restaurants", {
    method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newRestaurant)
      })
      setName('');
      setCuisine('');
      setNeighborhood('');
      setImage('');
      setLink('');

      addNewRestaurant(newRestaurant);
      navigate("/restaurants");
  }
  return (
    <div style={{"fontFamily": "Mukta"}}>
      <Form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name: </label>
        <Input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
        </div> <br />
        <div>
        <label htmlFor="cuisine">Cuisine: </label>
        <Input type="text" name="cuisine" id="cuisineborough" value={cuisine} onChange={e => setCuisine(e.target.value)}/>
        </div> <br />
        <div>
        <label htmlFor="neighborhood">Neighborhood: </label>
        <Input type="text" name="neighborhood" id="neighborhood" value={neighborhood} onChange={e => setNeighborhood(e.target.value)}/>
        </div> <br />
        <div>
        <label htmlFor="image">Image: </label>
        <Input type="text" name="image" id="image" value={image} onChange={e => setImage(e.target.value)}/>
        </div> <br />
        <div>
        <label htmlFor="link">Websitelink: </label>
        <Input type="text" name="link" id="link" value={link} onChange={e => setLink(e.target.value)}/>
        </div> <br />
        <div><InputCreate type="submit" value="Promte" /></div>
      </Form>
    </div>
  )
}

export default RestaurantForm
