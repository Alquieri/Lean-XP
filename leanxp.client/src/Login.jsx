import { useState } from 'react';
import './css/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './AuthContext.jsx';
import { useNavigate } from 'react-router-dom';


const API_URL = 'http://localhost:5000/api';

const Login = () => {
    const { login } = useAuth();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            toast.error('Por favor, informe e-mail e senha.', { position: "top-right", autoClose: 3000, theme: "dark" });
            return;
        }

        try {
            const userDto = {
                Login: formData.email,
                Password: formData.password
            }

            await login(userDto);
            navigate('/Home');
        } catch (error) {
            toast.error('Falha no login. Tente novamente.', { position: "top-right", autoClose: 3000, theme: "dark" });
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            toast.error('Preencha todos os campos.', { position: "top-right", autoClose: 3000, theme: "dark" });
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error('As senhas não coincidem.', { position: "top-right", autoClose: 3000, theme: "dark" });
            return;
        }

        try {
            const response = await fetch(`${API_URL}/user/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    percentual: 1,
                    moduleNumber: 1
                })
            });

            if (response.ok) {
                toast.success('Conta criada com sucesso!', { position: "top-right", autoClose: 3000, theme: "dark" });
                setIsSignUp(false);
            } else {
                const errorData = await response.json();
                toast.error(`Falha no cadastro: ${errorData.message}`, { position: "top-right", autoClose: 3000, theme: "dark" });
            }
        } catch (error) {
            toast.error('Falha no cadastro. Tente novamente.', { position: "top-right", autoClose: 3000, theme: "dark" });
        }
    };

    return (
        <div className={`login-container ${isSignUp ? 'sign-up-mode' : ''}`}>
            <ToastContainer />
            <div className="login-box">
                <div className="form-container sign-in-container">
                    <form className="login-form" onSubmit={handleSubmitLogin}>
                        <h2>Entrar</h2>
                        <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} value={formData.email} required />
                        <input type="password" name="password" placeholder="Senha" onChange={handleInputChange} value={formData.password} required />
                        <button type="submit">Entrar</button>
                    </form>
                </div>

                <div className="form-container sign-up-container">
                    <form className="login-form" onSubmit={handleRegister}>
                        <h2>Criar Conta</h2>
                        <input type="text" name="name" placeholder="Nome" onChange={handleInputChange} value={formData.name} required />
                        <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} value={formData.email} required />
                        <input type="password" name="password" placeholder="Senha" onChange={handleInputChange} value={formData.password} required />
                        <input type="password" name="confirmPassword" placeholder="Confirmar Senha" onChange={handleInputChange} value={formData.confirmPassword} required />
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-leftt">
                            <h3>Já possui uma conta?</h3>
                            <p>Faça login para continuar!</p>
                            <button className="ghost" onClick={() => setIsSignUp(false)}>Entrar</button>
                        </div>
                        <div className="overlay-panel overlay-rightt">
                            <h3>Primeira vez aqui?</h3>
                            <p>Cadastre-se e aproveite as possibilidades!</p>
                            <button className="ghost" onClick={() => setIsSignUp(true)}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
