import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className='footer-information'>
      <div className="footer-column">
        <a href="https://portoseguro-helpsite-prod.b01.inbenta.services/canal-de-ajuda">Perguntas Frequentes</a>
          {/* Adicione o conteúdo do FAQ aqui */}
        </div>
        <div className="footer-column">
        <a href="https://portoseguro.com.br/fale-conosco/contatos/telefones-e-sac">Sac e Telefones</a>
          {/* Adicione os números de telefone e outras informações aqui */}
        </div>
        <div className="footer-column">
        <a href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!">Whatsapp</a>
          {/* Adicione o número de Whatsapp e outras informações aqui */}
        </div>
        <div className="footer-column">
        <a href="https://portoseguro.com.br/fale-conosco/contatos/enderecos">Endereços</a>
          {/* Adicione o endereço aqui */}
        </div>
        </div>
        
        <div className="footer-column">
          <a href="https://portoseguro.com.br/"><img src='/images/logo-porto2.png' alt='Logo Porto Seguro'/></a>
          <a href="https://www.exemplo.com">Link 2</a>
          {/* Adicione os links e logos aqui */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
