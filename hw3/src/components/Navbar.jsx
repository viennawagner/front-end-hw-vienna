import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

//The main app and router
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/" className="navbar-item"> Home </Link></li>
        <li><Link to="/list" className="navbar-item"> List </Link></li>
        <li><Link to="/population" className="navbar-item"> Population </Link></li>
      </ul>
    </nav>
  )
}