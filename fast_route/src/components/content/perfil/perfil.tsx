
import { UserCog } from 'lucide-react';
import './perfil.css'

export function Perfil() {
    return (
        <div className='nav-perfil'>
            <div className='container-perfil'>
                <div className='title-perfil'>
                    <UserCog />
                    <h2>Editar Perfil</h2>
                </div>
                <div className='container-img-perfil'>
                    <div className='img-perfil'></div>
                    <h2 className='text-img-perfil'>Editar foto</h2>
                </div>
                <div className='form-perfil'>
                    <label htmlFor="">Nome: </label>
                    <input type="text" className='input-perfil' />
                    <label htmlFor="">Email: </label>
                    <input type="text" className='input-perfil' />
                </div>
                <div className='container-button-editar-perfil'>
                    <div className='but-perfil'>
                        <li className='text-editar-perfil'>Salvar</li>
                    </div>
                </div>
            </div>
        </div>
    )
}