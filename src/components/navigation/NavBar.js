import React from 'react'
import { NavLink } from "react-router-dom"

const style = {
  width: "60%",
  margin: "5% 0 1%",
  padding: "1em",
}

const NavBar = () => {
  return (
    <div>
      <NavLink 
      activeStyle={{
        fontWeight: "bolder",
        color: "red"
      }}
        exact
        style={style}
        to="/"
      >Home</NavLink>
            <NavLink 
      activeStyle={{
        fontWeight: "bolder",
        color: "red"
      }}
        exact
        style={style}
        to="/restaurants"
      >Restaurants</NavLink>
            <NavLink 
      activeStyle={{
        fontWeight: "bolder",
        color: "red"
      }}
        exact
        style={style}
        to="/restaurants/new"
      >Add New Restaurant</NavLink>
            <NavLink 
      activeStyle={{
        fontWeight: "bolder",
        color: "red"
      }}
        exact
        style={style}
        to="/about"
      >About</NavLink>
    </div>
  )
}

export default NavBar
