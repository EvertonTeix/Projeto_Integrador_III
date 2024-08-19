
import './sobre.css'
import logo from '../../../../assets/fast_route_logo.png'

export function Sobre() {
    return (
        <div className='desig-sobre'>

            <div className='container-sobre'>
                <div className='text-sobre'>
                    <h1 className='title-sobre'>Sobre a Fast Route</h1>
                    <h2 className='sub-title-sobre'>Otimizando Rotas para Distribuição Eficiente da UFC</h2>
                    <p className='p-text-sobre'>Bem-vindo ao nosso software especializado em determinar
                        as melhores rotas para a distribuição eficiente dos veículos da UFC.
                        Nosso objetivo é otimizar o processo de entrega, permitindo que os usuários
                        definam a localização relativa de cada ponto de entrega e a distância entre eles.
                        Com algoritmos avançados de cálculo, nossa plataforma calcula a rota mais eficiente para
                        cada veículo, economizando tempo, recursos e reduzindo custos operacionais.</p>
                    <p className='p-text-sobre'>Descubra como nossa tecnologia pode transformar a maneira como você gerencia suas rotas de distribuição hoje!</p>
                </div>
            </div>
            <div className='rodape-sobre'>
                <div className='elements-rodape'>
                    <img className='fast' src={logo} alt="" />
                    <div className='list-rodape'>
                        <h3 className='h3-list-rodape'>Navegue</h3>
                        <li>Empresa</li>
                        <li>Contato</li>
                    </div>
                </div>
            </div>
            <div className='linha-rodape-sobre'><br /></div>
        </div>
    )
}
