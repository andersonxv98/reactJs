import React from "react";

class Cores extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nome_cor : "Rosa",
            value : "#FF0084"
        };
       
       
    };

    mudarCor = ()=>{
        let val, nome;
        val = "#005B8F";
        nome = "Azul";
        if (this.state.value === "#005B8F"){
            val = "#FF0084";
            nome = "Rosa"; 
        }
        console.log("nova Cor? ", nome);
        this.setState({nome_cor: nome});
        this.setState({value: val});

        

    }

    component = ()=>{
        const cp = (
            <div>
                <h1 style= {{color:this.state.value}}>{this.state.nome_cor}</h1>
                <button type="button" onClick={this.mudarCor}>Btn</button>
            </div>
        )
            return cp;
    }

    render(){
        const elem =  this.component();
        return elem;
    }
}

export default Cores;