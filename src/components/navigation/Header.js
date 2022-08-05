import React from 'react'

const Header = ({ appName, slogan }) => {
  return (
    <div>
      <h1>{appName}</h1>
      <h5>Promoting your {slogan}</h5>
    </div>
  )
}

export default Header
