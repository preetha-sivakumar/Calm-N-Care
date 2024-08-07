import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/l1.png';
import { Link } from 'react-router-dom';

// Navbar component
const Navbar = () => {
   // State to track the active menu item
   const [menu, SetMenu] = useState("Home");
   
   // State to track if the navbar is sticky
   const [sticky, SetSticky] = useState(false);

   // useEffect to add and remove scroll event listener
   useEffect(() => {
    // Event listener to check scroll position and set sticky state
    const handleScroll = () => {
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
    // Navbar container with dynamic class based on sticky state
    <nav className={`container2 ${sticky ? 'dark-nav' : ''}`}>
        {/* Logo image */}
        <img src={logo} alt="Logo" className="logo" />
        <ul>
            {/* Navigation links with active class based on the selected menu */}
            <a href="#bannerlink" onClick={() => SetMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</a>
            <a href="#titlelink" onClick={() => SetMenu("Services")} className={menu === "Services" ? "active" : ""}>Services</a>
            <a href="#aboutlink" onClick={() => SetMenu("About")} className={menu === "About" ? "active" : ""}>About</a>
            <a href="/Pages/Reads" onClick={() => SetMenu("Associations")} className={menu === "Associations" ? "active" : ""}>Reads</a>
            {/* Uncomment and adjust path if needed */}
            {/* <a href="../../Pages/Store/Store" onClick={() => SetMenu("User")} className={menu === "User" ? "active" : ""}>User</a> */}
            <a href="../../Pages/Products" onClick={() => SetMenu("Products")} className={menu === "Products" ? "active" : ""}>Products</a>
            <a href="../../Pages/Bag/Bag" onClick={() => SetMenu("Cart")} className={menu === "Cart" ? "active" : ""}>Carts</a>

            {/* Link to the registration page with a button */}
            <Link to="/components/LoginSignup/LoginSignup">   
                <button className='btn2'>Register</button>
            </Link>  
        </ul>
    </nav>
   );
}

export default Navbar;
