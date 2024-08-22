import { useState, useEffect } from 'react';
import './App.css';
import ContentLogin from './components/login/contentLogin/contentLogin';
import { MenuLogin } from './components/login/menuLogin/menuLogin';
import { Menu } from './components/header/menu';
import Content from './components/content/content';

function App() {
  const [valor, setValor] = useState(2); // Valor inicial para a tela de login
  const [valor2, setValor2] = useState(2); // Valor inicial para o conteúdo
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticação
  const [userId, setUserId] = useState<number | null>(null); // Estado para armazenar o ID do usuário

  useEffect(() => {
    if (isLoggedIn) {
      // Atualiza valor2 quando o usuário faz login
      setValor2(0);
    }
  }, [isLoggedIn]);

  const handleNumChange = (value: number) => {
      setValor2(value);
  };

  const handleLoginSuccess = (userIdFromLogin: number) => {
    console.log('Login successful');
    setIsLoggedIn(true); // Marca como logado
    setValor(0); // Redireciona para a página Home após login
    setUserId(userIdFromLogin); // Armazena o ID do usuário
  };

  return (
    <div className='container_app'>
      {valor === 2 ? (
        <>
          <MenuLogin onNumeroChange={handleNumChange} />
          <ContentLogin num={valor2} onLoginSuccess={handleLoginSuccess} />
        </>
      ) : (
        <>
          <Menu onNumeroChange={handleNumChange} userId={userId} />
          <Content escolha={valor2} userId={userId} />
        </>
      )}
    </div>
  );
}

export default App;
