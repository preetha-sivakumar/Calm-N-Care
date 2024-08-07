import React, { useEffect, useState } from 'react';
import './Navbar1.css';  // Importing CSS for the navbar styling
import logo from '../../assets/l1.png';  // Importing logo image
import { Link } from 'react-router-dom';  // Importing Link component for client-side routing

// Navbar component
const Navbar = () => {
   // State to track the active menu item
   const [menu, SetMenu] = useState("Home");
   
   // State to track if the navbar should be sticky
   const [sticky, SetSticky] = useState(false);

   // useEffect to handle scroll events and set sticky state
   useEffect(() => {
    // Function to handle scroll and update sticky state
    const handleScroll = () => {
      // Set sticky to true if scrolled more than 50px, otherwise false
      window.scrollY > 50 ? SetSticky(true) : SetSticky(false);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   }, []);
    
   return (
    // Navbar container with conditional class for sticky behavior
    <nav className={`container1 ${sticky ? 'dark-nav' : ''}`}>
        {/* Logo image with alt text for accessibility */}
        <img src={logo} alt="Logo" className="logo" />
        <ul>
            {/* Navigation links with active class based on the selected menu item */}
            <a href="/" onClick={() => SetMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</a>
            {/* Uncomment and adjust path if needed */}
            {/* <a href="../../Pages/Store/Store" onClick={() => SetMenu("User")} className={menu === "User" ? "active" : ""}>User</a> */}
            
            <a href="/Pages/Reads" onClick={() => SetMenu("Reads")} className={menu === "Reads" ? "active" : ""}>Reads</a>
            <a href="../../Pages/Products" onClick={() => SetMenu("Products")} className={menu === "Products" ? "active" : ""}>Products</a>
            <a href="../../Pages/Bag/Bag" onClick={() => SetMenu("Cart")} className={menu === "Cart" ? "active" : ""}>Cart</a>
            {/* Link to the registration page with a button */}
            <Link to="/components/LoginSignup/LoginSignup">
                <button className='btn2'>Register</button>
            </Link>  
        </ul>
    </nav>
   );
}

export default Navbar;
