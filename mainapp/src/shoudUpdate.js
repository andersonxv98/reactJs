import React from "react";

export default class ShouldUpdate extends React.Component{
    constructor(){
        super();
        this.state = {ataque: 1000};
        this.addAtaque = this.addAtaque.bind(this)
    }

addAtaque(){
    this.setState({ataque: this.state.ataque + 100});
}

    shouldComponentUpdate(nextProps, nextState) //verifica se o componente deve atualizar de acordo com  o valor destado anterior
    {
        let val = false;
        if(this.state.ataque != nextState.ataque){
            val = true;
        }
        return val;
    }

    render(){
        console.log("renderizou");
        return (
            <div>
              <h1>shouldComponentUpdate </h1>  
              <p><b>{this.state.ataque.toString()}</b></p>
              
              <button onClick={this.addAtaque}>
                Click
              </button>
            </div>
          );
    }
}