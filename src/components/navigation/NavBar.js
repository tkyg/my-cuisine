import React from 'react'
import {NavLink} from "react-router-dom"

const style = {
  width: "80%",
  margin: "5% 0.1% 1%",
  padding: "1em",
  textDecoration: "none",
  color: "white",
  backgroundColor: "#D8C4C0",
  fontWeight: "bold",
  verticalAlign: "center",
  borderRadius: "10px"
}

const NavBar = () => {
  return (
    <div>
      <NavLink 
        to="/"
        exact
        style={style}
        activeStyle={{
          fontWeight: "bolder",
          color: "#B6ACAC"
        }}
      >Home</NavLink>

      <NavLink 
        to="/restaurants"
        exact
        style={style}
        activeStyle={{
          fontWeight: "bolder",
          color: "#B6ACAC"
        }}
      >Restaurants</NavLink>
      
      <NavLink
        to="/restaurants/new" 
        exact
        style={style}
        activeStyle={{
          fontWeight: "bolder",
          color: "#B6ACAC"
        }}
      >Add New Restaurant</NavLink>
      
      <NavLink
        to="/about"
        exact
        style={style}
        activeStyle={{
          fontWeight: "bolder",
          color: "#B6ACAC"
        }}
      >About</NavLink>
    </div>
  )
}

export default NavBar;
