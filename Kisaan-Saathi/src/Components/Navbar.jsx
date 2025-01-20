import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <>
     
      <nav>
        <h1 className='navi'>Kisaan Saathi</h1>
      
      <ul>
       <Link to="/"><li>Home</li></Link>
       <Link to="/products"><li>Products</li></Link>
        <Link to="/learnhub"><li>LearnHub</li></Link>
        <Link to="/survey"><li>Survey</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>
      </nav>
      </>
    </div>
  )
}

export default Navbar
