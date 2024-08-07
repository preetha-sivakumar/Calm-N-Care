import React from 'react';
// Import custom CSS for styling the About component
import './About.css';
// Import the about image from assets
import aboutimg from '../../assets/parenting.png';

const About = () => {
  return (
    <div className="about" id="aboutlink">
      <div className="aboutl">
        {/* Render the about image with specified width and height */}
        <img src={aboutimg} alt="Parenting" style={{ width: '550px', height: '420px' }} />
      </div>
      <div className="aboutr">
        {/* Render the About Us heading */}
        <h3>About Us</h3>
        {/* Render the CalmNCare tagline */}
        <h2>CalmNCare: Nurturing Families, One Step at a Time</h2>
        {/* Render the description paragraphs */}
        <p>By empowering parents with the knowledge and support they need, CalmNCare strives to</p>
        <p>create a nurturing environment where families can thrive. We are committed to making the</p>
        <p>early stages of parenthood a more joyful and rewarding experience.</p>
      </div>
    </div>
  );
};

export default About;
