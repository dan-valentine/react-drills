import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { arr: ['james', 'megan', "dan"] };
  }

  render() {
    return (
      <div>
        {this.state.arr.map((e, i) => {
          return (
            <h2 key={i} >{e}</h2>
          )
        })
      }
      </div>
    )
  }
}

export default App;
