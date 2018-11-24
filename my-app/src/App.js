import React, { Component } from 'react';
import FieldSet from './components/fieldset';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FieldSet
          legend='Quanto você quer ganhar por mês?'
          label='Quantidade por mês'
          idInput='ganho-mes'
        />
      </div>
    );
  }
}

export default App;
