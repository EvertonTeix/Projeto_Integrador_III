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
  const [userName, setUserName] = useState<string | null>(null); // Estado para armazenar o nome do usuário

  useEffect(() => {
    if (isLoggedIn) {
      // Atualiza valor2 quando o usuário faz login, vai para a home
      setValor2(0);
    } else {
      // volta para o login
      setValor2(2);
    }
  }, [isLoggedIn]);

  const handleNumChange = (value: number) => {
    setValor2(value);
  };

  const handleNomeAtualizado = (novoNome: string) => {
    setUserName(novoNome); // Atualiza o nome do usuário no estado
  };

  const handleLoginSuccess = (userIdFromLogin: number, nomeUsuario: string) => {
    console.log('Login successful');
    setIsLoggedIn(true); // Marca como logado
    setValor(0); // muda o menu para o contentLogin
    setUserId(userIdFromLogin); // Armazena o ID do usuário
    setUserName(nomeUsuario); // Armazena o nome do usuário
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Marca como não logado
    setValor(2); // muda o menu para o content
    setUserId(null); // Limpa o ID do usuário
    setUserName(null); // Limpa o nome do usuário
  };

  return (
    <div className="container_app">
      {valor === 2 ? (
        <>
          <MenuLogin onNumeroChange={handleNumChange} />
          <ContentLogin num={valor2} onLoginSuccess={handleLoginSuccess} />
        </>
      ) : (
        <>
          <div>
            <Menu onNumeroChange={handleNumChange} userId={userId} userName={userName} onLogout={handleLogout} />
          </div>
          <div>
            <Content escolha={valor2} userId={userId} onNomeAtualizado={handleNomeAtualizado} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
