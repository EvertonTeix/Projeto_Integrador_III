import logo from "./img/fastRoute.png";
import mapaSobre from "./img/mapaSobre.png";
import "../styles/TelaAbout.css";

function TelaAbout() {
  return (
    <div>
      <header className="header">
        <div className="left-section">
          <img src={logo} alt="Fast Route" className="logo" />
        </div>
        <div className="right-section-A">
          <a href="/contato">Contato</a>
          <button
            className="botaoEntrar"
            onClick={() => (window.location.href = "/")}
          >
            Entrar
          </button>
          <button
            className="cadastre-se-button"
            onClick={() => (window.location.href = "/cadastro")}
          >
            Cadastre-se
          </button>
        </div>
      </header>

      <div className="retangulo">
        <div className="texto">
          <h2>SOBRE A FAST ROUT</h2>
          <h1>Otimizando Rotas para Distribuição Eficiente da UFC</h1>
          <p>
            Bem-vindo ao nosso software especializado em determinar as melhores
            rotas para a distribuição eficiente dos veículos da UFC. Nosso
            objetivo é otimizar o processo de entrega, permitindo que os
            usuários definam a localização relativa de cada ponto de entrega e a
            distância entre eles. Com algoritmos avançados de cálculo, nossa
            plataforma calcula a rota mais eficiente para cada veículo,
            economizando tempo, recursos e reduzindo custos operacionais.
          </p>
          <p>
            Descubra como nossa tecnologia pode transformar a maneira como você
            gerencia suas rotas de distribuição hoje!
          </p>
        </div>
        <div className="imagem">
          <img
            src={mapaSobre}
            alt="mapa ilustrativo google maps"
            className="mapaGoogle"
          />
        </div>
      </div>

      <div className="rodape">
        <div>
          <img src={logo} alt="Fast Route" className="logoB" />
        </div>
        <div>
          <h3>NAVEGUE</h3>
          <li>Empresa</li>
          <li>Contato</li>
        </div>
      </div>
    </div>
  );
}

export default TelaAbout;
