import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner.jsx'
import Services from '../../components/Services/Services.jsx'
import About from '../../components/About/About.jsx'
import Title from '../../components/Title/Title.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'

const Home = () => {
    
  return (
    <div>
      <Navbar />
      <Banner />
        <Title />
        <Services />
        < About />
        <Footer />
      
    </div>
  )
}

export default Home
