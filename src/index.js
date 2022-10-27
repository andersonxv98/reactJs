import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Titulo from './Titulo';
import Paragrafo from './Paragrafo'
import DataEHora from './DataEHora';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick(){
  root.render(
    <div>
      <Titulo texto="Esse é um Título"/>
      <Paragrafo/>
      <Paragrafo/>
      <Paragrafo/>
      <Paragrafo/>
      <DataEHora/>
    </div>
  )
};


setInterval(tick, 1000);


