import React from 'react';
import './App.css';


class App extends React.Component{
  state={
    count:0,
    result: 0
  }

  handleMathClick = (type, number) => {
    if(type ==="subtraction"){
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }))
    }else{
      this.setState(prevState => ({
        count: prevState.count +1,
        result: prevState.result + number
      }))} 
  }


  handleResetButton=()=>{
    this.setState({
      result: 0
    })

  }

  render(){
    return(
      <>
        <button onClick={() => this.handleMathClick("subtraction",1)}>-1</button>
        <button onClick = {this.handleResetButton}>Reset</button>
        <button onClick= {()=> this.handleMathClick("addition", 1)}>+1</button>
        <h1>Number of clicks: {this.state.count}</h1>
        <h1>Result: {this.state.result}</h1>
      </>
    )
  }
}
   

export default App
