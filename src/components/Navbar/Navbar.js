import React from 'react'
import {Link} from "react-router-dom" 
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='bg-red-600 ' >    
      <div className='header bg-red-600'>
        <Link to="/" className='bg-red-600'>Home</Link>
        <Link to="/types">Types</Link>
        <Link to ="/news">News</Link>
        <Link to="/expert">Expert login </Link>
        <Link to="/login ">Login credentials </Link>  
      </div>
    </div>
  )
}

export default Navbar