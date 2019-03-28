import React, { Component,Fragment } from 'react';

import './App.css';

// import CreateList from './components/content-type/createList'
import MyComponent from './components/higherorder/MyComponent'
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MyComponent name="abc"></MyComponent>
      </div>
    );
  }
}

export default App;
