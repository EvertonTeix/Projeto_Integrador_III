import './home.css'
import HomeImg from '../../../assets/homeIMG.png'

export function Home() {
    return (
        <div className="desig-home">
            <div className="texto-body">
                <h1 className="h1-text">Otimize suas Rotas de Distribuição com Eficiência</h1>
                <p className="p-text">Desbloqueie o poder da otimização de rotas para a UFC.<br />
                    Economize tempo, dinheiro e esforço com nosso software intuitivo.</p>
            </div>
            <div className="div-desenho">
                <img className="desenho" src={HomeImg} alt="" />
            </div>
        </div>
    )
}