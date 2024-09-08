import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { Signpost } from 'lucide-react';
import './map.css';

interface PontoEntrega {
    id: number;
    latitude: number;
    longitude: number;
    address: string;
}

const MapComponent: React.FC = () => {
    const [pontos, setPontos] = useState<PontoEntrega[]>([]);

    // Função para buscar os pontos do banco de dados
    const fetchPontos = async () => {
        try {
            const response = await fetch('http://localhost:5164/api/Map/locations');
            const data: PontoEntrega[] = await response.json();
            setPontos(data);
        } catch (error) {
            console.error("Erro ao buscar pontos de entrega:", error);
        }
    };

    // UseEffect para carregar os pontos quando o componente for montado
    useEffect(() => {
        fetchPontos();
    }, []);

    return (
    <div className='nav-mapa'>
        <div className='container-rotas'>
        <div className='title-mapa'>
            <Signpost />
            <h2>Visualizar pontos de entrega</h2>
        </div>

        <div className="map-container" style={{ height: '600px', width: '1000px' }}>
        <MapContainer center={[-5.1879418, -40.6445524]} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {pontos.map((ponto) => (
                <Marker key={ponto.id} position={[ponto.latitude, ponto.longitude] as LatLngExpression}>
                    <Popup>
                        {ponto.address} <br /> Lat: {ponto.latitude}, Lon: {ponto.longitude}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
        </div>
        </div>
    </div>
    );
};

export default MapComponent;
