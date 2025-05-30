function Modulo1() {
    return (
        <div className="conteudo">
            <p><strong>O que é Lean:</strong> origem no <em>Lean Manufacturing</em> da Toyota.</p>
            <p><strong>Transição para o contexto de software:</strong> como os princípios foram adaptados.</p>
            <p><strong>Objetivos:</strong> foco em eficiência, redução de desperdício e melhoria contínua.</p>
            <p><strong>Benefícios esperados:</strong> mais qualidade, menos retrabalho e maior produtividade.</p>
            <p><strong>Comparativo:</strong> diferenças entre o Lean, metodologias tradicionais e ágeis.</p>
        </div>
    );
}

function Conteudo({ numero }) {
    console.log(numero);

    switch (numero) {
        case "1":
            return <Modulo1 />;
        default:
            return null;
    }
}

export default Conteudo;