import './css/App.css';
import Sidebar from './components/Sidebar';
import Modulo from './components/Modulo';

function App() {
    return (
        <><Sidebar />
            <div id="teste">
                <div id="Header">
                    <h1>Bem-vindo #UserName<br></br>
                        ao curso de <br></br>
                        Lean Software Devlopment
                    </h1>
                </div>

                <div id="bar">
                
                </div>  
                <div id="modules">
                    <Modulo numero="01" titulo="Introducao ao Lean" status="confirmed" />
                    <Modulo numero="02" titulo="Eliminacao de Desperdicios" status="pending"/>
                    <Modulo numero="03" titulo="Melhoria Continua" status="lock"/>
                </div>

                    
                             



            </div>
            
        </>
    );
}

export default App;