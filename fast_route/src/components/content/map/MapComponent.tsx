import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';

interface MapComponentProps {
    center: LatLngExpression;
    zoom: number;
    points: { latitude: number; longitude: number }[];
}

const MapComponent: React.FC<MapComponentProps> = ({ center, zoom, points }) => {

    // Função para lidar com cliques no mapa
    const HandleMapClick = () => {
        useMapEvent('click', (event) => {
            const { lat, lng } = event.latlng;

            // Exibir a caixa de diálogo de confirmação
            const confirmAdd = window.confirm(`Deseja adicionar um ponto de entrega nas coordenadas: Latitude ${lat.toFixed(6)}, Longitude ${lng.toFixed(6)}?`);

            if (confirmAdd) {
                // Enviar os dados para o backend se o usuário confirmar
                fetch('http://localhost:5164/api/Map/add-point', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ latitude: lat, longitude: lng })
                }).then(response => {
                    if (response.ok) {
                        alert("Ponto de entrega adicionado com sucesso!");
                        // Aqui você pode adicionar lógica para atualizar o estado com o novo ponto, se necessário
                    } else {
                        alert("Erro ao adicionar o ponto de entrega.");
                    }
                }).catch(error => {
                    console.error('Erro ao enviar dados:', error);
                    alert("Erro ao adicionar o ponto de entrega.");
                });
            }
        });

        return null; // O `useMapEvent` não precisa renderizar nada
    };

    return (
        <MapContainer 
            center={center} 
            zoom={zoom} 
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {points.map((point, index) => (
                <Marker key={index} position={[point.latitude, point.longitude]}>
                    <Popup>
                        Ponto de entrega: <br />
                        Latitude: {point.latitude}, Longitude: {point.longitude}
                    </Popup>
                </Marker>
            ))}
            <HandleMapClick />
        </MapContainer>
    );
};

export default MapComponent;
