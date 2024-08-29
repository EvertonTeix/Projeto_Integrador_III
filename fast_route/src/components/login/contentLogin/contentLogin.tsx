import { Contato } from './contato/contato';
import './contentLogin.css';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Sobre } from './sobre/sobre';

function ContentLogin(props: { num: number, onLoginSuccess: (userId: number, userName: string) => void }) {
    switch (props.num) {
        case 0:
            return (
                <div className='container-login'>
                    <Sobre />
                </div>
            );
        case 1:
            return (
                <div className='container-login'>
                    <Contato />
                </div>
            );
        case 2:
            return (
                <div className='container-login'>
                    <Login onLoginSuccess={props.onLoginSuccess} />
                </div>
            );
        case 3:
            return (
                <div className='container-login'>
                    <Registro />
                </div>
            );
        default:
            return null;
    }
}

export default ContentLogin;
