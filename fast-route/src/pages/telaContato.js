import logo from "./img/fastRoute.png";
import "../styles/TelaContato.css";
import larissa from "./img/membros/larissa.png";
import everton from "./img/membros/everton.jpg";
import eric from "./img/membros/eric.jpg";
import lemuel from "./img/membros/lemuel.png";
import wagner from "./img/membros/wagner.png";

function TelaAbout() {
  return (
    <div>
      <header className="header-Contato">
        <div className="left-section">
          <img src={logo} alt="Fast Route" className="logo" />
        </div>
        <div className="right-section-A">
          <a href="/about">Sobre</a>
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

        <div class="background">
            <div class="conteudo">
                <h1>Conheça a equipe por trás da Fast Route</h1>
                <p>
                    Estamos orgulhosos de apresentar os desenvolvedores talentosos que
                    criaram a Fast Route, a solução inovadora para otimizar a
                    distribuição de veículos da UFC. Com uma combinação de expertise
                    técnica e paixão pela eficiência, nossa equipe transformou a maneira
                    de gerenciar rotas de entrega. Continue lendo para saber mais sobre
                    os membros dedicados que tornam tudo isso possível.
                </p>
            </div>
        </div>

        <div class="membros">
            <div class="individual">
                <img src={larissa} alt="Larissa" />
                <h3>Ana Larissa Teixeira Dantas</h3>
                <p>5º período de Ciência da Computação - UFC</p>
            </div>
            <div class="individual">
                <img src={everton} alt="Everton" />
                <h3>Antonio Everton Coelho Teixeira</h3>
                <p>5º período de Ciência da Computação - UFC</p>
            </div>
            <div class="individual">
            <img src={eric} alt="Eric" />
            <h3>Eric de Araújo Albuquerque</h3>
            <p>7º período de Ciência da Computação - UFC</p>
            </div>
            <div class="individual">
            <img src={lemuel} alt="Lemuel" />
            <h3>Lemuel Santana de Morais</h3>
            <p>5º período de Ciência da Computação - UFC</p>
            </div>
            <div class="individual">
            <img src={wagner} alt="Wagner" />
            <h3>Wagner Vasconcelos Dias</h3>
            <p>5º período de Ciência da Computação - UFC</p>
            </div>
        </div>
        </div>
);
}

export default TelaAbout;
