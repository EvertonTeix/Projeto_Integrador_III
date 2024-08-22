
import './addOnibus.css'
import { CirclePlus } from 'lucide-react'
import { useState } from 'react';
export function AddOnibus({ userId }: { userId: number | null}) {

    const [campus, setCampus] = useState('');
    const [numVeiculo, setNumVeiculo] = useState('');
    const [placa, setPlaca] = useState('');

    const handleSubmit = async () => {
        const veiculo = {
            UsuarioId: userId,
            CidadeCampus: campus,
            NumVeiculo: numVeiculo,
            Placa: placa
        };

        try {
            const response = await fetch('http://localhost:5164/api/Veiculos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(veiculo),
            });

            console.log('Dados a serem enviados:', {
                UsuarioId: userId,
                CidadeCampus: campus,
                NumVeiculo: numVeiculo,
                Placa: placa
            });

            if (response.ok) {
                alert('Ônibus adicionado com sucesso!');
                // Limpar o formulário
                setCampus('');
                setNumVeiculo('');
                setPlaca('');
            } else {
                alert('Erro ao adicionar o ônibus.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao conectar com a API.');
        }
    };






    return (
        <div className='nav-addOnibus'>
            <div className='container-addOnibus'>
                <div className='title-addOnibus'>
                    <CirclePlus />
                    <h2>Adicionar Ônibus</h2>
                </div>
                <div className='form-addOnibus'>
                <label>Insira o Campus: </label>
                    <input 
                        type="text" 
                        className='input-addOnibus' 
                        value={campus}
                        onChange={(e) => setCampus(e.target.value)}
                    />
                    <label>Numeração do ônibus: </label>
                    <input 
                        type="text" 
                        className='input-addOnibus'
                        value={numVeiculo}
                        onChange={(e) => setNumVeiculo(e.target.value)}
                    />
                    <label>Num da placa: </label>
                    <input 
                        type="text" 
                        className='input-addOnibus'
                        value={placa}
                        onChange={(e) => setPlaca(e.target.value)}
                    />
                </div>
                <div className='container-button-addOnibus'>
                    <div className='but-addOnibus' onClick={handleSubmit}>
                        <li className='text-editar-addOnibus'>Adicionar</li>
                    </div>
                </div>
            </div>
        </div>
    )
}