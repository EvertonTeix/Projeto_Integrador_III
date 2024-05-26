import React, { useState } from 'react';
import '../styles/TelaLogin.css';
import logo from './img/fastRoute.png';
import mapaLogin from './img/mapaLogin.png';
import user from './img/user.png';
import pass from './img/password.png';
import Menu from '../menus/MenuLogin.js';


function TelaLogin() {

  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
    console.log("Estado do menu:", active ? "Aberto" : "Fechado");
  }

  return (

    <div>
      <header className="header">
        <div className="left-section">
          <img src={logo} alt="Fast Route" className="logo" />
        </div>

        <div className='menu'>
          <Menu active={active} ToggleMode={ToggleMode} />
        </div>

        <div className="right-section">
          <a href="/about">Sobre</a>
          <a href="/contato">Contato</a>
          <button className="cadastre-se-button" onClick={() => window.location.href = '/cadastro'}>Cadastre-se</button>
        </div>
        
      </header>
      <div className="retangulo"></div>
      <div className="img-container">
        <img src={mapaLogin} alt="mapa ilustrativo" className="mapa-styled" />
      </div>

      <div className='login'>
        <h2>Bem-vindo de volta</h2>
        <div className="input-container">
          <img src={user} alt="Ícone de usuário" className="icon" />
          <input type="text" placeholder="Email" className='caixa' />
        </div>
        <div className="input-container">
          <img src={pass} alt="Ícone de senha" className="icon" />
          <input type="password" placeholder="Senha" className='caixa'/>
        </div>
        <button className='entrar'>Entrar</button>
      </div>
    </div>
  );
}

export default TelaLogin;
