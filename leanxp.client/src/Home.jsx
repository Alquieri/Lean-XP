import React from 'react';
import './css/Home.css';
import Sidebar from './components/Sidebar';
import Modulo from './components/Modulo';
import Computador from './assets/computador.png'
import UserProfile from './assets/userProfile.png'
import ach from './assets/achievements.png'



function Home() {

    let porcentagem = 50;
    let progress = { width: `${porcentagem}%` };
    return (

        <><Sidebar />
            <div id="container">
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
                    <h1>Continue de onde parou </h1> </div>
                <div id="modules">
                    <Modulo numero="01" titulo="Introducao ao Lean" status="confirmed" />
                    <Modulo numero="02" titulo="Eliminacao de Desperdicios" status="pending" />
                    <Modulo numero="03" titulo="Melhoria Continua" status="lock" />
                    <Modulo numero="04" titulo="Melhoria Continua" status="lock" />
                    <Modulo numero="05" titulo="Melhoria Continua" status="lock" />
                    <Modulo numero="06" titulo="Melhoria Continua" status="lock" />
                    <Modulo numero="07" titulo="Melhoria Continua" status="lock" />
                    <Modulo numero="08" titulo="Melhoria Continua" status="lock" />
                    <Modulo numero="09" titulo="Melhoria Continua" status="lock" />
                </div>


                </div>
                <div id="sidebarInf">
                    <div id="containerProgress">
                        
                        <div id="userProgress">

                            <img src={ UserProfile} href="userPHoto"></img>
                            <h2 id="userName"> Gustavo Sacoman</h2>
                        </div>

                        <h2 id="progress-bar-title">Progresso do Curso</h2>
                        <div id="progress-bar">
                        
                            <div id="progress" style={ progress } ><h5>{ porcentagem}%</h5></div> 
                        </div>
                        <div id="achievements">

                            
                            <img src={ach}></img>
                            <img src={ach}></img>
                        </div>
                        
                    </div>
                </div>
            </div>

            
        </>

    );
}

export default Home;