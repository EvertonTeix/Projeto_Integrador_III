import './menuLogin.css';
import fast_logo from '../../../assets/fast_route_logo.png';

interface MenuProps {
    onNumeroChange: (value: number) => void;
}

export function MenuLogin({ onNumeroChange }: MenuProps) {

    const toggleSobre = () => {
        onNumeroChange(0);
    };

    const toggleContato = () => {
        onNumeroChange(1);
    };

    const toggleLogin = () => {
        onNumeroChange(2);
    };

    const toggleRegistro = () => {
        onNumeroChange(3);
    };

    return (
        <div className="menu-comp">
            <img className='fast' src={fast_logo} />
            <div className='contato'>
                <h2 className='h2-contato' onClick={toggleSobre}>Sobre</h2>
                <h2 className='h2-contato' onClick={toggleContato}>Contato</h2>
                <div className='b-entrar' onClick={toggleLogin}><h2 className='h2-contato'>Entrar</h2></div>
                <div className='b-cadastrar' onClick={toggleRegistro}><h2 className='h2-contato'>Cadastre-se</h2></div>
            </div>
        </div>
    );
}
