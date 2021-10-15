import React from 'react';
import logo from '../../../Asset/img/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-area">
            <div className="logo"><img src={logo} alt="" /></div>
                <nav>
                    <a href="" className="nav-link">Services</a>
                    <a href="" className="nav-link">Consultation</a>
                    <a href="" className="nav-link">Doctors</a>
                    <a href="" className="nav-link">Articles</a>
                    <a href="" className="nav-link">About Us</a>
                    
                </nav><a href="" className="nav-link nav-btn">Login</a>
            </div></div>
    );
};

export default Navbar;