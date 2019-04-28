import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <a href={'/caixa'}>Caixa</a><br />
            <a href={'/ordem-de-servicos'}>Ordem de Serviço</a><br />
            <a href={'/sobre'}>Sobre</a><br />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
