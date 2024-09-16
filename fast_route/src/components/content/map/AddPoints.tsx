import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { MapPinPlusInside } from 'lucide-react';

interface Point {
    latitude: number;
    longitude: number;
    address?: string;
}

interface MapComponentProps {
    center: LatLngExpression;
    zoom: number;
    initialPoints: Point[]; // Agora chamamos de `initialPoints` para distinguir do estado local
}

const AddPoints: React.FC<MapComponentProps> = ({ center, zoom, initialPoints }) => {
    const [points, setPoints] = useState<Point[]>(initialPoints); // Estado local para gerenciar os pontos no mapa

    // Função para lidar com cliques no mapa e adicionar pontos
    const HandleMapClick = () => {
        useMapEvent('click', async (event) => {
            const { lat, lng } = event.latlng;

            const confirmAdd = window.confirm(`Deseja adicionar um ponto de entrega nas coordenadas: Latitude ${lat.toFixed(6)}, Longitude ${lng.toFixed(6)}?`);

            if (confirmAdd) {
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
                    const data = await response.json();

                    const address = data.display_name || 'Endereço não disponível';
                    alert(`Endereço obtido: ${address}`);

                    // Enviar os dados para o backend
                    const postResponse = await fetch('http://localhost:5164/api/Map/AdicionarPonto', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ latitude: lat, longitude: lng, address: address })
                    });

                    if (postResponse.ok) {
                        alert("Ponto de entrega adicionado com sucesso!");
                        
                        // Atualizar o estado com o novo ponto
                        setPoints((prevPoints) => [
                            ...prevPoints,
                            { latitude: lat, longitude: lng, address }
                        ]);
                    } else {
                        alert("Erro ao adicionar o ponto de entrega.");
                    }

                } catch (error) {
                    console.error('Erro ao obter o endereço:', error);
                    alert('Erro ao obter o endereço.');
                }
            }
        });

        return null; // O `useMapEvent` não precisa renderizar nada
    };

    return (

        <div className='nav-mapa'>
        <div className='container-rotas'>
        <div className='title-mapa'>
            <MapPinPlusInside  />
            <h2>Adicionar pontos de entrega</h2>
        </div>
        <div className='subtitle-container'>
                    <label>Clique no mapa para adicionar o local</label>
        </div>
        <div className="map-container" style={{ height: '600px', width: '1000px' }}>
        <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {points.map((point, index) => (
                <Marker key={index} position={[point.latitude, point.longitude] as LatLngExpression}>
                    <Popup>
                        Ponto de entrega: <br />
                        Latitude: {point.latitude}, Longitude: {point.longitude}
                        <br />
                        Endereço: {point.address || 'Endereço não disponível'}
                    </Popup>
                </Marker>
            ))}
            <HandleMapClick />
        </MapContainer>
        </div>
        </div>
        </div>
    );
};

export default AddPoints;
