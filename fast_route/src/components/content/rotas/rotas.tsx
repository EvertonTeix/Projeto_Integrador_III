import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import { Search, Signpost } from 'lucide-react';
import './rotas.css';
import { LatLngExpression } from 'leaflet';

interface PontoUsuario {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
}

export function Rotas() {
    const [pontosUsuario, setPontosUsuario] = useState<PontoUsuario[]>([]);
    const [origem, setOrigem] = useState<string | null>(null);
    const [destino, setDestino] = useState<string | null>(null);
    const [coordenadasOrigem, setCoordenadasOrigem] = useState<{ lat: number; lon: number } | null>(null);
    const [coordenadasDestino, setCoordenadasDestino] = useState<{ lat: number; lon: number } | null>(null);
    const [rota, setRota] = useState<LatLngExpression[]>([]);

    // Carregar os pontos do banco de dados via API
    useEffect(() => {
        const fetchPontosUsuario = async () => {
            try {
                const response = await fetch('http://localhost:5164/api/Map/locations'); // Substitua pela URL correta
                const data: PontoUsuario[] = await response.json();
                setPontosUsuario(data);
            } catch (error) {
                console.error("Erro ao carregar pontos do usuário:", error);
            }
        };

        fetchPontosUsuario();
    }, []);

    const selecionarOrigem = (pontoId: string) => {
        const ponto = pontosUsuario.find(p => p.id.toString() === pontoId);
        if (ponto) {
            setOrigem(ponto.address);
            setCoordenadasOrigem({ lat: ponto.latitude, lon: ponto.longitude });
        }
    };

    const selecionarDestino = (pontoId: string) => {
        const ponto = pontosUsuario.find(p => p.id.toString() === pontoId);
        if (ponto) {
            setDestino(ponto.address);
            setCoordenadasDestino({ lat: ponto.latitude, lon: ponto.longitude });
        }
    };

    const calcularRota = async () => {
        if (coordenadasOrigem && coordenadasDestino) {
            try {
                const response = await fetch(
                    `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62483158d4a422d648799d46dbfad928dedd&start=${coordenadasOrigem.lon},${coordenadasOrigem.lat}&end=${coordenadasDestino.lon},${coordenadasDestino.lat}`
                );
                const data = await response.json();

                const coordinates = data.features[0].geometry.coordinates.map(
                    (coord: [number, number]) => [coord[1], coord[0]] // Converter [lng, lat] para [lat, lng]
                );

                setRota(coordinates);
            } catch (error) {
                console.error("Erro ao calcular rota:", error);
            }
        } else {
            console.error("Por favor, selecione origem e destino.");
        }
    };

    const getCenter = (): LatLngExpression => {
        if (coordenadasOrigem && coordenadasDestino) {
            const latOrigem = coordenadasOrigem.lat;
            const lonOrigem = coordenadasOrigem.lon;
            const latDestino = coordenadasDestino.lat;
            const lonDestino = coordenadasDestino.lon;
            const midLat = (latOrigem + latDestino) / 2;
            const midLon = (lonOrigem + lonDestino) / 2;
            return [midLat, midLon];
        }
        return [-5.1879418, -40.6445524]; // Valor padrão
    };

    return (
        
        <div className='nav-rotas'>
            <div className='title-rotas'>
                <Signpost />
                <h2>Buscar Rotas</h2>
            </div>
            <div className='form-rotas'>
                <label htmlFor="origem">De onde você deseja partir?</label>
                <select
                    value={origem ?? ''}
                    className='input-rotas'
                    onChange={(e) => {
                        selecionarOrigem(e.target.value)
                        setOrigem(e.target.value)
                    }}
                >
                    <option value="">Selecione um ponto</option>
                    {pontosUsuario.map((ponto) => (
                        <option key={ponto.id} value={ponto.id.toString()}>
                            {ponto.address}
                        </option>
                    ))}
                </select>

                <label htmlFor="destino">Selecione o ponto de destino</label>
                <select
                    value={destino ?? ''}
                    className='input-rotas'
                    onChange={(e) => {
                        selecionarDestino(e.target.value)
                        setDestino(e.target.value)
                    }}
                >
                    <option value="">Selecione um ponto</option>
                    {pontosUsuario.map((ponto) => (
                        <option key={ponto.id} value={ponto.id.toString()}>
                            {ponto.address}
                        </option>
                    ))}
                </select>

                <div className='container-button-buscar'>
                    <div className='but' onClick={calcularRota}>
                        <Search />
                        <span className='text-buscar'>Buscar</span>
                    </div>
                </div>
            </div>

            {/* Mapa */}
            <div className="map-container-rotas" style={{ height: '500px' }}>
                <MapContainer center={getCenter()} zoom={15} >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {coordenadasOrigem && (
                        <Marker position={[coordenadasOrigem.lat, coordenadasOrigem.lon]}>
                            <Popup>Origem</Popup>
                        </Marker>
                    )}
                    {coordenadasDestino && (
                        <Marker position={[coordenadasDestino.lat, coordenadasDestino.lon]}>
                            <Popup>Destino</Popup>
                        </Marker>
                    )}
                    {rota.length > 0 && <Polyline positions={rota} color="blue" />}
                </MapContainer>
            </div>
        </div>

    );
}