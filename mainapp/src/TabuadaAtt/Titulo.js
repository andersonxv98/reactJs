
import React from "react";

class Titulo extends React.Component{
    constructor(prop){
        super(prop);
        this.conteudo= {
            tit: prop.tit,
            text: prop.text,
            link: prop.link
        }

    }

    getTitulo() {
        const element = (
            <div>
                <h1>{this.conteudo.tit}</h1>
                <p>{this.conteudo.text}</p>
                <a href={this.conteudo.link}>{this.conteudo.link}</a>
            </div>
        );
        return element;
    }

    render() {
        return this.getTitulo();
        
    }
    
}

export default Titulo;