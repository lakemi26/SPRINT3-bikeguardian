import React from 'react';
import { Link } from 'react-router-dom';
import "./CadastroBike.css";

const CadastroBike2 = () => {
    return (
        <div className="container">
            <div className="content">
                <h1 className="title">Cadastrar Bike</h1>
                <p></p>
                <p></p>
                <div className="center-button">
                    <button className="button-upload">Escolher arquivos</button>
                    <div className="qr-code-container">
                        <img src="/images/qrcode.png" alt="QR Code" className="qr-code" />
                    </div>
                    <button className="button-enviar">
                        <Link to="/vistoria" className="enviar">Enviar</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CadastroBike2;