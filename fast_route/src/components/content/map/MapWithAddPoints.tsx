import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithAddPoints = ({ center, zoom }: { center: [number, number], zoom: number }) => {
    const [markers, setMarkers] = useState<{ latitude: number, longitude: number }[]>([]);
    const mapRef = useRef<any>(null);

    const AddMarker = () => {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                const newMarker = { latitude: lat, longitude: lng };
                setMarkers([...markers, newMarker]);

                // Enviar dados para o servidor
                fetch('http://localhost:5164/api/map/AdicionarPonto', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newMarker),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Ponto adicionado:', data);
                })
                .catch(error => {
                    console.error('Erro ao adicionar ponto:', error);
                });
            }
        });
        return null;
    };

    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '100vh', width: '100%' }} ref={mapRef}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <AddMarker />
            {markers.map((marker, idx) => (
                <Marker key={idx} position={[marker.latitude, marker.longitude]}>
                    <Popup>
                        Latitude: {marker.latitude} <br /> Longitude: {marker.longitude}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapWithAddPoints;
