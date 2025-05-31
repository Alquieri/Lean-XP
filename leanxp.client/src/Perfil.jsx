import React, { useState } from 'react';
import './css/Perfil.css';
import Sidebar from './components/Sidebar';
import Modulo from './components/Modulo';
import Computador from './assets/computador.png';
import Container from './components/container';

function Perfil() {
    const [user] = useState({
        nome: "João Silva",
        email: "joao.silva@email.com",
        cargo: "Desenvolvedor Frontend",
        avatar: Computador
    });

    const [achievements] = useState([
        { 
            id: 1, 
            titulo: "Primeiro Login", 
            descricao: "Você acessou o sistema pela primeira vez!",
            icone: "https://img.icons8.com/fluency/48/000000/login-rounded-right.png"
        },
        { 
            id: 2, 
            titulo: "Curso Concluído", 
            descricao: "Parabéns por concluir seu primeiro curso!",
            icone: "https://img.icons8.com/fluency/48/000000/graduation-cap.png"
        },
        { 
            id: 3, 
            titulo: "Desafio Resolvido", 
            descricao: "Você resolveu um desafio com sucesso!",
            icone: "https://img.icons8.com/fluency/48/000000/checked-checkbox.png"
        }
    ]);

    return (
        <>
            <Sidebar />
            <Container>
                <section className="perfil-container">
                   
                    <div className="perfil-info">
                        <img src={user.avatar} alt="Avatar" className="perfil-avatar" />
                        <div className="perfil-dados">
                            <p className='perfil-nome'><strong>Nome:</strong> {user.nome}</p>
                            <p className='perfil-email'><strong>Email:</strong> {user.email}</p>
                            <p className='perfil-info'><strong>Cargo:</strong> {user.cargo}</p>
                        </div>
                    </div>
                    <div className="perfil-achievements-silver">
                        <h2 className="perfil-achievements-title">Conquistas</h2>
                        <ul className="perfil-achievements-list">
                            {achievements.map(a => (
                                <li key={a.id} className="perfil-achievement-item">
                                    <img src={a.icone} alt={a.titulo} className="perfil-achievement-icon" />
                                    <div>
                                        <strong>{a.titulo}:</strong> {a.descricao}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </Container>
        </>
    );
}

export default Perfil;