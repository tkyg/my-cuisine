import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="background">
        <img src={window.location.origin + "/images/background.jpeg"} alt="MyCuisine" />
      </div>
      <div className="mission"></div>
      
    </div>
  )
}

export default Home
