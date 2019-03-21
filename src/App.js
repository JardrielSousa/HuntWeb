import React, { Component } from 'react';
import Routes from './routes';
import Header from './Components/Header';
import Main from './pages/main';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
