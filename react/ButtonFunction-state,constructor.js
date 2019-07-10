import React from 'react';
import './App.css';

class App extends React.Component {
  construktor(props){
    super(props);
    this.state ={
      text: ""

    }
  }
  // state = {
  //   text:"",
  //   number: 2
  // }
  handleClick (){

    // const letter = "a"
    // this.setState({
    //   text: this.state.text + letter
    this.setState((prevState) => ({
        text: this.prevState.text 
      }))

  render() {
    return (
      <>
        <button onClick ={this.handleClick.bind(this)}>Dodaj "A"</button>
        <h1>{this.state.text}</h1>
      
      </>
    )
  }
}
}
 

export default App;
