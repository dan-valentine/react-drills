import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message : ''
    }
  }

  changeMessage(val){
    this.setState({
      message: val
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <input value={this.state.message} onChange={e=>this.changeMessage(e.target.value)}/>
          <h2>{this.state.message}</h2>
        </p>
      </div>
    );
  }
}

export default App;
