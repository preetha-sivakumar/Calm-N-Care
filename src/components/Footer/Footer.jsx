import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer'>
        <p>&copy; 2024 CalmNCare. All rights reserved.</p>
        <ul>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
