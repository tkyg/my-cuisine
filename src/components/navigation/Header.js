import React from 'react'

const Header = ({ appName, slogan }) => {
  return (
    <div>
      <h1>{appName}</h1>
      <h2>Promoting your {slogan}</h2>
    </div>
  )
}

export default Header
