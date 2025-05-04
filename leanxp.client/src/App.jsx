import './css/App.css';
import Sidebar from './components/Sidebar';
import Modulo from './components/Modulo';
import Computador from './assets/computador.png'
import UserProfile from './assets/userProfile.png'
import Diamond from './assets/Logo.png'

function App() {

    let porcentagem = 30;
    let progress = { width: `${porcentagem}%` };
    return (
        <><Sidebar />
            <div id="container">
                <div id="main">
                <div id="Header">
                    <h1>Bem-vindo #UserName<br></br></h1>
                    <h2>ao curso de Lean Software Devlopment</h2>

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
                        
                            <div id="progress" style={ progress } ></div> 
                        </div>
                        <div id="achievements">

                            <h4>{ porcentagem}%</h4>
                            <img src={Diamond}></img>
                            <img src={Diamond}></img>
                        </div>
                        
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default App;