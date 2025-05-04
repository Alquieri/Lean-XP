import { useState } from 'react';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark"
      });
    } else {
      toast.error('Please enter email and password.', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark"
      });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password && formData.confirmPassword) {
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match.', {
          position: "top-right",
          autoClose: 3000,
          theme: "dark"
        });
        return;
      }
      toast.success('Account created!', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark"
      });
    } else {
      toast.error('Please fill in all fields.', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark"
      });
    }
  };

  return (
    <div className={`login-container ${isSignUp ? 'sign-up-mode' : ''}`}>
      <ToastContainer />
      <div className="login-box">
        <div className="form-container sign-in-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              value={formData.password}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>

        <div className="form-container sign-up-container">
          <form className="login-form" onSubmit={handleRegister}>
            <h2>Create Account</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              value={formData.name}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              value={formData.password}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleInputChange}
              value={formData.confirmPassword}
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h3>Already have an account?</h3>
              <p>Login here and continue your journey!</p>
              <button className="ghost" onClick={() => setIsSignUp(false)}>Login</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h3>New here?</h3>
              <p>Sign up and explore the possibilities!</p>
              <button className="ghost" onClick={() => setIsSignUp(true)}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
