import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify'; 
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const showError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,

        });
    };

    
    const navigate = useNavigate();
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Erro ao fazer parse do usuário salvo:", error);
                localStorage.removeItem('user');
                setUser(null);
                navigate('/login');
            }
        } else {
            navigate('/login');
        }
    }, []);

    const login = async (loginData) => {
        const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            showError(errorData.message || "Erro ao fazer login");
            return;
        }

        const responseData = await response.json();

        setUser(responseData);
      

        localStorage.setItem('user', JSON.stringify(responseData));
    };

    const logout = () => {
        setUser(null);
        

        localStorage.removeItem('user');
   
    }

    const isAuthenticated = !!user;
    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );

}
export function useAuth() {
    return useContext(AuthContext);
}




