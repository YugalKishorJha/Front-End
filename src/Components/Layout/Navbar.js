import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
    {/* <h3 className="logo">EXCUSE APP</h3> */}
    <ul className="nav-Links">

    <Link to="/" className="home">  
    <li>Home</li>
    </Link>
     
        
    <Link to="/login" className="login">
    <li>Login Page</li>
    </Link>

    <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
   

    </ul>
    </nav>
  )
}

export default Navbar
