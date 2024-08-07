import React, { useState } from 'react';

// Import custom CSS for styling the Association page
import './Assoc.css';
// Import the Articles component to display articles based on category
import Articles from '../../components/Articles/Articles';
// Import the Navbar component for the top navigation bar
import Navbar from '../../components/Navbar1/Navbar1';
// Import the Banner component for the top banner section
import Banner from '../../components/Banner/Banner';

const Assoc = (props) => {
    // Initialize category state to "All" using useState hook
    const [category, setCategory] = useState("All");

    // Render the Association page layout with Navbar, Banner, and Articles components
    return (
        <div>
            {/* Render the Navbar component */}
            <Navbar />
            {/* Render the Banner component */}
            <Banner />
            {/* Render the Articles component and pass the current category state as a prop */}
            <Articles category={category} />
        </div>
    );
};

export default Assoc;
