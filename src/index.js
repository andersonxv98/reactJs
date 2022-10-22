import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Titulo from './Titulo';
import Paragrafo from './Paragrafo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <Titulo texto="Esse é um Título"/>
      <Paragrafo/>
      <Paragrafo/>
      <Paragrafo/>
      <Paragrafo/>
    </div>
);


