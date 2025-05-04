import React from 'react'; 
import '../css/Modulo.css'; // Importando o CSS do componente'
import imgConfimed from '../assets/confirmation.png'
import imgUnlock from '../assets/open-padlock.png'
import imgLock from '../assets/padlock.png'

const Modulo = (props) => {

    let image;

    switch (props.status) {
        case 'confirmed':
            image = imgConfimed;
            break;
        case 'pending':
            image = imgUnlock;
            break;
        case 'lock':
            image = imgLock;
            break;
        default:
            image = imgLock;

    }

    return (
        <div id="main-modulo">
            <h1 id="title">Modulo {props.numero}</h1>

            <div id="inside">
                <img src={ image}></img>
                <p>{ props.titulo }</p>

            </div>
        </div>

        
    );
};

export default Modulo;