import React from 'react'
import {NavLink} from "react-router-dom"

const linkStyle = {
  width: "80%",
  margin: "5% 0.1% 1%",
  padding: "1em",
  textDecoration: "none",
  color: "white",
  backgroundColor: "#D8C4C0",
  fontWeight: "bold",
  verticalAlign: "center",
  borderRadius: "5px"
}

let activeStyle = {
  fontWeight: "bolder",
  color: "#ccbebc",
  width: "80%",
  margin: "5% 0.1% 1%",
  padding: "1em",
  textDecoration: "none",
  // backgroundColor: "#D8C4C0",
  fontWeight: "bold",
  verticalAlign: "center",
  borderRadius: "5px"
  
}
let activeClassName = {
  fontWeight: "bolder",
  color: "black"
}

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) =>
        isActive ? activeStyle : linkStyle
        }
      >
        Home
      </NavLink>
      <NavLink 
        to="/restaurants"
        style={({ isActive }) =>
        isActive ? activeStyle : linkStyle
      }
      >
        Restaurants
      </NavLink>
      <NavLink
        to="/new" 
        style={({ isActive }) =>
        isActive ? activeStyle : linkStyle
      }
      >
        Add New Restaurant
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) =>
        isActive ? activeStyle : linkStyle
      }
      >
        About
      </NavLink>
    </div>
  )
}

export default NavBar;
