import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Titulo from './TabuadaAtt/Titulo';
import Paragrafo from './Paragrafo'
import DataEHora from './DataEHora';

import MainAppTabuada from './TabuadaAtt/TabuadaMainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

function main(){
  let value = prompt("Insira um valor inteiro");

  root.render(
    <React.StrictMode>
      <div>
        <Titulo texto="Esse é um Título"/>
        <Paragrafo/>
        <Paragrafo/>
        <Paragrafo/>
        <Paragrafo/>
        <DataEHora/>
        <MainAppTabuada n = {value}/>
      </div>
    </React.StrictMode>
  )
};
main();



