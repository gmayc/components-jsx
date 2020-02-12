import './App.css';

import Counter from './components/Counter';
import Header from './components/Header';
import InputComp from './components/InputComp';
import NavBar from './components/NavBar';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      max: 100,
    };
  }

  add = () => {
    if (this.state.counter < this.state.max || !this.state.max) {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  };
  substract = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  setMax = value => {
    if (value < 100) {
      this.setState({
        max: value,
      });
    }
  };

  refresh = () => {
    this.setState({
      counter: 0,
      max: 100,
    });
  };

  render() {
    return (
      <div className='App'>
        <NavBar refresh={this.refresh} />
        <Header />
        <InputComp setMax={this.setMax} />
        <Counter add={this.add} substract={this.substract} />
        <div style={{ color: 'black', fontSize: '100px' }}>
          {this.state.counter}
        </div>
      </div>
    );
  }
}

export default App;
