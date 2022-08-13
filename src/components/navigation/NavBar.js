import React from 'react'
import { StyledLink, DivLink } from "../../styles/StyledLink"

function NavBar() {
  return (
    <DivLink>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/restaurants">Restaurants</StyledLink>
      <StyledLink to="/new">Add New Restaurant</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </DivLink>
  )
}

export default NavBar;
