import React from 'react';
import './PagClie.css';
import ClimaBanner from '../Clima-banner';
import LinhaBoleto from '../linhaBoleto';
import BoletoBanner from '../BoletoBanner';
import LinhaDetalhe from '../LinhaDetalhe';
import DetalhesBanner from '../DetalhesBanner';
import LinhaHistoria from '../LinhaHistoria';
import HistBanner from '../HistBanner';
import LinhaNotificacao from '../LinhaNotificacao';
import BannerNotificacao from '../BannerNotificacao';


function PagClie() {
    return (
      <>
        <ClimaBanner/>
        <LinhaBoleto/>
        <BoletoBanner/>
        <LinhaDetalhe/>
        <DetalhesBanner/>
        <LinhaHistoria/>
        <HistBanner/>
        <LinhaNotificacao/>
        <BannerNotificacao/>
      </>
    );
  }

  export default PagClie;

/*
Querido professor, este código será refeito antes da apresentação para a Porto Seguro
*/