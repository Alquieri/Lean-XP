/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../css/Sidebar.css';

const Sidebar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <div className={`sidebar ${!isDarkMode ? 'light-mode' : ''}`}>
            {/* Logo Section */}
            <div className="logo-section">
                <h1>LOGO</h1>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
                <a href="/" className="nav-link">
                    <span>Home</span>
                </a>
                <a href="/teams" className="nav-link">
                    <span>Teams</span>
                </a>
                <a href="/tournaments" className="nav-link">
                    <span>Tournaments</span>
                </a>
                <a href="/matches" className="nav-link">
                    <span>Matches</span>
                </a>
                <a href="/players" className="nav-link">
                    <span>Players</span>
                </a>
                <a href="/profile" className="nav-link">
                    <span>Profile</span>
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
