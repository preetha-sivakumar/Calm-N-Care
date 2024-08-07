import './App.css';
// Import the LoginSignup component for user authentication
import { LoginSignup } from './components/LoginSignup/LoginSignup';
// Import React and necessary components from react-router-dom
import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
// Import various pages and components for routing
import Home from './Pages/Home/Home';
import FoodRecommendation from './components/FoodRecommendation/FoodRecommendation';
import HydrationForm from './components/Hydration/Hydration';
import MeditationForm from './components/Meditation/Meditation';
import Cart from './Pages/Cart/Cart';
import Bag from '../src/components/Cart/Bag';
import Assoc from './Pages/Assoc/Assoc';

function App() {
  return (
    <Routes>
      {/* Redirect the root path to CalmNCare-home */}
      <Route path="/" element={<Navigate to="/CalmNCare-home" replace />} />
      {/* Route for the LoginSignup component */}
      <Route path="/components/LoginSignup/LoginSignup" element={<LoginSignup />} />
      {/* Route for the Home component */}
      <Route path="/CalmNCare-home" element={<Home />} />
      {/* Route for the FoodRecommendation component */}
      <Route path="/components/FoodRecommendation/FoodRecommendation" element={<FoodRecommendation />} />
      {/* Route for the HydrationForm component */}
      <Route path="/components/Hydration/Hydration" element={<HydrationForm />} />
      {/* Route for the MeditationForm component */}
      <Route path="/components/Meditation/Meditation" element={<MeditationForm />} />
      {/* Route for the Cart component */}
      <Route path="/Pages/Products" element={<Cart />} />
      {/* Route for the Bag component */}
      <Route path="/Pages/Bag/Bag" element={<Bag />} />
      {/* Route for the Assoc component */}
      <Route path="/Pages/Reads" element={<Assoc />} />
    </Routes>
  );
}

export default App;
