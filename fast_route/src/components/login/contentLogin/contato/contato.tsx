
import './contato.css'
import eric from '../../../../assets/eric.jpg'
import larissa from '../../../../assets/larissa.png'
import wagner from '../../../../assets/wagner.png'
import everton from '../../../../assets/everton.jpg'
import lemuel from '../../../../assets/lemuel.png'


export function Contato() {
    return (
        <div className='desig-contato'>
            <div className="background">
                <div className="conteudo">
                    <h1>Conheça a equipe por trás da Fast Route</h1>
                    <p>
                        Estamos orgulhosos de apresentar os desenvolvedores talentosos que
                        criaram a Fast Route, a solução inovadora para otimizar a
                        distribuição de veículos da UFC. Com uma combinação de expertise
                        técnica e paixão pela eficiência, nossa equipe transformou a maneira
                        de gerenciar rotas de entrega. Continue lendo para saber mais sobre
                        os membros dedicados que tornam tudo isso possível.
                    </p>
                </div>
            </div>

            <div className="membros">
                <div className="individual">
                    <img src={larissa} alt="Larissa" />
                    <h3>Ana Larissa Teixeira Dantas</h3>
                    <p>5º período de Ciência da Computação - UFC</p>
                </div>
                <div className="individual">
                    <img src={everton} alt="Everton" />
                    <h3>Antonio Everton Coelho Teixeira</h3>
                    <p>5º período de Ciência da Computação - UFC</p>
                </div>
                <div className="individual">
                    <img src={eric} alt="Eric" />
                    <h3>Eric de Araújo Albuquerque</h3>
                    <p>7º período de Ciência da Computação - UFC</p>
                </div>
                <div className="individual">
                    <img src={lemuel} alt="Lemuel" />
                    <h3>Lemuel Santana de Morais</h3>
                    <p>5º período de Ciência da Computação - UFC</p>
                </div>
                <div className="individual">
                    <img src={wagner} alt="Wagner" />
                    <h3>Wagner Vasconcelos Dias</h3>
                    <p>5º período de Ciência da Computação - UFC</p>
                </div>
            </div>
        </div>
    )
}