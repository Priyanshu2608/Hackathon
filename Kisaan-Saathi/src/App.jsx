import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Homepage from './Components/Homepage'
import EduHub from './Components/EduHub';
import About from './Components/About';
import Survey from './Components/Survey';



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Homepage/></>
    },
    {
      path:"/products",
      element:<><Navbar/><Product/></>
    },
    {
      path:"/learnhub",
      element:<><Navbar/><EduHub/></>
    },
   
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/survey",
      element:<><Navbar/><Survey/></>
    }
  ])
  return (
    <div>
      <>
      
    
      <RouterProvider router={router}/>
      </>
    </div>
  )
}

export default App
