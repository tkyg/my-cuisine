import React from 'react'
import {NavLink} from "react-router-dom"

const style = {
  width: "80%",
  margin: "5% 0 1%",
  padding: "1em",
  textDecoration: "none",
  color: "white",
  backgroundColor: "#D8C4C0",
  fontWeight: "bold",
  verticalAlign: "center"
}

const NavBar = () => {
  return (
    <div>
      <NavLink 
      activeStyle={{
        fontWeight: "bolder",
        color: "#B6ACAC"
      }}
        exact
        style={style}
        to="/"
      >Home</NavLink>
            <NavLink 
      activeStyle={{
        fontWeight: "bolder",
        color: "#B6ACAC"
      }}
        exact
        style={style}
        to="/restaurants"
      >Restaurants</NavLink>
            <NavLink 
      activeStyle={{
        fontWeight: "bolder",
        color: "#B6ACAC"
      }}
        exact
        style={style}
        to="/restaurants/new"
      >Add New Restaurant</NavLink>
            <NavLink 
      activeStyle={{
        fontWeight: "bolder",
        color: "#B6ACAC"
      }}
        exact
        style={style}
        to="/about"
      >About</NavLink>
    </div>
  )
}

export default NavBar
