import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    userInput: ''
  };
  /**
  *Handle text change event
  */
  onTextUpdate = (e) =>{
  	this.setState({
      userInput: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" name="userInput" value={this.state.userInput} onChange={this.onTextUpdate}/>
          <p className="echo">Echo:</p>
          <p>{this.state.userInput}</p>
        </div>
      </div>
    );
  }
}

export default App;