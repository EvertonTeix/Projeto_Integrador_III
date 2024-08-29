import { useEffect, useState } from 'react';
import { UserCog, Camera } from 'lucide-react';
import './perfil.css';

interface Usuario {
    usuarioId: number;
    nomeUsuario: string;
    email: string;
    foto?: string;
}

export function Perfil({ userId }: { userId: number | null}) {
    
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [foto, setFoto] = useState('');

    useEffect(() => {
        // Faz a requisição para obter os dados do usuário usando o ID passado como propriedade
        const fetchUsuario = async () => {
            try {
                const response = await fetch(`http://localhost:5164/api/Usuarios/${userId}`);
                if (response.ok) {
                    const data: Usuario = await response.json();
                    setUsuario(data);
                    setNome(data.nomeUsuario);
                    setEmail(data.email);
                    setFoto(data.foto || '');
                } else {
                    console.error('Erro ao buscar informações do usuário');
                }
            } catch (error) {
                console.error('Erro ao buscar informações do usuário:', error);
            }
        };

        fetchUsuario();
    }, [userId]);

    const handleSalvar = async () => {
        if (!usuario) return;

        const usuarioAtualizado = {
            ...usuario,
            nomeUsuario: nome,
            email: email,
            foto: selectedImage || foto // Atualiza com a nova foto se selecionada
        };

        try {
            const response = await fetch(`http://localhost:5164/api/Usuarios/${usuario.usuarioId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuarioAtualizado),
            });

            if (response.ok) {
                alert('Perfil atualizado com sucesso!');
            } else {
                alert('Erro ao atualizar o perfil.');
            }
        } catch (error) {
            console.error('Erro ao salvar o perfil:', error);
            alert('Erro ao conectar com a API.');
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='nav-perfil'>
            <div className='container-perfil'>
                <div className='title-perfil'>
                    <UserCog />
                    <h2>Editar Perfil</h2>
                </div>
                <div className='container-img-perfil'>
                    <div className='img-perfil'>
                        {selectedImage ? (
                            <img src={selectedImage} alt="Foto de perfil" className='img-perfil' />
                        ) : foto ? (
                            <img src={foto} alt="Foto de perfil" className='img-perfil' />
                        ) : (
                            <Camera className='img-perfil-icon' />
                        )}
                    </div>
                    <h2 className='text-img-perfil' onClick={() => document.getElementById('fileInput')?.click()}>
                        Editar foto
                    </h2>
                    <input 
                        id='fileInput'
                        type="file" 
                        style={{ display: 'none' }} 
                        onChange={handleImageChange}
                    />
                </div>
                <div className='form-perfil'>
                    <label htmlFor="">Nome: </label>
                    <input 
                        type="text" 
                        className='input-perfil' 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                    />
                    <label htmlFor="">Email: </label>
                    <input 
                        type="text" 
                        className='input-perfil' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className='container-button-editar-perfil'>
                    <div className='but-perfil' onClick={handleSalvar}>
                        <li className='text-editar-perfil'>Salvar</li>
                    </div>
                </div>
            </div>
        </div>
    )
}
