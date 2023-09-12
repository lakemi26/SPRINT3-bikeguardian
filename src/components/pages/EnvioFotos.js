import React from 'react';
import "./EnvioFotos.css";

export default function EnvioFotos() {
    return (
        <div className="containerEnvio">
            <div className='QRcode'></div>
            <div className='texto'>
                <p>Para a próxima etapa você deve ter em mãos um 
                    dispositivo com câmera solicitaremos uma foto sua
                    e fotos da sua bike, não é possível subir imagens 
                    da galeria. Todas as fotos devem ser tiradas em 
                    tempo real. 
                    Esteja atendo a qualidade da imagem, uma imagem 
                    ruim pode atrasar a contratação do seu seguro.</p>
                    <br/>
                    <p><a href=" ">Caso esteja tento problemas, clique aqui</a></p>
            </div>
        </div>
    );
}

