import React, { useEffect, useState } from 'react';
import { Home } from './home/home';
import './content.css';
import { Rotas } from './rotas/rotas';
import { Onibus } from './onibus/visualizar-onibus/onibus';
import { Perfil } from './perfil/perfil';
import { AddOnibus } from './onibus/adicionar-onibus/addOnibus';
import MapComponent from './map/MapComponent';

function Content(props: { escolha: number, userId: number | null }) {
    const [points, setPoints] = useState<{ latitude: number; longitude: number }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.escolha === 5) {
            // Buscar pontos quando o componente Content é carregado
            fetch('http://localhost:5164/api/Map/locations')
                .then(response => response.json())
                .then(data => {
                    setPoints(data);
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
                    <Rotas />
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
                        {loading ? (
                            <p>Loading points...</p>
                        ) : (
                            <MapComponent center={[-5.1879418, -40.6445524]} zoom={28} points={points} />
                        )}
                    </div>
                </div>
            );
        case 6:
            return (
                <div className="container">
                    <div className="map-container">
                        <MapComponent center={[-5.1879418, -40.6445524]} zoom={28} points={points} />
                    </div>
                </div>
            );
        default:
            return null;
    }
}

export default Content;
