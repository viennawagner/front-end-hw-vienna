import React from "react";
import "../style.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/" className="navbar-item"> Home </a></li>
        <li><a href="/list" className="navbar-item"> List </a></li>
       <li><a href="/population" className="navbar-item"> Population </a></li>
        <li><a href="/CHANGEME" className="navbar-item"> CHANGEME </a></li>
      </ul>
    </nav>
  )
}