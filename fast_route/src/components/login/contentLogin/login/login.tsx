import './login.css';
import mapaLogin from '../../../../assets/mapaLogin.png';
import user from '../../../../assets/user.png';
import pass from '../../../../assets/password.png';
import { useState } from 'react';

export function Login({ onLoginSuccess }: { onLoginSuccess: (userId: number, userName: string) => void }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5164/api/Usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });

            if (response.ok) {
                const data = await response.json();
                onLoginSuccess(data.usuarioId, data.nomeUsuario);  // Passa o ID do usuário para o componente pai
            } else {
                console.error('Login falhou');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <div className='retangulo'>
            <div className="img-container">
                <img src={mapaLogin} alt="mapa ilustrativo" className="mapa-styled" />
            </div>
            <div className='login'>
                <h2 className='BV'>Bem-vindo de volta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <img src={user} alt="Ícone de usuário" className="icon" />
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className='caixa' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <img src={pass} alt="Ícone de senha" className="icon" />
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            className='caixa' 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='entrar'>Entrar</button>
                </form>
            </div>
        </div>
    );
}
