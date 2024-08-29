import './menu.css';
import fast_logo from '../../assets/fast_route_logo.png';
import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import { CircleUser } from 'lucide-react';
import { Home } from 'lucide-react';
import { Route } from 'lucide-react';
import { Bus } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

interface MenuProps {
    onNumeroChange: (value: number) => void;
    userId: number | null;
    userName: string | null;
    onLogout: () => void;
}

export function Menu({ onNumeroChange, userId, userName, onLogout }: MenuProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const [buscaVisivel, setBuscaVisivel] = useState(false);
    const [onibusVisivel, setOnibusVisivel] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleBusca = () => {
        setBuscaVisivel(!buscaVisivel);
        setOnibusVisivel(false);
        onNumeroChange(1);
    };

    const toggleHome = () => {
        setBuscaVisivel(false);
        setOnibusVisivel(false);
        onNumeroChange(0);
    };

    const toggleOnibus = () => {
        setOnibusVisivel(!onibusVisivel);
        setBuscaVisivel(false);
        onNumeroChange(2);
    };

    const toggleVisualizar = () => {
        onNumeroChange(2);
    };

    const toggleAddOnibus = () => {
        onNumeroChange(4);
    };

    const togglePerfil = () => {
        onNumeroChange(3);
    };

    const toggleSair = () => {
        const confirmLogout = window.confirm('Você realmente deseja sair?'); // Exibe a caixa de diálogo de confirmação
        if (confirmLogout) {
            onLogout();
        }
    };

    return (
        <nav className='container-menu'>
            <div className={menuOpen ? 'menu-vertical open' : 'menu-vertical'}>
                <div className='Container-content-vertical'>
                    <div className='user'>
                        <CircleUser className='circleUserIcon' />
                        <h3>{userName || 'Nome'}</h3> {/* Exibe o nome do usuário */}
                    </div>

                    <div className='linha'><br /></div>
                    <div className='opt' onClick={toggleHome}>
                        <div className='alinhar'>
                            <Home />
                            <li className='text-perfil'>Home</li>
                        </div>
                    </div>
                    {/*========================BOTÃO ROTAS COM O DROPDONW========================== */}
                    <div className='opt-rotas' onClick={toggleBusca}>
                        <div className='alinhar'>
                            <Route />
                            <li className='text-perfil'>Rotas</li>
                        </div>
                        <ChevronRight className={buscaVisivel ? 'chevron-rotas-open' : 'chevron-rotas-closed'} />
                    </div>
                    <div className={buscaVisivel ? 'opt-buscar-open' : 'opt-buscar'}>
                        <div className='alinhar-buscar-open'>
                            <li className='text-perfil'>Buscar</li>
                        </div>
                    </div>
                    {/* ===================================================== */}

                    {/*========================BOTÃO ONIBUS COM O DROPDONW========================== */}
                    <div className='opt' onClick={toggleOnibus}>
                        <div className='alinhar'>
                            <Bus />
                            <li className='text-perfil'>Ônibus</li>
                        </div>
                        <ChevronRight className={onibusVisivel ? 'chevron-rotas-open' : 'chevron-rotas-closed'} />
                    </div>
                    <div className={onibusVisivel ? 'opt-visualizar-open' : 'opt-visualizar'} onClick={toggleVisualizar}>
                        <div className='alinhar-visualizar-open'>
                            <li className='text-perfil'>Visualizar</li>
                        </div>
                    </div>
                    <div className={onibusVisivel ? 'opt-visualizar-open' : 'opt-visualizar'} onClick={toggleAddOnibus}>
                        <div className='alinhar-visualizar-open'>
                            <li className='text-perfil'>Adicionar</li>
                        </div>
                    </div>
                    {/* =================================================================== */}
                    <div className='linha'><br /></div>
                    <div className='opt' onClick={togglePerfil}>
                        <div className='alinhar'>
                            <li className='text-perfil'>Editar Perfil</li>
                        </div>
                    </div>
                    {/* =================================================================== */}
                    <div className='linha'><br /></div>
                    <div className='opt' onClick={toggleSair}>
                        <div className='alinhar'>
                            <li className='text-sair'>Sair</li>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-header'>
                <AlignJustify onClick={toggleMenu} className='menu-icon' />
                <div className='contato'>
                    <h2 className='h2-contato'>Contato</h2>
                    <img className='fast' src={fast_logo} onClick={toggleHome}/>
                </div>
            </div>
        </nav>
    );
}
