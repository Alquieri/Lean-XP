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

function Home() {

    const modulosRefs = useRef([]);
    const [moduloAtivo, setModuloAtivo] = useState(null);
    const [userAchievements, setUserAchievements] = useState([]);

    const [modulos, setModulos] = useState([
        { numero: '01', titulo: 'Introdução ao Lean', status: 'confirmed', video: 'https://www.youtube.com/embed/ttxsCvdXnu4' },
        { numero: '02', titulo: 'Eliminação de Desperdícios', status: 'confirmed' },
        { numero: '03', titulo: 'Melhoria Contínua', status: 'confirmed' },
        { numero: '04', titulo: 'Empoderamento da Equipe', status: 'confirmed' },
        { numero: '05', titulo: 'Foco no Cliente', status: 'pending' },
        { numero: '06', titulo: 'Cultura Lean', status: 'lock' },
        { numero: '07', titulo: 'Lean e Agile', status: 'lock' },
        { numero: '08', titulo: 'Lean em Ação', status: 'lock' }
    ]);

    const porcentagem = (modulos.filter(m => m.status === 'confirmed').length / modulos.length) * 100;
    const progress = { width: `${porcentagem}%` };

    const handleModuloComplete = (numero) => {
        setModulos(prevModulos => {
            const index = prevModulos.findIndex(m => m.numero === numero);
            const newModulos = [...prevModulos];

            // Confirma o módulo atual
            newModulos[index].status = 'confirmed';

            // Desbloqueia o próximo, se existir
            if (index + 1 < newModulos.length && newModulos[index + 1].status === 'lock') {
                newModulos[index + 1].status = 'pending';

                
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



    useEffect(() => {
        const localUser = localStorage.getItem('user');
        if (localUser) {
            const runAchievement = async () => {
                await WinAchievement(1);
            };
            runAchievement();
        }
    }, []);

    return (
        <>
            <ToastContainer />
            <Sidebar />
            <Container>
                <div id="main">
                    <div id="Header">
                        <div className="boas-vindas">
                            <p>
                                <strong>Bem-vindo #username</strong><br />
                                <span>ao curso de <span className="destaque">Lean Software Development</span></span>
                            </p>
                        </div>
                    </div>

                    <div id="continue">
                        <img src={Computador} alt="Computador" />
                        <button id="continue-button"
                                onClick={handleContinue} >Continue de onde parou</button>
                        <div className="progresso-container">
                            <h2>Progresso:</h2>
                            <div id="progress-bar">
                                <div id="progress" style={progress}><h5>{Math.round(porcentagem)}%</h5></div>
                            </div>
                        </div>
                    </div>

                    <div id="modules">
                        
                        { modulos.map((modulo, index) => (
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
                                {modulo.numero === '01' && (
                                    <>
                                        <Conteudo numero="1"/>
                                    </>
                                )}
                                {modulo.numero === '02' && (
                                        <Conteudo numero="2"/>
                                )}
                                {modulo.numero === '03' && (
                                    <Conteudo numero="3"/>
                                )}
                                {modulo.numero === '04' && (
                                    <Conteudo numero="4"/>
                                )}
                                {modulo.numero === '05' && (
                                    <Conteudo numero="5"/>
                                )}
                                {modulo.numero === '06' && (
                                    <Conteudo numero="6"/>
                                )}
                                {modulo.numero === '07' && (
                                    <Conteudo numero="7"/>
                                )}
                                {modulo.numero === '08' && (
                                    <Conteudo numero="8"/>
                                )}
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
