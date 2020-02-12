import './App.css';

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      max: 100,
    };
  }

  render() {
    return (
      <div className='App'>
        <h1> Start Coding! </h1>
      </div>
    );
  }
}

export default App;
