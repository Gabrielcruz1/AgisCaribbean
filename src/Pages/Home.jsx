import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import "../Styles/Home.css"

const Home = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <div className="main-content">Main Content</div>
    <Footer />
    </>
  )
}

export default Home