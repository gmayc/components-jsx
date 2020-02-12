import './App.css';

import Counter from './components/Counter';
import Header from './components/Header';
import InputComp from './components/InputComp';
import NavBar from './components/NavBar';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Header />
        <InputComp />
        <Counter />
        <div style={{ color: 'black', fontSize: '100px' }}>{0}</div>
      </div>
    );
  }
}

export default App;
