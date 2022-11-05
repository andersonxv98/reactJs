import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {frase: "é pau é pedra é o fim do caminho"};
        console.log("Construtor: ", this.state.frase);
    }
      
  componentDidMount()//realiza ação logo apos o component ser montado
  {    
    this.setState({frase: "É um caco de vidro, é a vida, é o Sol"})
    console.log(this.state.frase);
    return;
    }

    render(){
        let elem = (<h1>Aguas de Março: {this.state.frase}</h1>);
        return elem;
    }
}
export default Header
  
