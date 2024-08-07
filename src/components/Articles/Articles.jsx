import React, { useContext } from 'react';
// Import custom CSS for styling the Articles component
import './Articles.css';
// Import the StoreContext for accessing market list data
import { StoreContext } from '../../context/StoreContext';
// Import the Associations component to display individual items
import Associations from '../../Pages/Associations/associations';

const Articles = ({ category,name, price, description, image, web }) => {
  // Destructure market_list from the StoreContext
  const { market_list } = useContext(StoreContext);
  

  // Click handler function
  const handlePriceClick = (price) => {
    console.log(`Price clicked: ${price}`);
    // You can implement further actions here
  };

  return (
    <div className="container">
      <div className="item-display" id="item-display">
        {/* Render the Articles heading */}
        <h2>Articles</h2>
        <div className="item-display-list">
          {/* Map through the market_list and render Associations component for each item */}
          {market_list.map((item, index) => {
            // Check if the category is "All" or matches the item's category
            if (category === "All" || category === item.category) {
              return (
                <Associations
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  web = {item.web}
                onPriceClick={() => handlePriceClick(item.price)} // Pass click handler
                
                />
              );
            }
            return null; // Return null for items that don't match the category
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
