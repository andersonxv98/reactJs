import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {frase: "é pau é pedra é o fim do caminho"};
        console.log("Construtor: ", this.state.frase);
    }
    static getDerivedStateFromProps(props, state)// realiza ação apos o construtor
    {   console.log("Derived State From Props: ", props.fr);
        return {frase: props.fr};   
    }

    render(){
        let elem = (<h1>Aguas de Março: {this.state.frase}</h1>);
        return elem;
    }
}
export default Header