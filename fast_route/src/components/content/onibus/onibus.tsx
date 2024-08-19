
import { BusFront } from 'lucide-react'
import { Search } from 'lucide-react'
import { ClipboardList } from 'lucide-react'
import './onibus.css'

export function Onibus() {
    return (
        <div className='nav-onibus'>
            <div className='container-onibus'>
                <div className='title-onibus'>
                    <BusFront />
                    <h2>Visualizar Ônibus</h2>
                </div>
                <div className='form-onibus'>
                    <label htmlFor="">Insira o Campus: </label>
                    <input type="text" className='input-onibus' />
                </div>
                <div className='container-button-buscar-onibus'>
                    <div className='but-onibus'>
                        <Search />
                        <li className='text-buscar-onibus'>Buscar</li>
                    </div>
                </div>

                <div className='container-result'>
                    <div className='container-result-title'>
                        <ClipboardList/>
                        <h2>Ônibus do Campus: (xxxxxx)</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}