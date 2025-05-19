/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../css/Sidebar.css';
import logo from '../assets/logo.png';

const Sidebar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <div className={`sidebar ${!isDarkMode ? 'light-mode' : ''}`}>
            {/* Top Icon Section (Diamond) */}
            <div className="top-icon">
                <i className="fas fa-gem"></i>
            </div>

            {/* Logo Section */}
            <div className="logo-section">
                <img src={logo} id="logo" alt="Logo" />
            </div>

            {/* Navigation Links */}
            <a href="/" className="nav-link">
                <i className="fas fa-home"></i>
                <span>Home</span>
            </a>
            <a href="/perfil" className="nav-link">
                <i className="fas fa-user"></i>
                <span>Perfil</span>
            </a>
            <a href="/curso" className="nav-link">
                <i className="fas fa-book-open"></i>
                <span>Sobre</span>
            </a>
            <a href="/exit" className="nav-link">
                <i className="fas fa-sign-out-alt"></i>
                <span>Exit</span>
            </a>

            {/* Bottom Section */}
            <div className="bottom-section">
                <button className="login-button">
                    <i className="fas fa-sign-in-alt"></i>
                    <span>Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
