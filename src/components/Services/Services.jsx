import React from 'react';
import './Services.css';  // Importing CSS for styling the services section
import prog1 from '../../assets/fruits.png';  // Importing images for services
import prog2 from '../../assets/water.png';
import prog3 from '../../assets/meditation.jpg';
import prog1icon from '../../assets/dietrec.png';  // Importing icons for service links
import prog2icon from '../../assets/mediation.png';
import prog3icon from '../../assets/water1.png';
import { Link } from 'react-router-dom';  // Importing Link component for client-side routing

// Services component
const Services = () => {
  return (
    <div className='services-container'>
      {/* Section for services, with an ID for potential linking */}
      <div className="services" id="serviceslink">
       
        {/* Service 1: Diet Recommender */}
        <div className="service">
          {/* Image for Diet Recommender */}
          <img src={prog1} alt="Diet Recommender" />
          <div className="caption">
            {/* Link to Diet Recommender component with an icon */}
            <Link to="/components/FoodRecommendation/FoodRecommendation">
              <img src={prog1icon} alt="Diet Recommender Icon" />
            </Link>
            <a href="/components/FoodRecommendation/FoodRecommendation">Diet Recommender</a>
          </div>
        </div>

        {/* Service 2: Hydration Monitor */}
        <div className="service">
          {/* Image for Hydration Monitor */}
          <img src={prog2} alt="Hydration Monitor" />
          <div className="caption">
            {/* Link to Hydration Monitor component */}
           
             <Link to="/components/Fertilizer/Fertilizer">
              <img src={prog3icon} alt="Hydration Monitor Icon" />
            </Link> 
             <a href="/components/Hydration/Hydration">Hydration Monitor</a> 
          </div>
        </div>

        {/* Service 3: Meditation */}
        <div className="service">
          {/* Image for Meditation */}
          <img src={prog3} alt="Meditation" />
          <div className="caption">
            {/* Link to Meditation component with an icon */}
            <Link to="/components/Meditation/Meditation">
              <img src={prog2icon} alt="Meditation Icon" />
            </Link>
            <a href="/components/Meditation/Meditation">Meditation</a>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Services;
