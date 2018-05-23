import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input type='textbox'/>
        <button type='submit'> Linear Search </button>
        <button type='submit'> Binary Search </button>
      </div>
    );
  }
}

export default App;
