/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../css/Sidebar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { WinAchievement } from '../AchievementService.jsx';

const Sidebar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);


    // Função para desbloquear conquista ao entrar em "Sobre"
    const handleSobreClick = () => {
        const localUser = localStorage.getItem('user');
        if (localUser) {
            WinAchievement(3);
        }
    };

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
            <Link
                to="/Home"
                className="nav-link"
            >
                <i className="fas fa-home"></i>
                <span>Home</span>
            </Link>
            <Link to="/perfil" className="nav-link">
                <i className="fas fa-user"></i>
                <span>Perfil</span>
            </Link>
            <Link
                to="/Sobre"
                className="nav-link"
                onClick={handleSobreClick}
            >
                <i className="fas fa-book-open"></i>
                <span>Sobre</span>
            </Link>
            <div className="bottom-section">
                <Link to="/login" className="login-button">
                    <i className="fas fa-sign-in-alt"></i>
                    <span>Sign out</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
