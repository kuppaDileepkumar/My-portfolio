import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming you have a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Dileepkumar</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
