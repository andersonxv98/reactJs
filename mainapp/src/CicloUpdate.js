import React from 'react';
class CicloUpdate extends React.Component {
constructor(props){
    super(props);
    this.state= {name:props.name}
}
  // Initializing the state
  
  
  componentDidMount() {
  
    // Changing the state after 1 sec
    setTimeout(() => {
      this.setState({name: 'Zarabana' });
    }, 1000);
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
  
    // mostra o valor anterios antes de atualizar o valor atual 

    console.log("Valor anterior: ",prevState.name)
    return;
  }
  
  componentDidUpdate() {
  
    // Mostra o vallor do estado atual apos atualizar
    console.log("valkor atual: ",this.state.name)

    return this.state.name;
  }
  
  render() {
    return (
        <h1>Teste</h1>
    );
  }
}
  
export default CicloUpdate;