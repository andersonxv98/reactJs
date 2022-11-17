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
import Contador from './Contador';
import TodoList from './TodoList';
import Botao from './Calculadora/Botao';
import Display from './Calculadora/Display';
import Calculadora from './Calculadora/Calculadora.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

//function main(){
  //let value = prompt("Insira um valor inteiro");
/*const item1 = {
  id:1,//(Date.now().toString) + "item 1",
  texto: "ITEM UM"
}
const item2 = {
  id:2,//(Date.now().toString) + "item 2",
  texto: "ITEM Dois"
}

var itens = [item1, item2];
*/
  root.render(
    <React.StrictMode>
      
    <Calculadora/>
    </React.StrictMode>
  )
//};
//main();



