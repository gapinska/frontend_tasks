import React from 'react';
import './App.css';


class App extends React.Component{
  state={
    count:0,
    result: 0
  }

  handleMathClick = (type, number) => {
    
    if(type ==="substraction"){
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }))
    }else{
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result + number
      }))} 
  }


  handleResetButton=()=>{
    this.setState({
      result: 0,
      count: 0
    })

  }

  render(){
    return(
      <>
        <MathButton 
          name="-1" 
          number= {1} 
          type="substraction" 
          click={this.handleMathClick} 
        />
        <MathButton
        name="+1"
        number={1}
        type="addition"        
        click={this.handleMathClick}         
        />
        <MathButton
        name="RESET"
        click={this.handleResetButton}
        />
        <h1>Number of clicks: {this.state.count}</h1>
        <h1>Result: {this.state.result}</h1>
      </>
    
    )
  }
}

const MathButton = (props)=>{
  return(
  <button onClick= {()=>props.click(props.type, props.number)}>{props.name}</button>
  )
}
   

export default App