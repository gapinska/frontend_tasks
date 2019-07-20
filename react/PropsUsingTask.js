import React from 'react'

import './App.css';

class App extends React.Component {
  state = {
    count: 0,
    result: 0,
    
    
  }
  

  handleMathClick= (type, number) => {
      const initialState = 0
      if (type === 'subtraction'){
          this.setState(prevSTate =>({
              count: ++prevSTate.count,
              result: prevSTate.result - number
          }))
      }else if (type === 'adding'){
          this.setState(prevState =>({
              count: ++prevState.count,
              result: prevState.result + number
          }))
      }else if (type === 'reset'){
          this.setState(prevState =>({
              count: initialState,
              result: initialState

          }))
      }

  }

  

  
render(){
  return (
    <React.Fragment>
      <MathButton 
        name= "-10" 
        number="10" 
        type="subtraction" 
        click={this.handleMathClick}
        />
     
      <MathButton 
        name= "reset"  
        type="reset" 
        click={this.handleMathClick}
        />

        <MathButton 
        name= "10" 
        number={10} 
        type="adding" 
        click={this.handleMathClick}
        />
        <ResultPanel count = {this.state.count} result= {this.state.result}/>
    </React.Fragment>
  )
}



}

const MathButton = (props) =>{
    return(
    <button onClick={() => props.click(props.type, props.number)}>{props.name}</button>
    )
}

const ResultPanel = (props) => {

    return (
        <>
            <h1>Number of clicks: {props.count} {props.count>10?<span>Don't cross 10!</span>: null }</h1>
            <h1>Result: {props.result}</h1>

        </>
    )

}

export default App