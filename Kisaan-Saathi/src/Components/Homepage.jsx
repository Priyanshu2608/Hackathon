import React from 'react'
import './Homepage.css'
import Home from '../assets/Home2.jpg'
import farmer from '../assets/Homef1.jpeg'
import farm2 from '../assets/farm2.jpg'
const Homepage = () => {
  return (
    <>
    <div className='Home'>
    <div className='homepage'>
      <div className='homie'>
      <img className='homepic' src={Home} alt="" />
      </div>
    </div>
    <div className='aapka'>
    <h1 className='Homie2'>Aapka Apna Saathi</h1>
    <h2 className='sub'>
        "A Farmer is a Magician who produces money from the mud"
    </h2>
    </div>
    <div>
        <img className='farmer' src={farmer}/>
    </div>
    <div>
        <h2 className='farm2'>"From Buying Seeds to Buying a Tractor"</h2>
    </div>
    <div>
        <img className='farmer2' src={farm2} alt="" />
        <h2 className='farm3'>"From learning Farming Techniques to finding solution to your problems"</h2>
    </div>
    <div>
        <h1 className='farmer3'>We are a onestop solution for farmers</h1>
    </div>
    <div className='stats'>
      <h2 className='statis'>100k+ Farmers Connected 2000+ Verified Sellers</h2>
    </div>
    <footer>
      <p className='foot'>&copy;Copyright Kisaan Saathi</p>
    </footer>
    </div>
    </>
  )
}

export default Homepage
