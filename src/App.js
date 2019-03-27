import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
