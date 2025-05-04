/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../css/Sidebar.css';
import logo from'../assets/logo.png'

const Sidebar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <div className={`sidebar ${!isDarkMode ? 'light-mode' : ''}`}>
            {/* Logo Section */}
            <div className="logo-section" >
                
                <h1>Lean XP</h1>
                <img src={logo} id="logo" alt="Logo"></img>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
                <a href="/" className="nav-link">
                    <span>Home</span>
                </a>
                <a href="/perfil" className="nav-link">
                    <span>Perfil</span>
                </a>
                <a href="/curso" className="nav-link">
                    <span>Curso</span>
                </a>
                <a href="/exit" className="nav-link">
                    <span>Exit</span>
                </a>
            </div>

            {/* Bottom Section - Temporariamente estático */}
            <div className="bottom-section">
                <button className="login-button">
                    <span>Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
