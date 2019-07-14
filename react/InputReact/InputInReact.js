import React from 'react';
import './App.css';


class App extends React.Component{
   state= {
     value:""
   }

   handleInputChange= (e) => (
     this.setState({
       value: e.target.value
     }))

    handleButton= ()=>(
      this.setState({
        value:""
      })
    ) 

   
   render(){
     return(
       <>
        <input value={this.state.value} type="text" placeholder= "Your nickname..." onChange={this.handleInputChange}/>
        <button onClick= {this.handleButton}>Reset</button>
        <h1 className= "title">{this.state.value.toUpperCase()}</h1>
       </>
     )
   }
  } 
  

export default App
