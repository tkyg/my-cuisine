import React from 'react'
import { StyledLink } from "./StyledLink"

function NavBar() {
  return (
    <div>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/restaurants">Restaurants</StyledLink>
      <StyledLink to="/new">Add New Restaurant</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </div>
  )
}

export default NavBar;
