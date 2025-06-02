import { useEffect, useState } from 'react';
import './Perfil.css';
import { ToastContainer, toast } from 'react-toastify';
import Sidebar from '../../components/Sidebar/Sidebar';
import Computador from '../../assets/computador.png';
import Container from '../../components/Container/Container';



const API_URL = 'http://localhost:5000/api';

function Perfil() {
    const [user, setUser] = useState({});
    const [achievements, setAchievements] = useState([]);

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

    const getUser = async () => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            showError("No user found in localStorage");
            return;
        }
        const user = JSON.parse(storedUser);

        const response = await fetch(`${API_URL}/user/${user.id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            showError("Internal error, user cannot be located");
            return;
        }

        const userData = await response.json();
        setUser(userData);
    };

    const getAchievements = async () => {
        if (!user || !user.id) {
            return;
        }

        const response = await fetch(`${API_URL}/achievement/all/${user.id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            showError("Internal error, achievements cannot be located");
            return;
        }

        const achievementsData = await response.json();
        setAchievements(achievementsData);
    };

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        if (user && user.id) {
            getAchievements();
            
        }
    }, [user]);

    return (
        <>
            <Sidebar />
            <Container>
                <section className="perfil-container">
                    <div className="perfil-info">
                        <img src={Computador} alt="Avatar" className="perfil-avatar" />
                        <div className="perfil-dados">
                            <p className='perfil-nome'><strong>{user.name}</strong></p>
                            <p className='perfil-email'><strong>Email:</strong> {user.email}</p>
                            <p className='perfil-info'><strong>Cargo:</strong> Desenvolvedor Junior</p>
                        </div>
                    </div>
                    <div className="perfil-achievements-silver">
                        <h2 className="perfil-achievements-title">Conquistas</h2>
                        <ul className="perfil-achievements-list">
                            {achievements.length > 0 ? (
                                achievements.map(a => (
                                    <li
                                        key={a.id}
                                        className={a.achievementStatus === 1 ? 'perfil-achievement-item' : 'perfil-achievement-item-silver'}
                                    >
                                        {a.image ? (
                                            <img
                                                src={`data:image/png;base64,${a.image}`}
                                                alt={a.title}
                                                className="perfil-achievement-icon"
                                            />
                                        ) : (
                                            <div>Sem imagem</div>
                                        )}
                                        {console.log(achievements)}
                                        <div>
                                            <strong>{a.title}:</strong> {a.description}
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li>Nenhuma conquista encontrada.</li>
                            )}
                        </ul>
                    </div>
                </section>
            </Container>
        </>
    );
}

export default Perfil;