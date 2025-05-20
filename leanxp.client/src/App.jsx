
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<h1>Perfil</h1>} />
        <Route path="/sobre" element={<h1>Sobre</h1>} />    
      </Routes>
    </BrowserRouter>
  );
}
