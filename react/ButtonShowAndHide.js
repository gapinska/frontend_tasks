import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      messageIsActive: false
      
    }
  }



  handleMessageButton= ()=>(
    this.setState({
      messageIsActive: !this.state.messageIsActive
    })


  )


  render(){    
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    return(
      <>
        <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? `HIDE` : `SHOW`}</button>
        <p>{this.state.messageIsActive && text}</p>
      </>
    )
  }
}
   

export default App
