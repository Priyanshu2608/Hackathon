import React from 'react'
import './Navbar.css'
import logo from "../assets/kisaanlogo.jpg"

const Navbar = () => {
  return (
    <div>
      <>
     
      <nav>
      <h1 className='Head'>Kisaan Saathi</h1>
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>LearnHub</li>
        <li>Survey</li>
      </ul>
      </nav>
      </>
    </div>
  )
}

export default Navbar
