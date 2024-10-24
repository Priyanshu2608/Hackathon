import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Homepage/></>
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
