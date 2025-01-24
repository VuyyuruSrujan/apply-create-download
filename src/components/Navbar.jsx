import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <Briefcase size={24} />
          <span>ResumeBuilder</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/" className="nav-link">Templates</Link>
          <button className="btn btn-primary">Create Resume</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;