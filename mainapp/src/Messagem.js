import React from "react";
export default class Menssagem extends React.Component{
    constructor(props){
        super(props);
        //this.msg = this.exibir("olá Mundo");
    }

    exibir = (msg)=>{
        alert(msg);
        console.log("O botão foi clicado");
        return msg;
    }

    render(){
        const elem = (<button onClick={()=>this.exibir("olá mundo!")}>CLica</button>)
        return elem;
    }

}