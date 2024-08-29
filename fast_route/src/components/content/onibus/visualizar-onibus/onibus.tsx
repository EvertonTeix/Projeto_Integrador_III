import { useState, useEffect } from 'react';
import { BusFront, Search, ClipboardList } from 'lucide-react';
import './onibus.css';

interface Veiculo {
    veiculoId: number;
    placa: string;
    numVeiculo: string;
    cidadeCampus: string;
    usuarioId?: number;
}

interface Resultado {
    quantidadeTotal: number;
    veiculos: Veiculo[];
}

export function Onibus() {
    const [campus, setCampus] = useState('');
    const [campi, setCampi] = useState<{ id: number, nome: string }[]>([]);
    const [onibus, setOnibus] = useState<Veiculo[]>([]);
    const [campusPesquisado, setCampusPesquisado] = useState('');
    const [quantidadeTotal, setQuantidadeTotal] = useState<number | null>(null);
    const [mensagemErro, setMensagemErro] = useState<string | null>(null);


    useEffect(() => {
        fetchCampi();
    }, []);

    const fetchCampi = async () => {
        try {
            const response = await fetch('http://localhost:5164/api/veiculos/campi');
            if (response.ok) {
                const data = await response.json();
                setCampi(data.map((nomeCampus: string, index: number) => ({ id: index, nome: nomeCampus })));
            } else {
                console.error('Erro ao buscar campi:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao buscar campi:', error);
        }
    };



    const handleBuscarOnibus = async () => {
        try {
            const response = await fetch(`http://localhost:5164/api/veiculos/campus/${campus}`);
            if (response.ok) {
                const data: Resultado = await response.json();
                setOnibus(data.veiculos || []); // Garante que onibus seja um array
                setCampusPesquisado(campus);
                setQuantidadeTotal(data.quantidadeTotal);
                setMensagemErro(null);
            } else {
                const errorText = await response.text();
                setMensagemErro(errorText);
                setOnibus([]); // Garante que onibus seja um array vazio
                setQuantidadeTotal(null);
                setCampusPesquisado("");
            }
        } catch (error) {
            console.error('Erro ao buscar ônibus:', error);
            setMensagemErro('Erro ao buscar ônibus. Por favor, tente novamente mais tarde.');
            setOnibus([]); // Garante que onibus seja um array vazio
            setQuantidadeTotal(null);
        }
    };

    return (
        <div className='nav-onibus'>
            <div className='container-onibus'>
                <div className='title-onibus'>
                    <BusFront />
                    <h2>Visualizar Ônibus</h2>
                </div>
                <div className='form-onibus'>
                    <label htmlFor="campus">Selecione o Campus: </label>
                    <select
                        id="campus"
                        className='input-onibus'
                        value={campus}
                        onChange={(e) => setCampus(e.target.value)}
                    >
                        <option value="">Selecione...</option>
                        {campi.map(c => (
                            <option key={c.id} value={c.nome}>{c.nome}</option>
                        ))}
                    </select>
                </div>
                <div className='container-button-buscar-onibus'>
                    <div className='but-onibus' onClick={handleBuscarOnibus}>
                        <Search />
                        <li className='text-buscar-onibus'>Buscar</li>
                    </div>
                </div>

                <div className='container-result'>
                    {mensagemErro ? (
                        <div className='error-message'>
                            <p>{mensagemErro}</p>
                        </div>
                    ) : (
                        <>
                            <div className='container-result-title'>
                                <ClipboardList />
                                <h2>Ônibus do Campus: {campusPesquisado}</h2>
                            </div>
                            <div className="onibus-list">
                                {onibus.map((bus, index) => (
                                    <div className="onibus-item" key={index}>
                                        <h3 className="onibus-title">Ônibus {index + 1}</h3>
                                        <p><strong>Placa:</strong> {bus.placa}</p>
                                        <p><strong>Número do Veículo:</strong> {bus.numVeiculo}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='container-result-title'>
                                {quantidadeTotal !== null && <h3>Total: {quantidadeTotal}</h3>}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
