import React, { useState, useRef, useEffect } from 'react';
import './css/Home.css';
import Sidebar from './components/Sidebar';
import Modulo from './components/Modulo';
import Computador from './assets/computador.png';
import Container from './components/container';
import Conteudo from './Conteudo.jsx';
import { ToastContainer } from 'react-toastify';
import { WinAchievement } from './AchievementService.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './AuthContext.jsx';

function Home() {
    const modulosRefs = useRef([]);
    const [moduloAtivo, setModuloAtivo] = useState(null);
    const { user, isAuthenticated } = useAuth();

    const [modulos, setModulos] = useState([
        { numero: '1', titulo: 'Introdução ao Lean', video: 'https://www.youtube.com/embed/ttxsCvdXnu4' },
        { numero: '2', titulo: 'Eliminação de Desperdícios' },
        { numero: '3', titulo: 'Melhoria Contínua' },
        { numero: '4', titulo: 'Empoderamento da Equipe' },
        { numero: '5', titulo: 'Foco no Cliente' },
        { numero: '6', titulo: 'Cultura Lean' },
        { numero: '7', titulo: 'Lean e Agile' },
        { numero: '8', titulo: 'Lean em Ação' }
    ]);

    const porcentagem = (modulos.filter(m => m.status === 'confirmed').length / modulos.length) * 100;
    const progress = { width: `${porcentagem}%` };

    // Atualiza o status dos módulos com base no moduleNumber do user
    useEffect(() => {
        if (user) {
            setModulos(prevModulos => {
                return prevModulos.map((modulo, index) => {
                    if (index + 1 < user.moduleNumber) {
                        return { ...modulo, status: 'confirmed' };
                    } else if (index + 1 === user.moduleNumber) {
                        return { ...modulo, status: 'pending' };
                    } else {
                        return { ...modulo, status: 'lock' };
                    }
                });
            });

            // Achievement de "login"
            const runAchievement = async () => {
                await WinAchievement(1);  // Exemplo: achievement de ter feito login
            };
            runAchievement();
        }
    }, [user]);

    // Verifica se o usuário completou todos os módulos e ativa o achievement
    useEffect(() => {
        if (user && porcentagem === 100) {
            const runAchievement = async () => {
                await WinAchievement(5);  // Exemplo: achievement de concluir todos os módulos
            };
            runAchievement();
        }
    }, [user, porcentagem]);

    const updateModuleNumber = async (newModuleNumber) => {
        console.log(user)
        try {
            await fetch(`http://localhost:5000/api/user/patch/${user.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ModuleNumber: newModuleNumber }),
            });
        } catch (error) {
            console.error("Erro ao atualizar módulo:", error);
        }
    };

    const handleModuloComplete = (numero) => {
        setModulos(prevModulos => {
            const index = prevModulos.findIndex(m => m.numero === numero);
            const newModulos = [...prevModulos];

            // Confirma o módulo atual
            newModulos[index].status = 'confirmed';

            // Desbloqueia o próximo, se existir
            if (index + 1 < newModulos.length) {
                newModulos[index + 1].status = 'pending';
                updateModuleNumber(parseInt(newModulos[index + 1].numero));
            } else {
                // Se completou o último, atualiza moduleNumber também
                updateModuleNumber(modulos.length + 1);
            }

            return newModulos;
        });
    };

    const handleContinue = () => {
        const moduloPendingIndex = modulos.findIndex(m => m.status === 'pending');
        if (moduloPendingIndex !== -1) {
            setModuloAtivo(modulos[moduloPendingIndex].numero);
        }
    };

    return (
        <>
            <ToastContainer />
            <Sidebar />
            <Container>
                <div id="main">
                    <div id="Header">
                        <div className="boas-vindas">
                            <p>
                                <strong>Bem-vindo(a) {isAuthenticated && user ? (
                                    <span>{user.name}</span>
                                ) : (
                                    <span>Por favor, faça login</span>
                                )}</strong><br />
                                <span>ao curso de <span className="destaque">Lean Software Development</span></span>
                            </p>
                        </div>
                    </div>

                    <div id="continue">
                        <img src={Computador} alt="Computador" />
                        <button id="continue-button" onClick={handleContinue}>
                            <strong>Continue de onde parou</strong>
                        </button>
                        <div className="progresso-container">
                            <h2>Progresso:</h2>
                            <div id="progress-bar">
                                <div id="progress" style={progress}><h5>{Math.round(porcentagem)}%</h5></div>
                            </div>
                        </div>
                    </div>

                    <div id="modules">
                        {modulos.map((modulo, index) => (
                            <div ref={el => modulosRefs.current[index] = el} key={modulo.numero}>
                                <Modulo
                                    numero={modulo.numero}
                                    titulo={modulo.titulo}
                                    status={modulo.status}
                                    video={modulo.video}
                                    onComplete={handleModuloComplete}
                                    moduloAtivo={moduloAtivo}
                                    setModuloAtivo={setModuloAtivo}
                                >
                                    <Conteudo numero={modulo.numero} />
                                </Modulo>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Home;