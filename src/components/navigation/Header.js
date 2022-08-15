import React from 'react'
import { StyledHeader } from "../../styles/HeaderStyle"
import { Container } from '../../styles/Container'
import "../../index.css"

const Header = ({ appName, slogan }) => {
  return (
    <StyledHeader  style={{"fontFamily": "Aboreto"}}>
      <Container>
        <h1 style={{"fontFamily": "Aboreto"}}>{appName}</h1>
        <h5 style={{"textAlign": "right"}}> -Promoting your {slogan}</h5>
      </Container>
    </StyledHeader>
  )
}

export default Header
