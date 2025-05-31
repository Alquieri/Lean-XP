import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext.jsx';
import Home from './Home';
import Login from './Login';
import Perfil from './Perfil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/sobre" element={<h1>Sobre</h1>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
  </React.StrictMode>
);

