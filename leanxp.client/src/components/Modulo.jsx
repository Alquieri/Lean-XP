import React, { useState } from 'react';
import '../css/Modulo.css';
import Modal from './Modal';
import imgConfimed from '../assets/confirmation.png';
import imgUnlock from '../assets/open-padlock.png';
import imgLock from '../assets/padlock.png';
import Quiz from './Quiz';

const Modulo = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('conteudo');

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

    const handleClick = () => {
        if (props.status !== 'lock') {
            setModalContent('conteudo');
            setIsModalOpen(true);
        }
    };

    const handleQuizComplete = () => {
        if (props.onComplete) {
            props.onComplete(props.numero);
        }
    };

    const renderModalContent = () => {
        switch (modalContent) {
            case 'conteudo':
                return (
                    <div>
                        <h3>Conteúdo</h3>
                        {props.children}
                    </div>
                );
            case 'video':
                return (
                    <div>
                        <h3>Vídeo</h3>
                        <iframe
                            width="100%"
                            height="315"
                            src={props.video}
                            title="Vídeo explicativo"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                );
            case 'questionario':
                return (
                    <Quiz bloco={props.numero} onQuizComplete={handleQuizComplete} />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div id="main-modulo" onClick={handleClick}>
                <h2 id="title">Módulo {props.numero}</h2>
                <div id="inside">
                    <div><img src={image} alt="Status do módulo" /></div>
                    <div id="text"><p>{props.titulo}</p></div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Módulo {props.numero}</h2>
                <p>{props.titulo}</p>

                <div className="modulo-buttons">
                    <button onClick={() => setModalContent('conteudo')}>Conteúdo</button>
                    <button onClick={() => setModalContent('video')}>Vídeo</button>
                    <button onClick={() => setModalContent('questionario')}>Questionário</button>
                </div>

                <div className="modal-dynamic-content">
                    {renderModalContent()}
                </div>
            </Modal>
        </>
    );
};

export default Modulo;
