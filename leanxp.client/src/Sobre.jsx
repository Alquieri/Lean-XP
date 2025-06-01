import Sidebar from './components/Sidebar';
import Container from './components/container';

function Sobre() {
    return (
        <>
            <Sidebar />
            <Container>
                <div className="sobre">
                    <h1>Lean-XP</h1>
                    <h2>📌 Descrição</h2>
                    <p>
                        Lean-XP é um projeto desenvolvido com foco em treinamento empresarial de novos funcionários, especialmente para introduzi-los de forma prática e eficiente à cultura ágil de desenvolvimento. A aplicação é baseada na metodologia Lean Software Development, priorizando rapidez, eficiência, colaboração e entrega contínua de valor.
                    </p>
                    <p>
                        O objetivo é fornecer uma plataforma leve, didática e funcional para que novos colaboradores aprendam os princípios do desenvolvimento ágil e possam praticar boas práticas de trabalho em equipe, versionamento e entrega contínua.
                    </p>
                    <h2>🚀 Tecnologias Utilizadas</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>HTML/CSS/JavaScript</li>
                    </ul>
                    <h2>📚 Objetivos de Aprendizado</h2>
                    <ul>
                        <li>Introdução prática ao Lean Software Development</li>
                        <li>Estímulo ao trabalho colaborativo e feedback contínuo</li>
                        <li>Uso de ferramentas modernas de versionamento e desenvolvimento web</li>
                        <li>Familiarização com o ciclo de desenvolvimento rápido e iterativo</li>
                    </ul>
                    <h2>🧑‍💼 Público-Alvo</h2>
                    <p>
                        Este projeto é voltado para novos colaboradores em empresas de tecnologia, especialmente aqueles em processo de integração ou capacitação interna. Pode ser usado em workshops, dinâmicas de onboarding ou treinamentos técnicos.
                    </p>
                </div>
                <style>{`
                    .sobre {
                        background: #fff;
                        padding: 2rem 2.5rem;
                        border-radius: 12px;
                        box-shadow: 0 2px 12px rgba(0,0,0,0.07);
                        max-width: 800px;
                        margin:  auto;
                        font-family: 'Segoe UI', Arial, sans-serif;
                        color: #222;
                    }
                    .sobre h1 {
                        font-size: 2.2rem;
                        margin-bottom: 0.5rem;
                        color: #2d6cdf;
                    }
                    .sobre h2 {
                        font-size: 1.3rem;
                        margin-top: 1.5rem;
                        color: #1a3a6b;
                    }
                    .sobre ul {
                        margin-left: 1.5rem;
                        margin-bottom: 1rem;
                    }
                    .sobre li {
                        margin-bottom: 0.3rem;
                    }
                    .sobre p {
                        margin-bottom: 1rem;
                        line-height: 1.6;
                    }
                `}</style>
            </Container>
        </>
    );
}

export default Sobre;
