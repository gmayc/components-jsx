import './App.css';

import AddIcon from '@material-ui/icons/Add';
import Header from './components/Header';
import MinusIcon from '@material-ui/icons/Remove';
import NavBar from './components/NavBar';
import React from 'react';
import { TextField } from '@material-ui/core';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicker: 0,
      max: 100,
    };
  }

  add() {
    if (this.state.clicker < this.state.max || !this.state.max) {
      this.setState({
        clicker: this.state.clicker + 1,
      });
    }
  }
  substract() {
    if (this.state.clicker > 0) {
      this.setState({
        clicker: this.state.clicker - 1,
      });
    }
  }

  setMax = value => {
    if (value < 100) {
      this.setState({
        max: value,
      });
    }
  };

  refresh = () => {
    this.setState({
      clicker: 0,
      max: 100,
    });
  };

  render() {
    return (
      <div className='App'>
        <NavBar refresh={this.refresh} />
        <Header />
        <div className='input'>
          <TextField
            label='Max set to'
            onChange={e => this.setMax(e.target.value)}
            value={this.state.max}
            size='medium'
          />
        </div>
        <div style={{ marginTop: '40px' }}>
          <AddIcon onClick={() => this.add()} fontSize='large' />
          <MinusIcon onClick={() => this.substract()} fontSize='large' />
        </div>
        <div style={{ color: 'black', fontSize: '100px' }}>
          {this.state.clicker}
        </div>
      </div>
    );
  }
}

export default App;
