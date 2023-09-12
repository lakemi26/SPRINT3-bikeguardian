import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className='footer-information'>
      <div className="footer-column">
        <a href="https://portoseguro-helpsite-prod.b01.inbenta.services/canal-de-ajuda">Perguntas Frequentes</a>

        </div>
        <div className="footer-column">
        <a href="https://portoseguro.com.br/fale-conosco/contatos/telefones-e-sac">Sac e Telefones</a>

        </div>
        <div className="footer-column">
        <a href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!">Whatsapp</a>

        </div>
        <div className="footer-column">
        <a href="https://portoseguro.com.br/fale-conosco/contatos/enderecos">Endereços</a>
        </div>
        </div>
        
        <div className="footer-logos">
          <a href="https://portoseguro.com.br/"><img src='/images/logo-porto2.png' alt='Logo Porto Seguro'/></a>
          <a href="/AncientCode"><img src='/images/AncientCodeLogo.png' alt='Logo Ancient Code'/></a>

        </div>
      </section>
    </div>
  );
}

export default Footer;
