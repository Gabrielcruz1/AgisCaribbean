import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/NavBar.css"
import Logo from "../assets/Logo-Pink.png"


const NavBar = () => {
  return (
    <div className='navBarContainer' >
      {/*  LOGO */}
      <div className='navElements'>
        <a href="#top">
          <img src={Logo} className="logo"/>
        </a>
      {/* </div> */}
      {/* TITLE */}
      {/* <div className="title-div"> */}
        <h1> Agi's Caribbean</h1>
      {/* </div> */}
      {/* LINKS */}
        <div className='navigationLinks'>
          <Link className='individualLink' to="/products">Products</Link>
          <Link className='individualLink' to="/cart">Cart</Link>
          <Link className='individualLink' to="/about">About</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar