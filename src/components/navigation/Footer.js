import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div>
      <div className="row" style={{display: "flex", height: "50px", marginBottom: "-50px"}}>
        <div className="col-6" style={{width: "50%", float: "left"}}>
        <h5>My Cuisine, Inc.</h5>
        </div>
        <div className="col-6" style={{width: "50%", float: "right"}}></div>
          <SocialIcon url="https://twitter.com" style={{width: "1em", margin: ".2em", padding: ".2em"}} />
          <SocialIcon url="https://facebook.com" style={{width: "1em", margin: ".2em", padding: ".2em"}} />
          <SocialIcon url="https://instagram.com" style={{width: "1em", margin: ".2em", padding: ".2em"}} />
      </div>
    </div>
  )
}

export default Footer
