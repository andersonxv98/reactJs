import React from "react";

 export default class TodoList extends React.Component{
    constructor(props){
    super(props);
    this.state = { 
        itens: [],//props.itens,
        text: ''
    };
    
    

    }   

    handleChange = (e) =>{
        this.setState({text:e.target.value})
        return;
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        
        if(this.state.text.length> 0){
        const item={
            id:Date.now(),
            text:this.state.text
        }
        
        this.setState(state=>({
            itens:state.itens.concat(item),
            text:''
        }))
    }
        return;
    }

    render(){
            const elemt = (<div>
                <h1>Todo List</h1>
                 <ul>
                    {this.state.itens.map(
                        item => (<li key={item.id}>{item.text}</li>)
                    )}
                </ul>

                <br/>
                <form onSubmit={this.handleSubmit}>
                    <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
                    <button>Inserir</button>
                </form>
            </div>
            )
        return  elemt;
    }

}
