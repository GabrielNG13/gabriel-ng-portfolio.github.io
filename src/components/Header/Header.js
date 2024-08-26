import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Bem-vindo ao Meu Portfólio</h1>
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;