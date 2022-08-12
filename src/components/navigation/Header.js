import React from 'react'
import { StyledHeader } from "../../styles.js/HeaderStyle"
import { Container } from '../../styles.js/Container'

const Header = ({ appName, slogan }) => {
  return (
    <StyledHeader  style={{"fontFamily": "Caveat"}}>
      <Container>
      <h1 style={{"fontFamily": "Caveat"}}>{appName}</h1>
      <h5 style={{"textAlign": "right"}}> -Promoting your {slogan}</h5>
      </Container>
    </StyledHeader>
  )
}

export default Header
