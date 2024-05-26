import React, { useState } from 'react';
import './styles/MenuLogin.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-comp">
      <button className="menu-button" onClick={toggleMenu}>Menu</button>
      {isOpen && (
        <div className="menu-options">
          <ul>
            <li><a href="/about">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><button className="cadastre-se-button" onClick={() => window.location.href = '/cadastro'}>Cadastro</button></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
