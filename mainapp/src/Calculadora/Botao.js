import React from 'react'

export default class Botao extends React.Component {
    constructor(props){
    super(props)
    this.state = {label: ''}
    }

    
    botao(){
        let btn =(<button className={this.state.label} onClick={() => funcao(this.state.funcao)}>
        {label}
    </button>);
        return btn;
    }

    funcao(){
        
    }

    render(){ 
    return btn;
}

}
