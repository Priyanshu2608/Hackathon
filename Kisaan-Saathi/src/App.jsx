import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import EduHub from './Components/EduHub';



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Homepage/></>
    },
    {
      path:"/learnhub",
      element:<><Navbar/><EduHub/></>
    },
    
    
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
