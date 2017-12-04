import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      arr : ['tom', 'phil', 'trent', 'brittney', 'ted', 'doug'],
      filterStr : ''
    };
  }

  changeFilter(val){
    this.setState({filterStr: val})
  }

  render() {
    var displayArr = this.state.arr.filter((e) =>e.includes(this.state.filterStr))
      .map((e,i) => {
        return (
          <h2 key={i}>{e}</h2>
        );
      });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      <input value={this.state.filterStr} onChange={e=>this.changeFilter(e.target.value)}/>
        {displayArr}
      </div>
    );
  }
}

export default App;
