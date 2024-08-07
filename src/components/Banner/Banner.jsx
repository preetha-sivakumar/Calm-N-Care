import React from 'react'
import './Banner.css' // Importing the CSS file for styling
import dark_arrow from '../../assets/dark-arrow.png' // Importing an image asset for the button
import { Link } from "react-router-dom" // Importing Link component for navigation

const Banner = () => {
  return (
    <div className="banner container3" id="bannerlink"> {/* Main container for the banner */}
        <div className="banner-text"> {/* Container for text content */}
            <h1 className="banner-heading">Navigating Parenthood with Confidence</h1> {/* Main heading */}
            <p className="banner-content"> {/* Paragraph with content */}
             CalmNCare is committed to supporting new parents by effectively managing stress, combating sleep deprivation, 
             and promoting the well-being of families. Our mission is to foster healthier and happier family dynamics by 
             offering tailored solutions that empower parents on their journey.
            </p>
            <br />
            {/* Link to another page with a button for exploring more */}
            <Link to="/store"> {/* Updated to provide a valid route */}
              <button className="btn3"> {/* Button styling */}
                Explore More <img src={dark_arrow} alt="Dark arrow" /> {/* Button text and image */}
              </button>
            </Link>
        </div>
    </div>
  )
}

export default Banner
