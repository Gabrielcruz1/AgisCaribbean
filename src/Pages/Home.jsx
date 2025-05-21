import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Reviews from '../Components/Reviews'
import "../Styles/Home.css"

const Home = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <div className="main-content">Order now </div>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1651.9094915954172!2d-118.32947946446966!3d34.099777415219734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x80c2bf398ee4a967%3A0xb31430a08160c702!2sHollywood%20Farmers%E2%80%99%20Market%2C%201600%20Ivar%20Ave%2C%20Los%20Angeles%2C%20CA%2090028!3m2!1d34.099773!2d-118.328192!5e0!3m2!1sen!2sus!4v1747713263851!5m2!1sen!2sus">
    </iframe>
    
    <Reviews />
    <Footer />
    </>
  )
}

export default Home