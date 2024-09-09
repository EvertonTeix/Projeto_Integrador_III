import './menu.css';
import fast_logo from '../../assets/fast_route_logo.png';
import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import { CircleUser } from 'lucide-react';
import { Home } from 'lucide-react';
import { Route } from 'lucide-react';
import { Bus } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Map } from 'lucide-react';

interface MenuProps {
    onNumeroChange: (value: number) => void;
    userId: number | null;
    userName: string | null;
    onLogout: () => void;
}

export function Menu({ onNumeroChange, userId, userName, onLogout }: MenuProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [abreBusca, setAbreBusca] = useState(false);
    const [buscaVisivel, setBuscaVisivel] = useState(false);
    const [onibusVisivel, setOnibusVisivel] = useState(false);
    const [mapaVisivel, setMapaVisivel] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const abrirBusca = () => {
        setAbreBusca(!abreBusca);
    };


    const toggleBusca = () => {
        setBuscaVisivel(!buscaVisivel);
        onNumeroChange(1);
    };

    const toggleHome = () => {  
        onNumeroChange(0);
    };

    const toggleOnibus = () => {
        setOnibusVisivel(!onibusVisivel);

    };

    const toggleVisualizar = () => {
        onNumeroChange(2);
    };

    const togglePerfil = () => {
        onNumeroChange(3);
    };
    const toggleAddOnibus = () => {
        onNumeroChange(4);
    };

    const toggleVisualizarPontos = () => {
        onNumeroChange(5); // Defina o valor apropriado para visualizar pontos
    };

    const toggleAdicionarPontos = () => {
        onNumeroChange(6); // Defina o valor apropriado para adicionar pontos
    };

    const toggleContato = () => {  
        onNumeroChange(7);
    };


    const toggleSair = () => {
        const confirmLogout = window.confirm('Você realmente deseja sair?'); // Exibe a caixa de diálogo de confirmação
        if (confirmLogout) {
            onLogout();
        }
    };

    const toggleMapaDropdown = () => {
        setMapaVisivel(!mapaVisivel);
        // Defina outro estado se necessário para fechar outros dropdowns
        // setBuscaVisivel(false);
        // setOnibusVisivel(false);
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

                    {/*========================BOTÃO ROTAS COM O DROPDOWN========================== */}
                    <div className='opt' onClick={abrirBusca} >
                        <div className='alinhar'>
                            <Route />
                            <li className='text-perfil'>Rotas</li>
                        </div>
                        <ChevronRight className={abreBusca ? 'chevron-rotas-open' : 'chevron-rotas-closed'} />
                    </div>
                    <div onClick={toggleBusca} className={abreBusca ? 'opt-buscar-open' : 'opt-buscar'}>
                        <div className='alinhar-buscar-open'>
                            <li className='text-perfil'>Buscar</li>
                        </div>
                    </div>
                    {/* ===================================================== */}

                    {/*========================BOTÃO ONIBUS COM O DROPDOWN========================== */}
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

                    {/*========================BOTÃO MAPA COM O DROPDOWN========================== */}
                    <div className='opt' onClick={toggleMapaDropdown}>
                        <div className='alinhar'>
                            <Map />
                            <li className='text-perfil'>Mapa</li>
                        </div>
                        <ChevronRight className={mapaVisivel ? 'chevron-rotas-open' : 'chevron-rotas-closed'} />
                    </div>
                    <div className={mapaVisivel ? 'opt-visualizar-open' : 'opt-visualizar'} onClick={toggleVisualizarPontos}>
                        <div className='alinhar-visualizar-open'>
                            <li className='text-perfil'>Visualizar Pontos</li>
                        </div>
                    </div>
                    <div className={mapaVisivel ? 'opt-visualizar-open' : 'opt-visualizar'} onClick={toggleAdicionarPontos}>
                        <div className='alinhar-visualizar-open' >
                            <li className='text-perfil'>Adicionar Pontos</li>
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
                    <h2 className='h2-contato' onClick={toggleContato}>Contato</h2>
                    <img className='fast' src={fast_logo} onClick={toggleHome} />
                </div>
            </div>
        </nav>
    );
}
