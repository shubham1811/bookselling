import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';
class App extends Component {
  render() {
    var courses=[
      {name:'web',price:1800},
      {name:'machine learning',price:800},
      {name:'ai',price:2800},
      {name:'digi',price:8800}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
