import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6"></div>
          <h5>Follow Us</h5>
        <div className="col-6"></div>
          <SocialIcon url="https://twitter.com/jaketrent" />
          <SocialIcon url="https://facebook.com/jaketrent" />
          <SocialIcon url="https://instagram.com/jaketrent" />
      </div>
    </div>
  )
}

export default Footer
