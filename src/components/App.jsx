import React, { Component } from 'react';
import './App.scss';
import Home from './header/Header';
import Clock from './clock/Clock';

class App extends Component {
  state = {
    title: 'React Clock'
  }
  render() {
    const { title } = this.state;
    return ( 
      <div className="appComponent">
        <Home appTitle={title} />
        <Clock />
      </div>
    );
  }
}
 
export default App;
