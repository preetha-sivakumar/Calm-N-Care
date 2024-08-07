
import React, { useState } from 'react';
// Import custom CSS for styling the Cart component
import './Cart.css';
// Import the Navbar component for the top navigation bar
import Navbar from '../../components/Navbar1/Navbar1';
// Import the Banner component for the top banner section
import Banner from '../../components/Banner/Banner';
// Import the ItemDisplay component to display items based on category
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay';

const Cart = (props) => {
    // Initialize category state to "All" using useState hook
    const [category, setCategory] = useState("All");

    return (
        <div>
            {/* Render the Navbar component */}
            <Navbar />
            {/* Render the Banner component */}
            <Banner />
            {/* Render the ItemDisplay component and pass the current category state as a prop */}
            <ItemDisplay category={category} />
        </div>
    );
};

export default Cart;
