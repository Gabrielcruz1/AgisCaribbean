import React from 'react'
import "../Styles/NavBar.css"
import Logo from "../assets/Logo-Pink.png"

const NavBar = () => {
  return (
    <div className='navBarContainer' >
      <div>
        <a href="/">
          <img src={Logo} className="logo"/>
        </a>
      </div>
      <div className="title-div">
        <h1> Agi's Caribbean</h1>
      </div>
    </div>
  )
}

export default NavBar