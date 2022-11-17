import React from "react"
import Botao from "./Botao";

export default class Calculadora extends React.Component(){
    constructor(){}


    somar(a, b){
        return a + b;
    }

    subtrair(a, b){
        return a -b;
    }

    dividir(a, b){
        return a / b;
    }

    mult(a, b){
        return a * b;
    }

    getButtons() {
        let arrBtn = []
        for (let index = 0; index < 10; index++) {
        
        let element = Botao(index);
        arrBtn.push(element);
    }
    return arrBtn;
    }
    render(){
        return (<div>
            {this.getButton()}       
        </div>);
    }

}
