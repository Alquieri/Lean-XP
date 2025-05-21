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

        <><Sidebar />
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
                    <img src={Computador} href="Computador"></img>
                    <h1>Continue de onde parou </h1> 
                    <div className="progresso-container">
                        <h2>Progresso:</h2>
                        <div id="progress-bar">
                        <div id="progress" style={progress}><h5>{porcentagem}%</h5></div>
                        </div>
                    </div>
                </div>

                    
                    <div id="modules">
                    <Modulo numero="01" titulo="Introdução ao Lean" status="confirmed">

                        <p><strong>O que é Lean:</strong> origem no <em>Lean Manufacturing</em> da Toyota.</p>
                        <p><strong>Transição para o contexto de software:</strong> como os princípios foram adaptados.</p>
                        <p><strong>Objetivos:</strong> foco em eficiência, redução de desperdício e melhoria contínua.</p>
                        <p><strong>Benefícios esperados:</strong> mais qualidade, menos retrabalho e maior produtividade.</p>
                        <p><strong>Comparativo:</strong> diferenças entre o Lean, metodologias tradicionais e ágeis.</p>

                        <a href="https://www.youtube.com/watch?v=ttxsCvdXnu4" target="_blank" rel="noopener noreferrer">
                            🎥 Vídeo explicativo 1 - Lean Manufacturing e Software
                        </a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=0YxdFq2EujM" target="_blank" rel="noopener noreferrer">
                            🎥 Vídeo explicativo 2 - Princípios do Lean
                        </a>
                            <br />

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
{/*                 
                <div id="sidebarInf">
                    <div id="containerProgress">
                        
                        <div id="userProgress">

                            <img src={ UserProfile} href="userPHoto"></img>
                            <h2 id="userName"> Gustavo Sacoman</h2>
                        </div>

                        <h2 id="progress-bar-title">Progresso do Curso</h2>
                        
                        
                             
                        </div>
                        <div id="achievements">

                            
                            <img src={ach}></img>
                            <img src={ach}></img>
                        </div>
                        
                    </div>
                </div>
            */}
        </>

    );
}

export default Home;