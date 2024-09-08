import React, { useEffect, useState } from 'react';
import { Home } from './home/home';
import './content.css';
import { Rotas } from './rotas/rotas';
import { Onibus } from './onibus/visualizar-onibus/onibus';
import { Perfil } from './perfil/perfil';
import { AddOnibus } from './onibus/adicionar-onibus/addOnibus';
import AddPoints from './map/MapComponent';
import MapComponent from './map/AddPoints';

function Content(props: { escolha: number, userId: number | null }) {
    const [points, setPoints] = useState<{ latitude: number; longitude: number; address?: string }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.escolha === 5) {
            // Buscar pontos de entrega quando o componente Content é carregado
            fetch('http://localhost:5164/api/Map/locations')
                .then(response => response.json())
                .then(data => {
                    // Formatar os dados se necessário, ou apenas definir diretamente se a API já está no formato certo
                    const formattedPoints = data.map((point: any) => ({
                        latitude: point.latitude,
                        longitude: point.longitude,
                        address: point.address // Adicionar o endereço se estiver disponível
                    }));
                    setPoints(formattedPoints);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Erro ao buscar pontos:', error);
                    setLoading(false);
                });
        }
    }, [props.escolha]);

    switch (props.escolha) {
        case 0:
            return (
                <div className="container">
                    <Home />
                </div>
            )
        case 1:
            return (
                <div className="container">
                    <div className="map-container">
                        <Rotas />
                    </div>
                </div>
            )
        case 2:
            return (
                <div className="container">
                    <Onibus />
                </div>
            )
        case 3:
            return (
                <div className="container">
                    <Perfil userId={props.userId} />
                </div>
            )
        case 4:
            return (
                <div className="container">
                    <AddOnibus userId={props.userId} />
                </div>
            )
        case 5:
            return (
                <div className="container">
                    <div className="map-container">
                        <AddPoints />
                    </div>
                </div>
            );
        case 6:
            return (
                <div className="container">
                    <div className="map-container">
                        {loading ? (
                            <p>Loading points...</p>
                        ) : (
                            <MapComponent center={[-5.1879418, -40.6445524]} zoom={15} initialPoints={points} />
                        )}
                    </div>
                </div>
            );
        default:
            return null;
    }
}

export default Content;
