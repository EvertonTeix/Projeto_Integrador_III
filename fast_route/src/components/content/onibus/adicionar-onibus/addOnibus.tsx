
import './addOnibus.css'
import { CirclePlus } from 'lucide-react'
export function AddOnibus() {
    return (
        <div className='nav-addOnibus'>
            <div className='container-addOnibus'>
                <div className='title-addOnibus'>
                    <CirclePlus />
                    <h2>Adicionar Ônibus</h2>
                </div>
                <div className='form-addOnibus'>
                    <label htmlFor="">Insira o Campus: </label>
                    <input type="text" className='input-addOnibus' />
                    <label htmlFor="">Numeração do ônibus: </label>
                    <input type="text" className='input-addOnibus' />
                    <label htmlFor="">Num da placa: </label>
                    <input type="text" className='input-addOnibus' />
                </div>
                <div className='container-button-addOnibus'>
                    <div className='but-addOnibus'>
                        <li className='text-editar-addOnibus'>Adicionar</li>
                    </div>
                </div>
            </div>
        </div>
    )
}