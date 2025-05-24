import React from 'react';
import './css/Home.css';
import Sidebar from './components/Sidebar';
import Modulo from './components/Modulo';
import Computador from './assets/computador.png'
import UserProfile from './assets/userProfile.png'
import Container from './components/container';
import ach from './assets/achievements.png'

function Home() {

    let porcentagem = 20;
    let progress = { width: `${porcentagem}%` };
    return (

        <>
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
                        <h1>Continue de onde parou </h1>
                        <div className="progresso-container">
                            <h2>Progresso:</h2>
                            <div id="progress-bar">
                                <div id="progress" style={progress}><h5>{porcentagem}%</h5></div>
                            </div>
                        </div>
                    </div>



                    <div id="modules">
                        <Modulo numero="01" titulo="Introdução ao Lean" status="confirmed" video="https://www.youtube.com/embed/ttxsCvdXnu4">

                        
                            <p><strong>O que é Lean:</strong> origem no <em>Lean Manufacturing</em> da Toyota.</p>
                            <p><strong>Transição para o contexto de software:</strong> como os princípios foram adaptados.</p>
                            <p><strong>Objetivos:</strong> foco em eficiência, redução de desperdício e melhoria contínua.</p>
                            <p><strong>Benefícios esperados:</strong> mais qualidade, menos retrabalho e maior produtividade.</p>
                            <p><strong>Comparativo:</strong> diferenças entre o Lean, metodologias tradicionais e ágeis.</p>
                        </Modulo>

                        <Modulo numero="02" titulo="Eliminação de Desperdícios" status="pending">
                            <p>Este módulo vai te ensinar a identificar e eliminar desperdícios.</p>
                        </Modulo>
                        <Modulo numero="03" titulo="Melhoria Contínua" status="lock" />
                        <Modulo numero="04" titulo="Empoderamento da Equipe" status="lock" />
                        <Modulo numero="05" titulo="Foco no Cliente" status="lock" />
                        <Modulo numero="06" titulo="Cultura Lean" status="lock" />
                        <Modulo numero="07" titulo="Lean e Agile" status="lock" />
                        <Modulo numero="08" titulo="Lean em Ação" status="lock" />
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Home;