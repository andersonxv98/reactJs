import React from "react";

 export default class Tabuada extends React.Component{  
    constructor(props){
    super(props);
    let val = parseInt(props.n)  
     this.element = (
        <div key="DivTabuada">
        {this.creatH3(val)}
        </div>
    );
};

 creatH3(n){
    let arr = [];
    arr.push(<h1 key="h1Tabuada" className= 'm-5'>Tabuada do {n}!</h1>);
    for (let index = 1; index < 11; index++) {
        const element = <h3 key={index.toString()}>{index} X {n} = {index *n}</h3>;
        arr.push(element);
    }
    return arr;

}

render(){
    return this.element;
}
    
};

//export default Tabuada;