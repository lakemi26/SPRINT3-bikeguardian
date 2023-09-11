import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>
      Coberturas
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Danos à bike'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Substração da bike'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Acidentes pessoais'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Garantia internacional'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Danos por circuito de bikes elétricas'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
