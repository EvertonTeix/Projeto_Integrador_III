
import { Search } from 'lucide-react'
import { Signpost } from 'lucide-react'
import './rotas.css'

export function Rotas() {
    return (
        <div className='nav-rotas'>
            <div className='container-rotas'>
                <div className='title-rotas'>
                    <Signpost/>
                    <h2>Buscar Rotas</h2>
                </div>
                <div className='form-rotas'>
                    <label htmlFor="">De onde você deseja partir?</label>
                    <input type="text" className='input-rotas' />
                    <label htmlFor="">Para onde você deseja ir?</label>
                    <input type="text" className='input-rotas' />
                </div>
                <div className='container-button-buscar'>
                    <div className='but'>
                        <Search />
                        <li className='text-buscar'>Buscar</li>
                    </div>
                </div>
            </div>
        </div>
    )
}