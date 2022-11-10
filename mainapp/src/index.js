import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Titulo from './TabuadaAtt/Titulo';
import Paragrafo from './Paragrafo'
import DataEHora from './DataEHora';

import MainAppTabuada from './TabuadaAtt/TabuadaMainApp';
import Menssagem from './Messagem';
import Header from './Header';
import Header2 from './Header2';
import CicloUpdate from './CicloUpdate';
import ShouldUpdate from './shoudUpdate';

const root = ReactDOM.createRoot(document.getElementById('root'));

//function main(){
  //let value = prompt("Insira um valor inteiro");

  root.render(
    <React.StrictMode>
      <div>
       
        <Menssagem/>
        <Header  fr="É um resto de toco, é um pouco sozinho"/>
        
        <Header2/>
        <CicloUpdate name = "valorinicial"  />
        <ShouldUpdate/>
      </div>
    </React.StrictMode>
  )
//};
//main();



