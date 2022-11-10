import React from "react";

 class Contador extends React.Component{
    constructor(){
    super();
    this.state = { segundos: 0};

    }   

    tick(){
        this.setState({segundos: this.state.segundos +1});
    }

    componentDidMount(){
        console.log("Component did mount");
        this.interval = setInterval(()=>this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
       
        return  (<div>
            <p>
                segundos: {this.state.segundos}
            </p>
        </div>
        );
    }

}

export default Contador;