import React from "react";
import Tabuada from './Tabuada';
import Titulo2 from './Titulo2';
import Cores from '../Colors';
import Titulo from './Titulo';
export default  class MainAppTabuada extends React.Component{
       constructor(props){
        super(props);
        this.n = props.n;
        this.child = this.creat();
       }
    
       creat(){
        let ele = (
         <div>   
            <Cores/>
            <Titulo tit = {"FATECS"} text = {"Faculdade de tecnologia"} link= {"https://www.vestibularfatec.com.br/home/"}/>
            <Titulo2/>
            <Tabuada n = {this.n}/>
        </div>
        )

        return ele; };

        render(){
            return this.child;
        }

            
};

